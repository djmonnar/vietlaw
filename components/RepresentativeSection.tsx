import Image from 'next/image';

const tags = ['베트남어 원어민 수준', '10년+ 현지 거주', '한·베 비즈니스 전문', '법률 통번역'];

export default function RepresentativeSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-dark-card border-y border-dark-border" />
      <div className="absolute inset-0 mesh-gold opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 sm:mb-20 reveal">
          <div className="h-px flex-1 bg-dark-border" />
          <span className="text-gold text-[11px] tracking-[0.45em] uppercase font-semibold">Representative</span>
          <div className="h-px flex-1 bg-dark-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&fit=crop"
                alt="대표 김범준"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
            </div>
            {/* Offset border accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-gold/15 -z-10 pointer-events-none" />
            {/* Experience badge */}
            <div className="absolute top-5 right-5 glass border border-gold/20 rounded-xl px-4 py-3 text-center">
              <p className="text-gold text-2xl font-bold tabular">10+</p>
              <p className="text-white/50 text-[11px] mt-0.5">베트남 거주</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-d1">
            <span className="text-gold text-[11px] tracking-[0.45em] uppercase font-semibold">대표 · Giám đốc</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-1">김범준</h2>
            <p className="text-white/40 text-lg italic mb-8">Kim Beom-jun</p>

            <div className="w-10 h-0.5 bg-gold-gradient mb-8" />

            {/* Korean intro */}
            <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-6">
              베트남에서 <span className="text-gold font-semibold">10년 이상</span> 거주하며 병원 마케팅, 한국·베트남 무역 등 다양한 사업을 직접 운영했습니다. 진주·경남 지역 베트남 커뮤니티에 깊은 신뢰와 넓은 네트워크를 보유하고 있습니다.
            </p>
            <p className="text-white/45 text-sm leading-relaxed mb-10">
              베트남어·한국어·영어를 완벽하게 구사하며, 법률 용어의 미묘한 뉘앙스까지 정확하게 전달합니다.
            </p>

            {/* Vietnamese quote */}
            <div className="bg-dark-elevated/60 border border-dark-border rounded-2xl p-6 mb-8">
              <p className="text-white/35 text-[10px] tracking-[0.35em] uppercase mb-3">Tiếng Việt</p>
              <p className="text-white/55 text-sm leading-relaxed italic">
                &ldquo;Tôi đã sống và làm việc tại Việt Nam hơn 10 năm. Tôi hiểu những khó khăn mà người Việt gặp phải tại Hàn Quốc. Hãy để tôi đồng hành cùng bạn.&rdquo;
              </p>
              <p className="text-white/25 text-xs mt-4 text-right">— Kim Beom-jun</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 bg-gold/8 border border-gold/20 rounded-full text-gold text-xs font-medium hover:bg-gold/15 hover:border-gold/35 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
