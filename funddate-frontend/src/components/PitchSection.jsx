import React, { useState } from 'react';

const PitchSection = () => {
    // We will add the logic to connect this to the backend later
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loomUrl, setLoomUrl] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, we'll just show a placeholder message
        setMessage('This form is not connected yet. Coming soon!');
    };

    return (
        <section className="py-20 bg-navy" id="pitch">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-white">Ready to Pitch?</h2>
                    <p className="mt-4 text-lg text-white/70">
                        Record a 2-minute Loom video explaining your vision. The best pitches will be featured to our network of verified investors.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g., Ada Lovelace"
                                className="mt-1 w-full px-4 py-3 text-base text-navy bg-background border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-accent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-white/80">Your Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                className="mt-1 w-full px-4 py-3 text-base text-navy bg-background border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-accent"
                            />
                        </div>
                        <div>
                            <label htmlFor="loomUrl" className="text-sm font-medium text-white/80">Loom Video URL</label>
                            <input
                                id="loomUrl"
                                type="url"
                                value={loomUrl}
                                onChange={(e) => setLoomUrl(e.target.value)}
                                placeholder="https://www.loom.com/share/..."
                                className="mt-1 w-full px-4 py-3 text-base text-navy bg-background border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-accent"
                            />
                        </div>
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="bg-orange-accent text-white font-bold px-10 py-4 rounded-lg shadow-lg text-lg hover:bg-orange-600 transform hover:scale-105 transition-all disabled:bg-gray-400"
                            >
                                Submit Your Pitch
                            </button>
                        </div>
                    </form>
                     {message && (
                        <p className="mt-4 text-sm font-semibold text-white">
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PitchSection;
