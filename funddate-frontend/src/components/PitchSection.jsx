import React from 'react';

const PitchSection = () => {
    // We've removed the form state since it's no longer needed

    return (
        <section className="py-20 bg-navy" id="pitch">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-white">Ready to Pitch?</h2>
                    <p className="mt-4 text-lg text-white/70">
                        Soon, you'll be able to explain your pitch in a 2-minute Loom video directly to investors. The best pitches will be featured to our network.
                    </p>
                    
                    {/* "Coming Soon" Placeholder */}
                    <div className="mt-12">
                        <button
                            disabled // This makes the button unclickable
                            className="bg-orange-accent/50 text-white/70 font-bold px-10 py-4 rounded-lg shadow-lg text-lg cursor-not-allowed"
                        >
                            Pitch Submission Coming Soon
                        </button>
                        <p className="mt-4 text-sm text-white/50">
                            We're putting the final touches on our pitch submission system. Join the waitlist to be notified!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PitchSection;
