import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';

const PeopleIcon = ({ large }: { large?: boolean }) => (
  <svg className={large ? 'w-7 h-7' : 'w-6 h-6'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const SpeechIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const steps = [
  { n: '01', title: '고객 유입', desc: 'Zalo·Facebook 채널로 베트남 의뢰인 연락', icon: '📲' },
  { n: '02', title: '초기 정리', desc: '사건 개요 파악 및 증거자료 번역·정리', icon: '📋' },
  { n: '03', title: '로펌 연결', desc: '완성된 서류 전달 및 상담 예약 진행', icon: '🤝' },
  { n: '04', title: '수임 후 동행', desc: '경찰서·조사 시 전문 통역 동행', icon: '⚖️' },
  { n: '05', title: '사건 종결', desc: '결과 공유 및 후속 지원 완료', icon: '✅' },
];

export default function LawyerTab() {
  return (
    <div>
      {/* — Hero split row — */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
        {/* Image — shown on all sizes */}
        <div className="reveal relative rounded-2xl overflow-hidden aspect-[4/3] order-last lg:order-first">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop"
            alt="법무법인 파트너십 미팅"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
          <div className="absolute bottom-5 right-5 glass rounded-xl px-5 py-3.5 text-right">
            <p className="text-gold text-2xl font-bold tabular">월 700만+</p>
            <p className="text-white/50 text-xs mt-0.5">예상 파트너 매출</p>
          </div>
        </div>

        {/* Text */}
        <div className="reveal reveal-d1">
          <p className="text-gold text-[11px] tracking-[0.45em] uppercase font-semibold mb-5">
            법무법인 · 변호사 전용
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
            외국인 고객,<br />
            <span className="text-gold">이제 놓치지 마세요</span>
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-10 max-w-md">
            진주·경남 베트남 거주자 커뮤니티에 직접 닿는 채널을 보유하고 있습니다. 고객 유치부터 상담 통역까지 전 과정을 지원합니다.
          </p>

          {/* Key message */}
          <div className="relative border-l-2 border-gold pl-6 py-1 mb-10">
            <div className="absolute -left-px top-0 bottom-0 w-0.5 bg-gold-gradient" />
            <p className="text-white/85 text-lg sm:text-xl font-semibold leading-relaxed">
              &ldquo;한국어가 힘든 외국인 노동자의<br className="hidden sm:block" />
              수임과 통역을 동시에 해결합니다.&rdquo;
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { num: '급증', label: '경남 베트남인', sub: '매년 증가' },
              { num: '90%', label: '언어 장벽', sub: '통역 필수' },
              { num: '0개', label: '합법 중개사', sub: '블루오션' },
            ].map((s) => (
              <div key={s.label} className="bg-dark-elevated border border-dark-border rounded-xl p-3.5 sm:p-4 text-center hover:border-gold/25 transition-colors duration-300">
                <p className="text-gold text-lg sm:text-xl font-bold tabular">{s.num}</p>
                <p className="text-white/65 text-[11px] font-medium mt-1">{s.label}</p>
                <p className="text-white/30 text-[10px] mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* — Services Bento Grid — */}
      <div className="mb-8 reveal">
        <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-2">Services</p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">파트너 법인 제공 서비스</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 mb-20 sm:mb-28">
        <div className="md:col-span-2 md:row-span-2 reveal reveal-d1">
          <ServiceCard
            icon={<PeopleIcon large />}
            titlePrimary="베트남인 고객 유치"
            description="진주·경남 지역 베트남 근로자·결혼이민자·유학생에게 귀 법인을 직접 소개합니다. Zalo, Facebook 등 베트남 커뮤니티 채널 풀 활용 — 기존에 닿지 못했던 고객층을 확보하세요."
            size="large"
          />
        </div>
        <div className="reveal reveal-d2">
          <ServiceCard
            icon={<SpeechIcon />}
            titlePrimary="상담 중 통역 지원"
            description="법률 전문 용어를 정확하게 베트남어로 통역합니다. 의뢰인 신뢰 향상 및 수임률 개선."
          />
        </div>
        <div className="reveal reveal-d3">
          <ServiceCard
            icon={<DocumentIcon />}
            titlePrimary="법률 서류 번역"
            description="소장, 고소장, 진술서, 계약서 등 모든 법률 서류를 한·베 양방향으로 정확히 번역합니다."
          />
        </div>
      </div>

      {/* — Pricing — */}
      <div className="reveal relative rounded-3xl overflow-hidden border border-gold/20 mb-20 sm:mb-28">
        <div className="absolute inset-0 mesh-gold" />
        <div className="absolute inset-0 bg-dark-elevated/85" />
        <div className="relative z-10 p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-4">Pricing · 요금 안내</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">마케팅 대행 서비스</h3>
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="text-5xl font-bold text-gold tabular">100</span>
                <span className="text-2xl text-gold">~ 150만원</span>
                <span className="text-white/40 text-sm ml-1">/ 월</span>
              </div>
              <p className="text-white/35 text-sm mb-8">부가세 별도 · 최소 계약 기간 3개월</p>
              <ul className="space-y-3.5">
                {[
                  '베트남 커뮤니티 채널 홍보 (Zalo / Facebook)',
                  '상담 연결 및 의뢰인 사전 안내',
                  '상담 시 전문 법률 통역 지원',
                  '월간 성과 리포트 제공',
                  '베트남어 서면 번역 (건당 별도)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="text-gold mt-0.5 shrink-0 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-400 text-xs">●</span>
                <h4 className="text-white font-semibold text-sm">합법적인 구조로 설계됩니다</h4>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-7">
                변호사법을 완전히 준수합니다. &apos;사건 소개비&apos; 명목의 불법 수수료가 아닌, 마케팅 대행 및 통번역 용역에 대한 정당한 대가를 청구합니다.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-3 bg-green-400/5 border border-green-400/15 rounded-lg px-4 py-2.5">
                  <span className="text-green-400">✓</span>
                  <span className="text-white/65">마케팅 대행비 (고정 수익)</span>
                </div>
                <div className="flex items-center gap-3 bg-green-400/5 border border-green-400/15 rounded-lg px-4 py-2.5">
                  <span className="text-green-400">✓</span>
                  <span className="text-white/65">통번역 용역비 (변동 수익)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/3 border border-dark-border rounded-lg px-4 py-2.5">
                  <span className="text-white/25">✗</span>
                  <span className="text-white/30">불법 사건 소개비 (해당 없음)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* — Process Timeline — */}
      <div className="reveal mb-8">
        <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-2">Process</p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">업무 진행 프로세스</h3>
      </div>

      <div className="relative mb-20 sm:mb-28">
        {/* Connecting line (desktop) */}
        <div className="hidden sm:block absolute top-8 left-0 right-0 h-px bg-dark-border z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 relative z-10">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`reveal reveal-d${Math.min(i + 1, 5)} bg-dark-card border border-dark-border rounded-2xl p-5 hover:border-gold/30 transition-all duration-500 ease-spring hover:-translate-y-1`}
            >
              <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                <div className="flex items-center justify-center w-14 h-14 sm:w-10 sm:h-10 rounded-full bg-dark-elevated border border-dark-border text-xl shrink-0 sm:mb-4">
                  {s.icon}
                </div>
                <div>
                  <div className="text-gold text-[10px] font-bold tracking-widest mb-1">{s.n}</div>
                  <div className="text-white font-semibold text-sm mb-1.5">{s.title}</div>
                  <div className="text-white/45 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* — CTA — */}
      <div className="reveal bg-dark-elevated border border-gold/20 rounded-3xl p-8 sm:p-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">파트너십 미팅을 신청하세요</h3>
        <p className="text-white/45 text-sm mb-10">
          기획안 및 서비스 제안서를 직접 설명드립니다. 대표 김범준이 직접 응대합니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:01057888481"
            className="w-full sm:w-auto px-9 py-4 bg-gold-gradient text-dark font-bold text-sm tracking-wider rounded-xl hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-spring shadow-gold-md"
          >
            전화 미팅 신청 · 010-5788-8481
          </a>
          <a
            href="mailto:contact@vietlaw.kr"
            className="w-full sm:w-auto px-9 py-4 border border-gold/35 text-gold font-semibold text-sm rounded-xl hover:bg-gold/8 hover:border-gold/60 active:scale-[0.98] transition-all duration-500 ease-spring"
          >
            이메일 문의
          </a>
        </div>
      </div>
    </div>
  );
}
