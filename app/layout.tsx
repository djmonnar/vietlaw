import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VIETLAW | 진주·경남 베트남인을 위한 법률 컨시어지',
  description:
    'Dịch vụ tư vấn pháp lý cho người Việt tại Hàn Quốc. 진주·경남 지역 베트남 거주자를 위한 법률 상담 연결 서비스.',
  openGraph: {
    title: 'VIETLAW',
    description: 'Dịch vụ tư vấn pháp lý cho người Việt tại Jinju, Hàn Quốc',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="bg-dark text-white font-sans antialiased">{children}</body>
    </html>
  );
}
