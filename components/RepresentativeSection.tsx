import Image from 'next/image';

export default function RepresentativeSection() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-dark-border" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-semibold">
            Representative
          </span>
          <div className="h-px flex-1 bg-dark-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&fit=crop"
                alt="대표 김범준"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-gold/20 -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="mb-2">
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
                대표 / Giám đốc
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">김범준</h2>
            <p className="text-white/50 text-lg mb-8 italic">Kim Beom-jun</p>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-gold-gradient mb-8" />

            {/* Korean intro */}
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              베트남에서 <span className="text-gold font-semibold">10년 이상</span> 거주하며 병원 마케팅, 한국·베트남 무역 등 다양한 사업을 직접 운영한 경험을 바탕으로, 진주·경남 지역 베트남 커뮤니티에 깊은 신뢰와 넓은 네트워크를 보유하고 있습니다.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              베트남어·한국어·영어를 완벽하게 구사하며, 법률 용어의 미묘한 뉘앙스까지 정확하게 전달합니다. 억울한 이들의 곁에서 든든한 통역자이자 조력자가 되겠습니다.
            </p>

            {/* Vietnamese intro */}
            <div className="bg-dark-elevated border border-dark-border rounded-xl p-6">
              <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-3">Tiếng Việt</p>
              <p className="text-white/60 text-sm leading-relaxed italic">
                &ldquo;Tôi đã sống và làm việc tại Việt Nam hơn 10 năm. Tôi hiểu những khó khăn mà người Việt gặp phải khi sinh sống tại Hàn Quốc. Hãy để tôi đồng hành cùng bạn.&rdquo;
              </p>
              <p className="text-white/30 text-xs mt-3 text-right">— Kim Beom-jun</p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['베트남어 원어민 수준', '10년+ 현지 경험', '한·베 비즈니스 전문', '법률 통번역'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium"
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
