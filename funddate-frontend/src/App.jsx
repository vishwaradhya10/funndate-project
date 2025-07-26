import React from 'react';

// Import all the section components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyFunndateSection from './components/WhyFunndateSection';
import FounderJourneySection from './components/FounderJourneySection';
import TransparencySection from './components/TransparencySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

/**
 * The main App component that assembles the entire landing page.
 * It imports and renders each section in the correct order.
 */
function App() {
  return (
    <div className="bg-background font-sans text-gray-800">
      {/* The main header/navigation bar */}
      <Header />
      
      {/* The main content of the page, organized by sections */}
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyFunndateSection />
        <FounderJourneySection />
        <TransparencySection />
        <CTASection />
      </main>

      {/* The footer section */}
      <Footer />

      {/* A floating chat button for user support */}
      <ChatButton />
    </div>
  );
}

export default App;
