'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-spring ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-xl border-b border-dark-border shadow-[0_1px_0_rgba(201,168,76,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl sm:text-2xl font-bold tracking-[0.28em] text-gold-gradient hover:opacity-80 transition-opacity duration-300">
          VIETLAW
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#vietnamese"
            className="text-xs text-white/50 hover:text-gold transition-colors duration-300 tracking-[0.2em] uppercase font-medium"
          >
            Người Việt Nam
          </a>
          <div className="w-px h-4 bg-dark-border" />
          <a
            href="#lawyer"
            className="text-xs text-white/50 hover:text-gold transition-colors duration-300 tracking-[0.2em] uppercase font-medium"
          >
            법무법인·변호사
          </a>
          <a
            href="tel:01057888481"
            className="ml-2 px-5 py-2.5 border border-gold/35 text-gold text-xs rounded-md hover:bg-gold/10 hover:border-gold/70 active:scale-[0.97] transition-all duration-300 ease-spring tracking-wider font-semibold"
          >
            010-5788-8481
          </a>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:01057888481"
            className="text-gold text-xs border border-gold/35 px-3.5 py-2 rounded-md hover:bg-gold/10 active:scale-[0.97] transition-all duration-300 font-semibold tracking-wide"
          >
            전화 상담
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/60 hover:text-gold transition-colors p-1"
            aria-label="메뉴"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-card/98 backdrop-blur-xl border-b border-dark-border px-5 pb-5 pt-2">
          <div className="flex flex-col gap-1">
            <a
              href="#vietnamese"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60 hover:text-gold py-3 border-b border-dark-border tracking-wide transition-colors"
            >
              🇻🇳 Người Việt Nam
            </a>
            <a
              href="#lawyer"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60 hover:text-gold py-3 tracking-wide transition-colors"
            >
              ⚖️ 법무법인·변호사
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
