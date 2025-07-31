const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
// --- NEW: Import the Resend tool ---
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 4000;

// --- NEW: Initialize Resend with your secret API key ---
// We will get this from our live server's environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

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
    fs.readFile(DB_PATH, 'utf8', (err, data) => {
        if (err) return res.status(200).json({ count: 0 });
        try {
            const emails = JSON.parse(data);
            res.status(200).json({ count: emails.length });
        } catch (e) {
            res.status(200).json({ count: 0 });
        }
    });
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

            // --- NEW: Send the welcome email after saving ---
            try {
                await resend.emails.send({
                    from: 'Funndate Waitlist <onboarding@resend.dev>',
                    to: email,
                    subject: 'Welcome to the Funndate Waitlist! 🎉',
                    html: `
                        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                            <h2>Thank you for joining the Funndate waitlist!</h2>
                            <p>We're thrilled to have you on board. You're one step closer to connecting with the best founders and investors in the ecosystem.</p>
                            <p>We're working hard to launch soon. We'll keep you updated with our progress!</p>
                            <br>
                            <p>Best,</p>
                            <p>The Funndate Team</p>
                        </div>
                    `
                });
                console.log(`Welcome email sent to ${email}`);
            } catch (emailError) {
                // If the email fails, we don't want to crash the server.
                // We'll just log the error. The user is still on the waitlist.
                console.error("Error sending email:", emailError);
            }
            // --- END OF NEW FEATURE ---

            res.status(200).json({ message: 'Success! Thank you for joining. Check your inbox!' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`✅ Backend server is running successfully on http://localhost:${PORT}`);
});
