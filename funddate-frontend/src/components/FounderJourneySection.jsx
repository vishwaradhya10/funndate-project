import React from 'react';
import { LightbulbIcon, UsersIcon, TrendingUpIcon, DollarSignIcon, WrenchIcon } from './common/Icons.jsx';
import JourneyStep from './common/JourneyStep.jsx';

const FounderJourneySection = () => {
    const journeySteps = [
        {
            icon: <LightbulbIcon />,
            title: "Got an idea?",
            description: "Use our templates & tools to refine your vision."
        },
        {
            icon: <UsersIcon />,
            title: "Need a team?",
            description: "Tap into our verified talent pool to find co-founders."
        },
        {
            icon: <TrendingUpIcon />,
            title: "Build traction",
            description: "Showcase your progress on your public startup profile."
        },
        {
            icon: <DollarSignIcon />,
            title: "Get funded",
            description: "Pitch to verified investors and secure your first check."
        },
        {
            icon: <WrenchIcon />,
            title: "Grow your startup",
            description: "Use our network and tools to support your growth."
        }
    ];

    return (
        <section className="py-20 bg-navy px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-20">From Idea to Funding — All in One Place</h2>
                <div className="relative max-w-5xl mx-auto">
                    {/* Dashed line for desktop - positioned behind the content */}
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
