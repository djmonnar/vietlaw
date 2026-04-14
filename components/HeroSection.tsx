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
    /*
      Fix list applied:
      1. overflow-x-hidden (not overflow-hidden) — 세로 방향 클리핑 제거
      2. flex flex-col justify-between — justify-center 제거, 세로 클리핑 원인
      3. VIETLAW 텍스트: clamp(44px, 13vw, 128px) — 모바일 가로 넘침 방지
      4. tracking: 모바일 0.12em → lg 0.25em — 좁은 화면에서 글자 폭 줄임
      5. pt-24 sm:pt-28 — 플로팅 navbar(top-4 + ~52px) 충분히 보상
      6. 마퀴 height 고정 h-10 — 하단 strip 높이 예측 가능하게
    */
    <section className="relative min-h-dvh flex flex-col overflow-x-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&fit=crop"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-[0.14]"
        sizes="100vw"
      />

      {/* Mesh gradient */}
      <div className="absolute inset-0 mesh-gold z-[1]" />

      {/* Directional gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/65 via-dark/25 to-dark z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/45 via-transparent to-dark/45 z-[2]" />

      {/* Ambient glow */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[240px] rounded-full blur-[90px] z-[2] animate-glow"
        style={{ background: 'rgba(201,168,76,0.07)' }}
      />

      {/* ─── Main content — flex-1 so it fills the space above the marquee ─── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 max-w-4xl mx-auto w-full pt-24 sm:pt-28 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="h-px w-10 sm:w-14 bg-gold-gradient opacity-60" />
          <span className="text-gold/75 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-semibold">
            Legal Concierge
          </span>
          <div className="h-px w-10 sm:w-14 bg-gold-gradient opacity-60" />
        </div>

        {/*
          VIETLAW — 핵심 수정:
          · font-size: clamp(44px, 13vw, 128px) — 뷰포트 너비에 비례해 자동 조절
          · tracking: 모바일에서 0.12em, sm부터 0.2em, lg부터 0.25em
          · 이 두 조합으로 375px 화면에서도 가로 넘침 없음
        */}
        <h1
          className="font-bold text-gold-gradient leading-none mb-6 sm:mb-8 select-none tracking-[0.12em] sm:tracking-[0.2em] lg:tracking-[0.25em]"
          style={{ fontSize: 'clamp(44px, 13vw, 128px)' }}
        >
          VIETLAW
        </h1>

        {/* Korean tagline */}
        <p className="text-base sm:text-xl lg:text-2xl font-semibold text-white/90 mb-2 sm:mb-3 tracking-wide leading-snug">
          진주·경남 베트남인을 위한 법률 컨시어지
        </p>

        {/* Vietnamese tagline */}
        <p className="text-xs sm:text-sm lg:text-base text-white/40 italic mb-10 sm:mb-14 leading-relaxed tracking-wide">
          Dịch vụ tư vấn pháp lý cho người Việt tại Jinju, Hàn Quốc
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto mb-10 sm:mb-16">
          <a
            href="#vietnamese"
            className="px-7 sm:px-9 py-4 bg-gold-gradient text-dark font-bold text-sm tracking-widest rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-center shadow-gold-md"
            style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Tư vấn ngay · 지금 상담
          </a>
          <a
            href="#lawyer"
            className="px-7 sm:px-9 py-4 border border-gold/35 text-gold font-semibold text-sm tracking-widest rounded-full hover:bg-gold/8 hover:border-gold/60 active:scale-[0.98] text-center"
            style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            파트너십 문의 · B2B
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex flex-col items-center gap-1.5 opacity-25 hover:opacity-50"
          style={{ transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="h-5 w-px bg-gold/70" />
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* ─── Marquee strip — fixed height, sits at bottom naturally ─── */}
      <div className="relative z-10 border-t border-white/5 bg-dark/75 backdrop-blur-sm overflow-hidden h-10 flex items-center shrink-0">
        <div className="flex animate-marquee whitespace-nowrap">
          {services.map((s, i) => (
            <span key={i} className="inline-flex items-center gap-3.5 mx-5">
              <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
              <span className="text-[10px] sm:text-[11px] text-white/30 tracking-[0.2em] uppercase font-medium">{s}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
