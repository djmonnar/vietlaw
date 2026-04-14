export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-[0.25em] text-gold-gradient mb-4">
              VIETLAW
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-2">
              진주·경남 베트남인의 법률 파트너
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              Đối tác pháp lý của người Việt tại Jinju, Gyeongnam
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5">
              연락처 / Liên hệ
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">▸</span>
                <div>
                  <div className="text-white/80 font-medium">대표 김범준</div>
                  <div className="text-white/40 text-xs">Giám đốc Kim Beom-jun</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">▸</span>
                <a
                  href="tel:01057888481"
                  className="hover:text-gold transition-colors"
                >
                  010-5788-8481
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">▸</span>
                <span>경상남도 진주시</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5">
              서비스 / Dịch vụ
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="hover:text-gold/80 transition-colors">법률상담 연결 · Kết nối luật sư</li>
              <li className="hover:text-gold/80 transition-colors">서류 번역 · Dịch thuật</li>
              <li className="hover:text-gold/80 transition-colors">현장 동행 · Đồng hành</li>
              <li className="hover:text-gold/80 transition-colors">B2B 파트너십 · Đối tác</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-dark-border">
              <p className="text-xs text-white/30 leading-relaxed">
                서비스 지역: 진주, 사천, 창원, 김해
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 VIETLAW. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center">
            본 서비스는 법률 컨시어지 연결 서비스이며, 직접적인 법률 조언이 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
