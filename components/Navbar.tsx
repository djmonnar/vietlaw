'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {/* Floating pill navbar */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div
          className={`w-full max-w-5xl rounded-full border transition-all duration-500 ${
            scrolled
              ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'bg-[#0a0a0a]/50 backdrop-blur-xl border-white/6'
          }`}
          style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="flex items-center justify-between px-5 sm:px-7 py-3.5">
            {/* Logo */}
            <a
              href="#"
              className="text-lg sm:text-xl font-bold tracking-[0.28em] text-gold-gradient hover:opacity-75"
              style={{ transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              VIETLAW
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              <a
                href="#vietnamese"
                className="text-[11px] text-white/50 hover:text-gold tracking-[0.18em] uppercase font-medium"
                style={{ transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                Người Việt Nam
              </a>
              <div className="w-px h-3.5 bg-white/10" />
              <a
                href="#lawyer"
                className="text-[11px] text-white/50 hover:text-gold tracking-[0.18em] uppercase font-medium"
                style={{ transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                법무법인·변호사
              </a>
              <a
                href="tel:01057888481"
                className="px-5 py-2 rounded-full bg-gold/10 border border-gold/25 text-gold text-[11px] font-bold tracking-wider hover:bg-gold/18 hover:border-gold/50 active:scale-[0.97]"
                style={{ transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                010-5788-8481
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="md:hidden flex items-center gap-2.5">
              <a
                href="tel:01057888481"
                className="text-[11px] text-gold border border-gold/25 px-3.5 py-1.5 rounded-full hover:bg-gold/10 active:scale-[0.97] font-semibold tracking-wide"
                style={{ transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                전화 상담
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-gold rounded-full"
                style={{ transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                aria-label="메뉴"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  {mobileOpen ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.293 3.293a1 1 0 011.414 0L9 7.586l4.293-4.293a1 1 0 111.414 1.414L10.414 9l4.293 4.293a1 1 0 01-1.414 1.414L9 10.414l-4.293 4.293a1 1 0 01-1.414-1.414L7.586 9 3.293 4.707a1 1 0 010-1.414z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 5a1 1 0 011-1h12a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H3a1 1 0 01-1-1z" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/97 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-white/40 hover:text-gold"
            style={{ transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z" />
            </svg>
          </button>
          <div className="text-2xl font-bold tracking-[0.28em] text-gold-gradient mb-4">VIETLAW</div>
          <a
            href="#vietnamese"
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-semibold text-white/80 hover:text-gold tracking-wide"
            style={{ transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Người Việt Nam
          </a>
          <a
            href="#lawyer"
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-semibold text-white/80 hover:text-gold tracking-wide"
            style={{ transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            법무법인·변호사
          </a>
          <a
            href="tel:01057888481"
            className="mt-4 px-8 py-4 bg-gold-gradient text-dark font-bold text-sm tracking-widest rounded-full"
          >
            010-5788-8481
          </a>
        </div>
      )}
    </>
  );
}
