    const express = require('express');
    const cors = require('cors');
    const fs = require('fs');
    const path = require('path');

    const app = express();
    const PORT = 4000;

    // Middleware
    app.use(cors()); // Allows your React app to talk to this server
    app.use(express.json()); // Allows the server to understand JSON data

    // Path to our simple database file
    const DB_PATH = path.join(__dirname, 'emails.json');

    // This is the API route your frontend will call
    app.post('/api/join-waitlist', (req, res) => {
        const { email } = req.body;

        if (!email || !email.includes('@')) {
            // Send an error response if the email is invalid
            return res.status(400).json({ message: 'Please provide a valid email.' });
        }

        // Read the existing emails from the file
        fs.readFile(DB_PATH, 'utf8', (err, data) => {
            let emails = [];
            if (!err && data) {
                try {
                    emails = JSON.parse(data);
                } catch (parseErr) {
                    // Ignore parsing errors, we'll just overwrite with a new array
                }
            }

            // Check if the email already exists
            if (emails.includes(email)) {
                return res.status(409).json({ message: 'This email is already on the waitlist.' });
            }

            // Add the new email
            emails.push(email);

            // Write the updated list back to the file
            fs.writeFile(DB_PATH, JSON.stringify(emails, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error('Error writing to file:', writeErr);
                    return res.status(500).json({ message: 'Could not save email.' });
                }
                // Send a success response
                console.log(`Email saved: ${email}`);
                res.status(200).json({ message: 'Success! Thank you for joining.' });
            });
        });
    });

    app.listen(PORT, () => {
        console.log(`✅ Backend server is running successfully on http://localhost:${PORT}`);
    });
    