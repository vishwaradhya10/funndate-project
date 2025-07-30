import React, { useState } from 'react';

const PricingSection = () => {
    // A state to manage the toggle. We'll set 'free' as the default.
    const [plan, setPlan] = useState('free');

    return (
        <section className="py-20 bg-background" id="pricing">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-navy">
                        Transparent, founder-friendly pricing.
                    </h2>
                    <p className="mt-4 text-lg text-navy/70">
                        Funddate is free to join for both founders and investors. Upgrade only if you want access to advanced tools, pitch analytics, and priority placements.
                    </p>
                    <p className="mt-2 text-navy/70 font-semibold">
                        No hidden fees. No forced subscriptions.
                    </p>

                    {/* Toggle Switch */}
                    <div className="mt-8 flex justify-center items-center space-x-4">
                        <span className={`font-medium ${plan === 'free' ? 'text-orange-accent' : 'text-navy/60'}`}>
                            Free Forever
                        </span>
                        <label htmlFor="plan-toggle" className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                id="plan-toggle" 
                                className="sr-only peer" 
                                checked={plan === 'pro'}
                                onChange={() => setPlan(plan === 'free' ? 'pro' : 'free')}
                            />
                            <div className="w-14 h-8 bg-navy/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-orange-accent"></div>
                        </label>
                        <span className={`font-medium ${plan === 'pro' ? 'text-orange-accent' : 'text-navy/60'}`}>
                            Pro Tools <span className="text-xs">(Coming Soon)</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
