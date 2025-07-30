import React, { useState, useEffect } from 'react';
// We no longer need the illustration, so the import can be removed.

const HeroSection = () => {
    // The state for the count is no longer needed in this component.

    return (
        // Adjusted padding for a tighter, more focused look
        <section className="bg-background py-32 md:py-40">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight">
                        Skip the Cold Emails. Pitch Investors Who Get It.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-navy/70 max-w-3xl mx-auto">
                        Funndate is the exclusive, verified-only platform where visionary founders bypass the noise and connect directly with investors actively funding the next big thing.
                    </p>
                    
                    {/* --- NEW BOLD & PERSUASIVE TAGLINE --- */}
                    <div className="mt-12 py-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
                           Where Great Founders Meet Smart Capital.
                        </h2>
                    </div>
                    {/* --- END OF NEW TAGLINE --- */}

                </div>
                {/* The HeroIllustration component has been removed */}
            </div>
        </section>
    );
};

export default HeroSection;
