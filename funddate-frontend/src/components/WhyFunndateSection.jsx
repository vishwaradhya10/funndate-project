import React from 'react';
import { CheckCircleIcon } from './common/Icons.jsx';
import FeatureCard from './common/FeatureCard.jsx';

const WhyFunndateSection = () => {
    const features = [
        {
            icon: <CheckCircleIcon />,
            title: "Verified Founders & Investors",
            description: "Everyone goes through a strict but fast KYC and business background check."
        },
        {
            icon: <CheckCircleIcon />,
            title: "Talent Pool Access",
            description: "Get matched with top talent (designers, developers, marketers) to build your MVP."
        },
        {
            icon: <CheckCircleIcon />,
            title: "Real Connections",
            description: "Direct chat, pitch decks, and calendars — no ghosting, no spam."
        },
        {
            icon: <CheckCircleIcon />,
            title: "Founder Tools",
            description: "Access pitch deck templates, valuation calculators, and a pitch feedback system."
        }
    ];

    return (
        <section className="py-20 bg-background px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-navy mb-4">Why Funndate is Different</h2>
                <p className="text-lg text-navy/70 mb-12 max-w-2xl mx-auto">No fake testimonials. Just real people building real companies.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyFunndateSection;
