'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      // 덜 엄격한 threshold — 뷰포트에 조금만 들어와도 트리거
      { threshold: 0.04, rootMargin: '0px 0px -10px 0px' }
    );

    const observePending = () => {
      document.querySelectorAll<Element>('.reveal:not(.is-visible)').forEach((el) => {
        io.observe(el);
      });
    };

    // 초기 실행
    observePending();

    // 탭 전환 등 동적 DOM 변경 감지 — MutationObserver로 새 .reveal 요소 즉시 등록
    const mo = new MutationObserver(observePending);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
