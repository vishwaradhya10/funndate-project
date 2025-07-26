import React from 'react';
import { LinkedinIcon, TwitterIcon, MailIcon } from './common/Icons.jsx';

const Footer = () => (
    <footer className="bg-background border-t border-navy/10 text-navy py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
                <h4 className="font-bold text-lg mb-4">Funndate</h4>
                <p className="text-sm text-navy/70">&copy; 2025 Funndate. All rights reserved.</p>
            </div>
            <div>
                <h5 className="font-semibold mb-4">Platform</h5>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-navy/70 hover:text-orange-accent">About Us</a></li>
                    <li><a href="#" className="text-navy/70 hover:text-orange-accent">How It Works</a></li>
                    <li><a href="#" className="text-navy/70 hover:text-orange-accent">FAQs</a></li>
                    <li><a href="#" className="text-navy/70 hover:text-orange-accent">Contact</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-semibold mb-4">Legal</h5>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-navy/70 hover:text-orange-accent">Privacy Policy</a></li>
                    <li><a href="#" className="text-navy/70 hover:text-orange-accent">Terms of Use</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-semibold mb-4">Connect</h5>
                <div className="flex justify-center md:justify-start space-x-4">
                    <a href="#" className="text-navy/70 hover:text-orange-accent"><LinkedinIcon /></a>
                    <a href="#" className="text-navy/70 hover:text-orange-accent"><TwitterIcon /></a>
                    <a href="#" className="text-navy/70 hover:text-orange-accent"><MailIcon /></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
