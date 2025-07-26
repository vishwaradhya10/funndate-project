import React from 'react';

const Header = () => {
    return (
        <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-navy/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-navy">
                    Funndate
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-navy/80 hover:text-orange-accent transition-colors">How It Works</a>
                    <a href="#" className="text-navy/80 hover:text-orange-accent transition-colors">FAQs</a>
                    <a href="#" className="text-navy/80 hover:text-orange-accent transition-colors">Contact</a>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <button className="text-navy font-medium">Log In</button>
                    <button className="bg-navy text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                        Sign Up
                    </button>
                </div>
                <div className="md:hidden">
                    <button className="text-navy">
                        {/* Hamburger Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
