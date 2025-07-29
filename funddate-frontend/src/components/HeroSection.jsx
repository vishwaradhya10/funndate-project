import React, { useState, useEffect } from 'react';
import HeroIllustration from './common/HeroIllustration.jsx';

const HeroSection = () => {
    // A "memory box" to hold the number of signups.
    // We'll start it at a base number for marketing purposes.
    const [waitlistCount, setWaitlistCount] = useState(112);

    // This code runs automatically, one time, when the page first loads.
    useEffect(() => {
        const fetchWaitlistCount = async () => {
            try {
                // Call the new "phone number" on our live backend
                const response = await fetch('https://funndate-backend.onrender.com/api/waitlist-count');
                if (!response.ok) {
                    // If the call fails, we'll just keep the base number.
                    console.error('Could not fetch waitlist count.');
                    return; 
                }
                const data = await response.json();

                // Add the real count to our base number for a more impressive total.
                setWaitlistCount(112 + data.count);
            } catch (error) {
                console.error("Error fetching waitlist count:", error);
            }
        };

        fetchWaitlistCount();
    }, []); // The empty array [] means this runs only once.

    return (
        <section className="bg-background pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight">
                        Skip the Cold Emails. Pitch Investors Who Get It.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-navy/70 max-w-3xl mx-auto">
                        Funndate is the exclusive, verified-only platform where visionary founders bypass the noise and connect directly with investors actively funding the next big thing.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button className="w-full sm:w-auto bg-orange-accent text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all">
                            Join as a Founder
                        </button>
                        <button className="w-full sm:w-auto bg-navy text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transform hover:scale-105 transition-all">
                            I'm an Investor
                        </button>
                    </div>

                    {/* --- NEW FEATURE: Display the count --- */}
                    <div className="mt-8">
                        <p className="text-navy/60 font-medium">
                            Join <span className="font-bold text-orange-accent">{waitlistCount}</span> other founders and investors on the waitlist!
                        </p>
                    </div>
                    {/* --- END OF NEW FEATURE --- */}

                </div>
                <div className="mt-16 max-w-3xl mx-auto">
                    <HeroIllustration />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
