import React, { useState, useEffect } from 'react';
import HeroIllustration from './common/HeroIllustration.jsx';

const HeroSection = () => {
    // This state will still fetch the real count for our new text
    const [waitlistCount, setWaitlistCount] = useState(112);

    useEffect(() => {
        const fetchWaitlistCount = async () => {
            try {
                const response = await fetch('https://funndate-backend.onrender.com/api/waitlist-count');
                if (!response.ok) return; 
                const data = await response.json();
                setWaitlistCount(112 + data.count);
            } catch (error) {
                console.error("Error fetching waitlist count:", error);
            }
        };
        fetchWaitlistCount();
    }, []);

    return (
        <section className="bg-background pt-40 pb-20 md:pt-48 md:pb-24">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight">
                        Skip the Cold Emails. Pitch Investors Who Get It.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-navy/70 max-w-3xl mx-auto">
                        Funndate is the exclusive, verified-only platform where visionary founders bypass the noise and connect directly with investors actively funding the next big thing.
                    </p>
                    
                    {/* --- NEW PERSUASIVE TEXT --- */}
                    <div className="mt-12">
                        <p className="text-xl font-bold text-orange-accent animate-pulse">
                            Your Next Investor Is Waiting.
                        </p>
                        <p className="mt-2 text-navy/60 font-medium">
                            Join <span className="font-bold text-navy">{waitlistCount}</span> others on the inside track.
                        </p>
                    </div>
                    {/* --- END OF NEW TEXT --- */}

                </div>
                <div className="mt-16 max-w-3xl mx-auto">
                    <HeroIllustration />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
