import React from 'react';

// This component receives the 'icon' as a prop (a complete JSX element)
// and just renders it.
const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-navy p-6 rounded-lg border border-white/10 text-left shadow-lg">
            <div className="mb-4">
                {/* Render the icon that was passed in */}
                {icon}
            </div>
            <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
            <p className="text-white/60 text-sm">{description}</p>
        </div>
    );
};

export default FeatureCard;
