import React from 'react';
// Make sure to import the new ValidateIcon
import { ValidateIcon, UsersIcon, TrendingUpIcon, DollarSignIcon, WrenchIcon } from './common/Icons.jsx';
import JourneyStep from './common/JourneyStep.jsx';

const FounderJourneySection = () => {
    const journeySteps = [
        {
            icon: <ValidateIcon />,
            title: "Validate Your Idea",
            description: "Get feedback from experienced mentors before you write a single line of code."
        },
        {
            icon: <UsersIcon />,
            title: "Find a Co-founder",
            description: "Tap into our verified talent pool to find the perfect partner for your journey."
        },
        {
            icon: <TrendingUpIcon />,
            title: "Build Traction",
            description: "Showcase your progress on your public startup profile to attract early believers."
        },
        {
            icon: <DollarSignIcon />,
            title: "Get Funded",
            description: "Pitch to verified investors who understand your vision and secure your first check."
        },
        {
            icon: <WrenchIcon />,
            title: "Grow Your Startup",
            description: "Use our network, tools, and community support to scale your company."
        }
    ];

    return (
        <section className="py-20 bg-navy px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-20">From Idea to Funding — All in One Place</h2>
                <div className="relative max-w-5xl mx-auto">
                    {/* Dashed line for desktop */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-white/20"></div>
                    
                    {/* Grid for steps */}
                    <div className="relative grid md:grid-cols-5 gap-8">
                        {journeySteps.map((step, index) => (
                            <JourneyStep key={index} icon={step.icon} title={step.title} description={step.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderJourneySection;
