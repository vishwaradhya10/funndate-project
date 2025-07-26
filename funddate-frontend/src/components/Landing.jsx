import React from 'react';

function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <header className="bg-[#0A0A23] text-white p-6">
        <h1 className="text-3xl font-bold">Funndate</h1>
        <p className="text-sm">Where Founders Meet Verified Investors</p>
      </header>

      <main className="p-6">
        <section className="my-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Build. Fund. Grow.</h2>
          <p className="text-lg max-w-xl mx-auto">
            We're building India's most trusted ecosystem for startups and investors.
            Verified profiles, direct messaging, jobs, and more.
          </p>
        </section>

        <section className="my-10">
          <h3 className="text-2xl font-semibold mb-2">🔒 Verified Investors & Founders</h3>
          <p>No more scams. Every profile is manually verified before going live.</p>
        </section>

        <section className="my-10">
          <h3 className="text-2xl font-semibold mb-2">💼 Hire Top Talent</h3>
          <p>Founders can hire pre-vetted talent from our platform without job portals.</p>
        </section>

        <section className="my-10">
          <h3 className="text-2xl font-semibold mb-2">📬 No Cold Emails</h3>
          <p>Send messages directly to investors and get replies instantly.</p>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Funndate. All rights reserved.
      </footer>
    </div>
  );
}

export default Landing;
