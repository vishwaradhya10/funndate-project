import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-navy text-center px-4">
      <h2 className="text-3xl font-bold mb-12 text-white">How Funndate Works</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          { step: '1', title: 'Sign Up & Verify' },
          { step: '2', title: 'Create Your Profile' },
          { step: '3', title: 'Connect & Pitch' },
          { step: '4', title: 'Build & Grow' },
        ].map((s, idx) => (
          <div key={idx} className="bg-background p-6 border border-navy/20 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-orange-accent mb-2">{s.step}</div>
            <h3 className="text-xl font-semibold text-navy mb-2">{s.title}</h3>
          </div>
        ))}
      </div>
       <p className="mt-8 text-lg text-white/70">
        No middlemen. No fake profiles. Just real founders and verified investors building the future.
       </p>
    </section>
  );
};

export default HowItWorksSection;
