import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';

const PeopleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
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

export default function LawyerTab() {
  return (
    <div className="animate-fadeIn">
      {/* Hero row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] hidden lg:block order-first">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop"
            alt="법무법인 파트너십"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
          {/* Floating stat */}
          <div className="absolute bottom-6 right-6 bg-dark/90 backdrop-blur-sm border border-gold/20 rounded-xl px-5 py-4 text-right">
            <p className="text-gold text-2xl font-bold">월 700+만</p>
            <p className="text-white/60 text-xs mt-1">예상 파트너 수익</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            법무법인 · 변호사 전용
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            외국인 고객,<br />
            <span className="text-gold">이제 놓치지 마세요</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            진주·경남 지역 베트남 거주자 커뮤니티에 직접 닿는 채널을 보유하고 있습니다. 고객 유치부터 상담 통역까지, 귀 법인의 외국인 사건 전 과정을 지원합니다.
          </p>

          {/* Key message box */}
          <div className="border-l-2 border-gold pl-6 py-3 bg-gold/5 rounded-r-xl mb-10">
            <p className="text-white/85 text-lg font-semibold leading-relaxed">
              &ldquo;한국어가 힘든 외국인 노동자의<br />
              수임과 통역을 동시에 해결합니다.&rdquo;
            </p>
          </div>

          {/* Market stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: '급증', label: '경남 베트남인', sub: '매년 증가 추세' },
              { num: '90%', label: '언어 장벽', sub: '통역 없이 상담 불가' },
              { num: '0개', label: '합법적 중개사', sub: '블루오션 시장' },
            ].map((stat) => (
              <div key={stat.label} className="bg-dark-elevated border border-dark-border rounded-xl p-4 text-center">
                <p className="text-gold text-xl font-bold">{stat.num}</p>
                <p className="text-white/70 text-xs font-medium mt-1">{stat.label}</p>
                <p className="text-white/35 text-xs mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <h3 className="text-xl font-semibold text-white mb-8">
        파트너 법인 제공 서비스
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <ServiceCard
          icon={<PeopleIcon />}
          titlePrimary="베트남인 고객 유치"
          description="진주·경남 지역 베트남 근로자·결혼이민자·유학생에게 귀 법인을 직접 소개합니다. Zalo, Facebook 등 베트남 커뮤니티 채널 활용."
        />
        <ServiceCard
          icon={<SpeechIcon />}
          titlePrimary="상담 중 통역 지원"
          description="법률 상담 시 법률 전문 용어를 정확하게 베트남어로 통역합니다. 의뢰인의 신뢰를 높이고 수임률을 향상시킵니다."
        />
        <ServiceCard
          icon={<DocumentIcon />}
          titlePrimary="법률 서류 번역"
          description="소장, 고소장, 진술서, 계약서 등 모든 법률 서류를 베트남어·한국어로 정확하게 번역합니다. 법적 용어 숙지 보장."
        />
      </div>

      {/* Pricing Callout */}
      <div className="bg-gold/5 border border-gold/25 rounded-2xl p-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-semibold mb-4">
              Pricing · 요금 안내
            </p>
            <h3 className="text-2xl font-bold text-white mb-6">마케팅 대행 서비스</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-gold">월 100</span>
              <span className="text-xl text-gold">~ 150만원</span>
            </div>
            <p className="text-white/40 text-sm mb-8">부가세 별도 · 최소 계약 기간 3개월</p>
            <ul className="space-y-3">
              {[
                '베트남 커뮤니티 채널 홍보 (Zalo / Facebook)',
                '상담 연결 및 의뢰인 사전 안내',
                '상담 시 전문 법률 통역 지원',
                '월간 성과 리포트 제공',
                '베트남어 서면 번역 (건당 별도)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                  <span className="text-gold mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-xl p-8">
            <h4 className="text-white font-semibold mb-2">합법적인 구조로 설계됩니다</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              본 서비스는 변호사법을 완전히 준수합니다. &apos;사건 소개비&apos; 명목의 불법 수수료가 아닌, 마케팅 대행 및 통번역 용역에 대한 정당한 대가를 청구합니다.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-green-400 shrink-0">✓</span>
                <span className="text-white/60">마케팅 대행비 (고정 수익)</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-green-400 shrink-0">✓</span>
                <span className="text-white/60">통번역 용역비 (변동 수익)</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-red-400 shrink-0">✗</span>
                <span className="text-white/40">불법 사건 소개비 (없음)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <h3 className="text-xl font-semibold text-white mb-8">업무 진행 프로세스</h3>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-16">
        {[
          { step: '01', title: '고객 유입', desc: 'Zalo/Facebook 채널로 의뢰인 연락' },
          { step: '02', title: '초기 정리', desc: '사건 개요 파악, 증거자료 번역·정리' },
          { step: '03', title: '로펌 연결', desc: '완성 서류 전달, 상담 예약 진행' },
          { step: '04', title: '수임 후 동행', desc: '경찰서·조사 시 통역 동행' },
          { step: '05', title: '사건 종결', desc: '결과 공유 및 후속 지원' },
        ].map((item, idx) => (
          <div key={item.step} className="flex flex-col">
            <div className="bg-dark-elevated border border-dark-border rounded-xl p-5 flex-1">
              <div className="text-gold text-xs font-bold tracking-widest mb-3">{item.step}</div>
              <div className="text-white font-semibold text-sm mb-2">{item.title}</div>
              <div className="text-white/50 text-xs leading-relaxed">{item.desc}</div>
            </div>
            {idx < 4 && (
              <div className="hidden sm:flex justify-end pr-0 mt-2 -mr-4 z-10 items-center h-0">
                <span className="text-gold/40 text-lg">›</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-dark-elevated border border-gold/20 rounded-2xl p-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">파트너십 미팅을 신청하세요</h3>
        <p className="text-white/50 text-sm mb-8">
          기획안 및 서비스 제안서를 직접 설명드립니다. 대표 김범준이 직접 응대합니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:01057888481"
            className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-dark font-bold text-sm tracking-wider rounded hover:opacity-90 transition-opacity"
          >
            전화 미팅 신청 · 010-5788-8481
          </a>
          <a
            href="mailto:vietlaw@kakao.com"
            className="w-full sm:w-auto px-8 py-4 border border-gold/40 text-gold font-semibold text-sm rounded hover:bg-gold/10 transition-colors"
          >
            이메일 문의
          </a>
        </div>
      </div>
    </div>
  );
}
