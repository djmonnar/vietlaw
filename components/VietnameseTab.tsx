import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';

const ScaleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1m0 0l-4 10m4-10l4 10M4 20h16M8 14l-3 6h6l-3-6zm8 0l-3 6h6l-3-6z" />
    <path d="M12 4h.01" />
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
    <div className="animate-fadeIn">
      {/* Hero row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Text */}
        <div>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            Dành cho người Việt Nam
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            Bạn đang gặp khó khăn<br />
            <span className="text-gold">về pháp lý tại Hàn Quốc?</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10">
            Chúng tôi kết nối bạn với luật sư giỏi, tận tâm — và luôn ở bên bạn tại mọi buổi thẩm vấn, làm việc với cơ quan chức năng.
          </p>

          {/* Emotional quote */}
          <div className="border-l-2 border-gold pl-6 py-2 bg-gold/5 rounded-r-xl">
            <p className="text-white/80 text-lg font-medium leading-relaxed italic">
              &ldquo;Chúng tôi mong bạn trở về quê hương<br />
              mà không có nỗi oan ức nào.&rdquo;
            </p>
            <p className="text-white/35 text-xs mt-3 tracking-wide">
              — 타지에서 억울한 일 없이 고향으로 돌아가길 바랍니다 —
            </p>
          </div>

          {/* Target groups */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { vi: 'Công nhân, lao động', ko: '노동자' },
              { vi: 'Kết hôn với người Hàn', ko: '결혼이민자' },
              { vi: 'Du học sinh', ko: '유학생' },
            ].map((item) => (
              <div key={item.ko} className="px-4 py-2 bg-dark-elevated border border-dark-border rounded-full">
                <span className="text-white/70 text-xs">{item.vi}</span>
                <span className="text-dark-border text-xs mx-2">·</span>
                <span className="text-gold/70 text-xs">{item.ko}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&fit=crop"
            alt="Vietnamese community"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
          {/* Floating stat */}
          <div className="absolute bottom-6 left-6 bg-dark/90 backdrop-blur-sm border border-gold/20 rounded-xl px-5 py-4">
            <p className="text-gold text-2xl font-bold">10+</p>
            <p className="text-white/60 text-xs mt-1">năm kinh nghiệm · 년 경험</p>
          </div>
        </div>
      </div>

      {/* Pain points */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
        {[
          { icon: '💬', text: 'Không nói được tiếng Hàn', sub: '한국어 불가' },
          { icon: '⚖️', text: 'Không biết quyền lợi', sub: '권리 모름' },
          { icon: '💰', text: 'Lo lắng về chi phí', sub: '비용 걱정' },
          { icon: '😰', text: 'Không biết tìm ai', sub: '누구에게 물어야 할지' },
        ].map((item) => (
          <div key={item.sub} className="bg-dark-elevated border border-dark-border rounded-xl p-5 text-center">
            <div className="text-2xl mb-3">{item.icon}</div>
            <p className="text-white/55 text-xs leading-relaxed mb-1">{item.text}</p>
            <p className="text-gold/50 text-xs">{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Service Cards */}
      <h3 className="text-xl font-semibold text-white mb-8">
        Chúng tôi có thể giúp gì cho bạn?
        <span className="text-white/40 text-sm font-normal ml-3">저희가 도울 수 있는 것들</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <ServiceCard
          icon={<ScaleIcon />}
          titlePrimary="Kết nối luật sư"
          titleSecondary="법률상담 연결"
          description="Chúng tôi tìm cho bạn luật sư phù hợp với từng loại vụ việc — lao động, hôn nhân, visa, tai nạn giao thông. Hoàn toàn bằng tiếng Việt."
        />
        <ServiceCard
          icon={<DocumentIcon />}
          titlePrimary="Dịch thuật hồ sơ"
          titleSecondary="서류 번역"
          description="Tất cả giấy tờ pháp lý — hợp đồng, biên bản, đơn tố cáo — được dịch chính xác bởi người có chuyên môn pháp luật. (5~10만원/건)"
        />
        <ServiceCard
          icon={<LocationIcon />}
          titlePrimary="Đồng hành tại hiện trường"
          titleSecondary="현장 밀착 동행"
          description="Chúng tôi đi cùng bạn đến đồn cảnh sát, Sở Lao động, Cơ quan xuất nhập cảnh. Bạn không đơn độc. (반일 10만원 / 종일 20만원)"
        />
      </div>

      {/* CTA */}
      <div className="bg-dark-elevated border border-gold/20 rounded-2xl p-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Liên hệ với chúng tôi ngay hôm nay
        </h3>
        <p className="text-white/50 text-sm mb-2">Tư vấn bằng tiếng Việt · 베트남어 상담 가능</p>
        <p className="text-white/30 text-xs mb-8">Hoàn toàn bảo mật · 비밀 보장</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:01057888481"
            className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-dark font-bold text-sm tracking-wider rounded hover:opacity-90 transition-opacity"
          >
            📞 010-5788-8481
          </a>
          <a
            href="https://open.kakao.com/o/vietlaw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-gold/40 text-gold font-semibold text-sm rounded hover:bg-gold/10 transition-colors"
          >
            💬 KakaoTalk / Zalo
          </a>
        </div>
      </div>
    </div>
  );
}
