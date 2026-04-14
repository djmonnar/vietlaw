import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';

const ScaleIcon = ({ large }: { large?: boolean }) => (
  <svg className={large ? 'w-7 h-7' : 'w-6 h-6'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6l9-4 9 4M12 2v20M5 9l7 3 7-3" />
    <path d="M5 18H2l3-9 3 9H2M19 18h-3l3-9 3 9h-3" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export default function VietnameseTab() {
  return (
    <div>
      {/* — Hero split row — */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
        {/* Text */}
        <div className="reveal">
          <p className="text-gold text-[11px] tracking-[0.45em] uppercase font-semibold mb-5">
            Dành cho người Việt Nam
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
            Bạn gặp khó khăn<br />
            <span className="text-gold">pháp lý tại Hàn Quốc?</span>
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-10 max-w-md">
            Chúng tôi kết nối bạn với luật sư giỏi, tận tâm — và luôn ở bên bạn tại mọi buổi làm việc với cơ quan chức năng.
          </p>

          {/* Emotional quote */}
          <div className="relative border-l-2 border-gold pl-6 py-1">
            <div className="absolute -left-px top-0 bottom-0 w-0.5 bg-gold-gradient" />
            <p className="text-white/80 text-lg sm:text-xl font-medium leading-relaxed italic">
              &ldquo;Chúng tôi mong bạn trở về quê hương<br className="hidden sm:block" />
              mà không có nỗi oan ức nào.&rdquo;
            </p>
            <p className="text-white/30 text-xs mt-4 tracking-wide not-italic">
              타지에서 억울한 일 없이 고향으로 돌아가길 바랍니다
            </p>
          </div>

          {/* Target badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { vi: 'Công nhân, lao động', ko: '노동자' },
              { vi: 'Kết hôn với người Hàn', ko: '결혼이민자' },
              { vi: 'Du học sinh', ko: '유학생' },
            ].map((item) => (
              <div key={item.ko} className="px-4 py-2 bg-dark-elevated border border-dark-border rounded-full hover:border-gold/30 transition-colors duration-300">
                <span className="text-white/60 text-xs">{item.vi}</span>
                <span className="text-dark-border text-xs mx-2">·</span>
                <span className="text-gold/70 text-xs font-medium">{item.ko}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image — shown on all screen sizes */}
        <div className="reveal reveal-d1 relative rounded-2xl overflow-hidden aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&fit=crop"
            alt="베트남 커뮤니티"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
          {/* Floating stat */}
          <div className="absolute bottom-5 left-5 glass rounded-xl px-5 py-3.5 border-gold/15">
            <p className="text-gold text-2xl font-bold tabular">10+</p>
            <p className="text-white/55 text-xs mt-0.5">năm kinh nghiệm · 년 경험</p>
          </div>
        </div>
      </div>

      {/* — Pain points — horizontal strip — */}
      <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3 mb-20 sm:mb-28">
        {[
          { icon: '💬', vi: 'Không nói được tiếng Hàn', ko: '한국어 불가' },
          { icon: '⚖️', vi: 'Không biết quyền lợi', ko: '권리 모름' },
          { icon: '💰', vi: 'Lo lắng về chi phí', ko: '비용 걱정' },
          { icon: '🤝', vi: 'Không biết tìm ai', ko: '누구에게 물어야 할지' },
        ].map((item, i) => (
          <div
            key={item.ko}
            className={`reveal reveal-d${i + 1} bg-dark-elevated border border-dark-border rounded-2xl p-5 sm:p-6 text-center hover:border-gold/25 transition-colors duration-300`}
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <p className="text-white/50 text-xs leading-relaxed mb-1.5">{item.vi}</p>
            <p className="text-gold/55 text-[11px] font-medium">{item.ko}</p>
          </div>
        ))}
      </div>

      {/* — Services Bento Grid — */}
      <div className="mb-8 reveal">
        <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-2">Services</p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Chúng tôi có thể giúp gì?
          <span className="text-white/30 text-lg font-normal ml-3">저희가 도울 수 있는 것들</span>
        </h3>
      </div>

      {/* Bento: Card 1 large (col-span-2), Cards 2+3 stacked */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 mb-20 sm:mb-28">
        {/* Large card */}
        <div className="md:col-span-2 md:row-span-2 reveal reveal-d1">
          <ServiceCard
            icon={<ScaleIcon large />}
            titlePrimary="Kết nối luật sư"
            titleSecondary="법률상담 연결"
            description="Chúng tôi tìm cho bạn luật sư phù hợp với từng loại vụ việc — lao động, hôn nhân, visa, tai nạn giao thông. Hoàn toàn tư vấn bằng tiếng Việt, không lo ngại ngôn ngữ."
            size="large"
          />
        </div>
        {/* Stacked cards */}
        <div className="reveal reveal-d2">
          <ServiceCard
            icon={<DocumentIcon />}
            titlePrimary="Dịch thuật hồ sơ"
            titleSecondary="서류 번역"
            description="Hợp đồng, biên bản, đơn tố cáo — dịch chính xác bởi người có chuyên môn pháp luật. (5~10만원/건)"
          />
        </div>
        <div className="reveal reveal-d3">
          <ServiceCard
            icon={<LocationIcon />}
            titlePrimary="Đồng hành tại hiện trường"
            titleSecondary="현장 밀착 동행"
            description="Đồn cảnh sát, Sở Lao động, Xuất nhập cảnh — chúng tôi đi cùng. Bạn không đơn độc. (반일 10만원/종일 20만원)"
          />
        </div>
      </div>

      {/* — CTA — */}
      <div className="reveal relative rounded-3xl overflow-hidden border border-gold/20">
        {/* Background */}
        <div className="absolute inset-0 mesh-gold" />
        <div className="absolute inset-0 bg-dark-elevated/80" />

        <div className="relative z-10 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Liên hệ với chúng tôi ngay
          </h3>
          <p className="text-white/45 text-sm mb-2">Tư vấn bằng tiếng Việt · 베트남어 상담 가능</p>
          <p className="text-white/25 text-xs mb-10">Hoàn toàn bảo mật · 완전 비밀 보장</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:01057888481"
              className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-dark font-bold text-sm tracking-wider rounded-xl hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-spring shadow-gold-md"
            >
              📞 010-5788-8481
            </a>
            <a
              href="https://pf.kakao.com/_vietlaw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-gold/35 text-gold font-semibold text-sm rounded-xl hover:bg-gold/8 hover:border-gold/60 active:scale-[0.98] transition-all duration-500 ease-spring"
            >
              💬 KakaoTalk / Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
