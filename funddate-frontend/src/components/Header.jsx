import React from 'react';

const Header = () => {
    return (
        // Changed to absolute positioning to sit on top of the hero section
        <header className="absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 py-6 flex justify-center md:justify-start">
                <div className="text-2xl font-bold text-navy">
                    Funndate
                </div>
            </div>
        </header>
    );
};

export default Header;
