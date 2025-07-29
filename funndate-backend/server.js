const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// CORS Configuration to allow your frontend to talk to this server
const allowedOrigins = [
    'https://funddate-frontend-n4nyxfvio-vishwradhya10s-projects.vercel.app',
    'http://localhost:5173' // For local testing
];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOptions));
app.use(express.json());

const DB_PATH = path.join(__dirname, 'emails.json');

// --- NEW FEATURE: An endpoint to get the current waitlist count ---
app.get('/api/waitlist-count', (req, res) => {
    fs.readFile(DB_PATH, 'utf8', (err, data) => {
        if (err) {
            // If we can't read the file (e.g., it's the very first run), send back a count of 0.
            return res.status(200).json({ count: 0 });
        }
        try {
            const emails = JSON.parse(data);
            const count = emails.length;
            res.status(200).json({ count: count });
        } catch (parseErr) {
            // If the file is empty or broken, send back 0.
            res.status(200).json({ count: 0 });
        }
    });
});
// --- END OF NEW FEATURE ---


// This is the existing endpoint to add a new email
app.post('/api/join-waitlist', (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Please provide a valid email.' });
    }

    fs.readFile(DB_PATH, 'utf8', (err, data) => {
        let emails = [];
        if (!err && data) {
            try { emails = JSON.parse(data); } catch (e) {}
        }

        if (emails.includes(email)) {
            return res.status(409).json({ message: 'This email is already on the waitlist.' });
        }

        emails.push(email);

        fs.writeFile(DB_PATH, JSON.stringify(emails, null, 2), (writeErr) => {
            if (writeErr) {
                return res.status(500).json({ message: 'Could not save email.' });
            }
            res.status(200).json({ message: 'Success! Thank you for joining.' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`✅ Backend server is running successfully on http://localhost:${PORT}`);
});
