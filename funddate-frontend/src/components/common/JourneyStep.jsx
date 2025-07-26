import React from 'react';

const JourneyStep = ({ icon, title, description }) => {
    return (
        <div className="relative flex flex-col items-center text-center z-10">
            {/* Circle for Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-background rounded-full border-4 border-navy mb-4">
                {/* The icon itself is passed in and rendered here */}
                {icon}
            </div>
            
            {/* Text Content */}
            <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
            <p className="text-white/60 text-sm max-w-[200px]">{description}</p>
        </div>
    );
};

export default JourneyStep;
