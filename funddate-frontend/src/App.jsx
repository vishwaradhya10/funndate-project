import React from 'react';

// Import all the section components
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import HowItWorksSection from './components/HowItWorksSection.jsx';
import WhyFunndateSection from './components/WhyFunddateSection.jsx';
import FounderJourneySection from './components/FounderJourneySection.jsx';
import TransparencySection from './components/TransparencySection.jsx';
import PitchSection from './components/PitchSection.jsx';
import PricingSection from './components/PricingSection.jsx'; // <-- IMPORT THE NEW SECTION
import CTASection from './components/CTASection.jsx';
import Footer from './components/Footer.jsx';
import ChatButton from './components/ChatButton.jsx';


function App() {
  return (
    <div className="bg-background font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyFunndateSection />
        <FounderJourneySection />
        <TransparencySection />
        <PitchSection />
        <PricingSection /> {/* <-- ADD THE NEW SECTION HERE */}
        <CTASection />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}

export default App;
