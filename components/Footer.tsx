export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-2xl font-bold tracking-[0.28em] text-gold-gradient mb-4">
              VIETLAW
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-2">
              진주·경남 베트남인의 법률 파트너
            </p>
            <p className="text-white/25 text-xs">
              Đối tác pháp lý của người Việt tại Jinju
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="tel:01057888481"
                className="px-4 py-2 bg-gold-gradient text-dark text-xs font-bold rounded-lg hover:opacity-90 active:scale-[0.97] transition-all duration-300"
              >
                전화 상담
              </a>
              <a
                href="#vietnamese"
                className="px-4 py-2 border border-dark-border text-white/50 text-xs rounded-lg hover:border-gold/30 hover:text-gold/80 transition-all duration-300"
              >
                서비스 보기
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-[10px] font-semibold tracking-[0.4em] uppercase mb-5">
              연락처 / Liên hệ
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="text-white/75 font-medium">김범준 대표</div>
                <div className="text-white/35 text-xs mt-0.5">Giám đốc Kim Beom-jun</div>
              </li>
              <li>
                <a href="tel:01057888481" className="text-white/55 hover:text-gold transition-colors duration-300 tabular">
                  010-5788-8481
                </a>
              </li>
              <li className="text-white/55">경상남도 진주시</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-[10px] font-semibold tracking-[0.4em] uppercase mb-5">
              서비스 / Dịch vụ
            </h4>
            <ul className="space-y-2.5 text-sm text-white/45">
              {[
                '법률상담 연결 · Kết nối luật sư',
                '서류 번역 · Dịch thuật',
                '현장 동행 · Đồng hành',
                'B2B 파트너십 · Đối tác',
              ].map((s) => (
                <li key={s} className="hover:text-gold/70 transition-colors duration-300 cursor-default">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-dark-border">
              <p className="text-white/25 text-xs leading-relaxed">
                서비스 지역: 진주, 사천, 창원, 김해
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© 2026 VIETLAW. All rights reserved.</p>
          <p className="text-white/15 text-xs text-center">
            본 서비스는 법률 컨시어지 연결 서비스이며, 직접적인 법률 조언이 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
