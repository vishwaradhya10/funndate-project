import React from 'react';

const HeroIllustration = () => (
    <svg viewBox="0 0 200 100" className="w-full h-auto">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#3F8CFF', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#0A0A23', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        {/* Founder side */}
        <circle cx="40" cy="50" r="15" fill="#E0E7FF" />
        <path d="M40 35 v-5 a5,5 0 0 1 5,-5 h0 a5,5 0 0 1 5,5 v5" fill="none" stroke="#0A0A23" strokeWidth="1.5" />
        <circle cx="40" cy="50" r="8" fill="#0A0A23" />
        <text x="36" y="53" fontFamily="Inter" fontSize="5" fill="white">💡</text>

        {/* Investor side */}
        <circle cx="160" cy="50" r="15" fill="#E0E7FF" />
        <path d="M160 35 v-5 a5,5 0 0 1 5,-5 h0 a5,5 0 0 1 5,5 v5" fill="none" stroke="#3F8CFF" strokeWidth="1.5" />
        <circle cx="160" cy="50" r="8" fill="#3F8CFF" />
        <text x="156" y="53" fontFamily="Inter" fontSize="5" fill="white">💰</text>

        {/* Connection lines */}
        <path d="M55 50 Q 100 30 145 50" stroke="#3F8CFF" strokeWidth="1" fill="none" strokeDasharray="3 2" />
        <path d="M55 50 Q 100 70 145 50" stroke="#0A0A23" strokeWidth="1" fill="none" strokeDasharray="3 2" />
        <circle cx="100" cy="50" r="10" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
        <path d="M97 47 L 103 50 L 97 53 Z" fill="#3F8CFF" />
    </svg>
);

export default HeroIllustration;
