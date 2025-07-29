const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// --- START OF THE FIX ---

// We are telling our server to accept requests from our live Vercel website
// AND from our local computer for testing purposes.
const allowedOrigins = [
    'https://funddate-frontend-n4nyxfvio-vishwradhya10s-projects.vercel.app',
    'http://localhost:5173' // This is for local testing with Vite
];

const corsOptions = {
    origin: function (origin, callback) {
        // The 'origin' is the URL of the website trying to contact your backend.
        // We will log it to help debug.
        console.log('Request received from origin:', origin);

        // Allow requests with no origin (like Postman) OR if the origin is in our list
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

// Use the new, more flexible CORS options
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
