'use client';

import { useState, useEffect } from 'react';
import VietnameseTab from '@/components/VietnameseTab';
import LawyerTab from '@/components/LawyerTab';

type Tab = 'vietnamese' | 'lawyer';

export default function AudienceSection() {
  const [activeTab, setActiveTab] = useState<Tab>('vietnamese');

  // Handle anchor hash navigation from Navbar
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#lawyer') {
        setActiveTab('lawyer');
        document.getElementById('audience')?.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#vietnamese') {
        setActiveTab('vietnamese');
        document.getElementById('audience')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHash(); // on mount
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="audience" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tab Bar */}
        <div className="flex border-b border-dark-border mb-16">
          <button
            onClick={() => {
              setActiveTab('vietnamese');
              window.history.replaceState(null, '', '#vietnamese');
            }}
            className={`px-6 sm:px-10 py-5 text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 -mb-px ${
              activeTab === 'vietnamese'
                ? 'text-gold border-gold'
                : 'text-white/40 border-transparent hover:text-white/70'
            }`}
          >
            <span className="mr-2">🇻🇳</span>
            Người Việt Nam
          </button>
          <button
            onClick={() => {
              setActiveTab('lawyer');
              window.history.replaceState(null, '', '#lawyer');
            }}
            className={`px-6 sm:px-10 py-5 text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 -mb-px ${
              activeTab === 'lawyer'
                ? 'text-gold border-gold'
                : 'text-white/40 border-transparent hover:text-white/70'
            }`}
          >
            <span className="mr-2">⚖️</span>
            법무법인·변호사
          </button>
        </div>

        {/* Tab Content — key forces remount so reveal animations replay */}
        <div key={activeTab} className="animate-fadeIn">
          {activeTab === 'vietnamese' ? <VietnameseTab /> : <LawyerTab />}
        </div>
      </div>
    </section>
  );
}
