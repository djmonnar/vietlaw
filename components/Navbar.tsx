export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-bold tracking-[0.25em] text-gold-gradient">
          VIETLAW
        </span>
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="#vietnamese"
            className="text-sm text-white/60 hover:text-gold transition-colors duration-200 tracking-wide"
          >
            Người Việt Nam
          </a>
          <span className="text-dark-border">|</span>
          <a
            href="#lawyer"
            className="text-sm text-white/60 hover:text-gold transition-colors duration-200 tracking-wide"
          >
            법무법인·변호사
          </a>
          <a
            href="tel:01057888481"
            className="ml-2 px-4 py-2 border border-gold/40 text-gold text-sm rounded hover:bg-gold/10 transition-colors duration-200 tracking-wide"
          >
            010-5788-8481
          </a>
        </div>
        {/* Mobile: phone only */}
        <a
          href="tel:01057888481"
          className="sm:hidden text-gold text-sm border border-gold/40 px-3 py-1.5 rounded hover:bg-gold/10 transition-colors"
        >
          전화 상담
        </a>
      </div>
    </nav>
  );
}
