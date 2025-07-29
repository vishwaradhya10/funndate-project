import React, { useState } from 'react';

const CTASection = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    // This is the full URL of your backend deployed on Render.
    // Replace 'funndate-backend.onrender.com' with your actual Render URL if it's different.
    const backendUrl = 'https://funndate-backend.onrender.com/api/join-waitlist';

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Simple email validation
        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            // Send the email to our live backend server
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle errors from the server (like "email already exists")
                throw new Error(data.message || 'An unknown error occurred.');
            }

            // Handle success
            setStatus('success');
            setMessage(data.message);
            setEmail(''); // Clear the input field after success

        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            // Display the specific error message from the server or a generic one
            setMessage(error.message);
        }
    };

    return (
        <section className="py-20 bg-background" id="join">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-navy">Ready to Build the Future?</h2>
                    <p className="mt-4 text-lg text-navy/70">
                        Join the waitlist to get early access and be the first to know when we launch.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            className="flex-grow w-full px-5 py-3 text-base text-navy bg-white border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-accent"
                            disabled={status === 'loading'}
                        />
                        <button
                            type="submit"
                            className="bg-orange-accent text-white font-bold px-8 py-3 rounded-md shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all disabled:bg-gray-400 disabled:scale-100"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                        </button>
                    </form>
                     {message && (
                        <p className={`mt-4 text-sm font-semibold ${status === 'error' ? 'text-red-500' : 'text-navy'}`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CTASection;
