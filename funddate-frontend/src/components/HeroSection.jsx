import React from 'react';
import HeroIllustration from './common/HeroIllustration.jsx';

const HeroSection = () => (
    // Use the new 'background' color for the section
    <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
                {/* Use the new 'navy' color for the headline text */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight">
                    Skip the Cold Emails. Pitch Investors Who Get It.
                </h1>
                {/* Use a lighter shade of 'navy' for the paragraph */}
                <p className="mt-6 text-lg md:text-xl text-navy/70 max-w-3xl mx-auto">
                    Funndate is the exclusive, verified-only platform where visionary founders bypass the noise and connect directly with investors actively funding the next big thing. Your pitch deck deserves to be seen. We make it happen.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    {/* Use the new 'orange-accent' for the main button */}
                    <button className="w-full sm:w-auto bg-orange-accent text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all">
                        Join as a Founder
                    </button>
                    {/* Use the new 'navy' color for the secondary button */}
                    <button className="w-full sm:w-auto bg-navy text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transform hover:scale-105 transition-all">
                        I'm an Investor
                    </button>
                </div>
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
                <HeroIllustration />
            </div>
        </div>
    </section>
);

export default HeroSection;
