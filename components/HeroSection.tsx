import Image from 'next/image';

const services = [
  '임금 체불 · 급여 미지급',
  '비자 · 체류 문제',
  '산업재해 · 교통사고',
  '가정폭력 · 이혼',
  '부당해고 · 근로계약',
  '형사 사건 대응',
  '임금 체불 · 급여 미지급',
  '비자 · 체류 문제',
  '산업재해 · 교통사고',
  '가정폭력 · 이혼',
  '부당해고 · 근로계약',
  '형사 사건 대응',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden noise">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&fit=crop"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-[0.15]"
        sizes="100vw"
      />

      {/* Mesh gradient */}
      <div className="absolute inset-0 mesh-gold z-[1]" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/30 to-dark z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-dark/50 z-[2]" />

      {/* Ambient gold glow behind logo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/8 rounded-full blur-[100px] z-[2] animate-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-16">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 sm:w-16 bg-gold-gradient opacity-70" />
          <span className="text-gold/80 text-[10px] sm:text-xs tracking-[0.45em] uppercase font-semibold">
            Legal Concierge · 법률 컨시어지
          </span>
          <div className="h-px w-12 sm:w-16 bg-gold-gradient opacity-70" />
        </div>

        {/* Brand name */}
        <h1 className="text-[72px] sm:text-[100px] md:text-[128px] font-bold tracking-[0.25em] text-gold-gradient leading-none mb-8 select-none">
          VIETLAW
        </h1>

        {/* Korean tagline */}
        <p className="text-lg sm:text-2xl font-semibold text-white/90 mb-3 tracking-wide leading-snug">
          진주·경남 베트남인을 위한 법률 컨시어지
        </p>

        {/* Vietnamese tagline */}
        <p className="text-sm sm:text-base text-white/45 italic mb-14 leading-relaxed tracking-wide">
          Dịch vụ tư vấn pháp lý cho người Việt tại Jinju, Hàn Quốc
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-20">
          <a
            href="#vietnamese"
            className="w-full sm:w-auto px-9 py-4 bg-gold-gradient text-dark font-bold text-sm tracking-widest rounded-md hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] transition-all duration-500 ease-spring shadow-gold-md"
          >
            Tư vấn ngay · 지금 상담
          </a>
          <a
            href="#lawyer"
            className="w-full sm:w-auto px-9 py-4 border border-gold/40 text-gold font-semibold text-sm tracking-widest rounded-md hover:bg-gold/8 hover:border-gold/70 active:scale-[0.98] transition-all duration-500 ease-spring backdrop-blur-sm"
          >
            파트너십 문의 · B2B
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300">
          <div className="h-6 w-px bg-gold/80" />
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Marquee strip — service tags */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-dark-border/60 bg-dark/80 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3">
          {services.map((s, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6">
              <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
              <span className="text-xs text-white/35 tracking-[0.2em] uppercase font-medium">{s}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
