import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&fit=crop"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-20"
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Gold accent line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gold-gradient" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
            Legal Concierge
          </span>
          <div className="h-px w-16 bg-gold-gradient" />
        </div>

        {/* Brand name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-[0.3em] text-gold-gradient mb-6">
          VIETLAW
        </h1>

        {/* Korean tagline */}
        <p className="text-xl sm:text-2xl font-medium text-white mb-3 tracking-wide">
          진주·경남 베트남인을 위한 법률 컨시어지
        </p>

        {/* Vietnamese tagline */}
        <p className="text-base sm:text-lg text-white/55 italic mb-12 leading-relaxed">
          Dịch vụ tư vấn pháp lý cho người Việt tại Jinju, Hàn Quốc
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#vietnamese"
            className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-dark font-bold text-sm tracking-widest rounded hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-gold/20"
          >
            Tư vấn ngay · 지금 상담
          </a>
          <a
            href="#lawyer"
            className="w-full sm:w-auto px-8 py-4 border border-gold/50 text-gold font-semibold text-sm tracking-widest rounded hover:bg-gold/10 hover:border-gold transition-all duration-200"
          >
            파트너십 문의 · B2B
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-bounce opacity-40">
          <div className="h-8 w-px bg-gold/60" />
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
