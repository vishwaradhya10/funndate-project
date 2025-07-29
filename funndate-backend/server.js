const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// --- START OF THE FIX ---

// We are telling our server to ONLY accept requests from our live Vercel website.
// This is a very important security feature.
const allowedOrigins = [
    'https://funddate-frontend-n4nyxfvio-vishwradhya10s-projects.vercel.app'
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
};

// Use the new, specific CORS options
app.use(cors(corsOptions));

// --- END OF THE FIX ---


app.use(express.json()); // Allows the server to understand JSON data

// Path to our simple database file
const DB_PATH = path.join(__dirname, 'emails.json');

// This is the API route your frontend will call
app.post('/api/join-waitlist', (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Please provide a valid email.' });
    }

    fs.readFile(DB_PATH, 'utf8', (err, data) => {
        let emails = [];
        if (!err && data) {
            try {
                emails = JSON.parse(data);
            } catch (parseErr) {
                // Ignore parsing errors, we'll just overwrite with a new array
            }
        }

        if (emails.includes(email)) {
            return res.status(409).json({ message: 'This email is already on the waitlist.' });
        }

        emails.push(email);

        fs.writeFile(DB_PATH, JSON.stringify(emails, null, 2), (writeErr) => {
            if (writeErr) {
                console.error('Error writing to file:', writeErr);
                return res.status(500).json({ message: 'Could not save email.' });
            }
            console.log(`Email saved: ${email}`);
            res.status(200).json({ message: 'Success! Thank you for joining.' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`✅ Backend server is running successfully on http://localhost:${PORT}`);
});
