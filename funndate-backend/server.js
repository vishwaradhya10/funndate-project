const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 4000;

// --- START OF DEBUGGING SECTION ---

// Let's check if the server can see the secret key at all.
// This will only log the first 8 characters for security.
const apiKey = process.env.RESEND_API_KEY1; // <-- UPDATED TO MATCH YOUR SETTINGS
console.log("Server starting... Checking for API Key...");
if (apiKey) {
    console.log("Resend API Key found, starting with:", apiKey.substring(0, 8));
} else {
    console.error("CRITICAL ERROR: RESEND_API_KEY1 is NOT FOUND in environment variables!");
}

const resend = new Resend(apiKey);

// --- END OF DEBUGGING SECTION ---


// CORS Configuration
const allowedOrigins = [
    'https://funddate-frontend-n4nyxfvio-vishwradhya10s-projects.vercel.app',
    'http://localhost:5173'
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

// Endpoint to get the waitlist count
app.get('/api/waitlist-count', (req, res) => {
    // ... (this part is fine)
});

// Endpoint to add a new email
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

        fs.writeFile(DB_PATH, JSON.stringify(emails, null, 2), async (writeErr) => {
            if (writeErr) {
                return res.status(500).json({ message: 'Could not save email.' });
            }

            console.log(`Email ${email} saved to file. Now attempting to send welcome email.`);

            try {
                console.log("Calling Resend API...");
                await resend.emails.send({
                    from: 'Funndate Waitlist <onboarding@resend.dev>',
                    to: email,
                    subject: 'Welcome to the Funndate Waitlist! 🎉',
                    html: `<p>Thank you for joining the Funndate waitlist!</p>`
                });
                console.log(`Successfully sent email to ${email}`);
            } catch (emailError) {
                console.error("--- RESEND FAILED ---");
                console.error(emailError);
                console.error("--- END OF RESEND ERROR ---");
            }

            res.status(200).json({ message: 'Success! Thank you for joining. Check your inbox!' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`✅ Backend server is running successfully on http://localhost:${PORT}`);
});
