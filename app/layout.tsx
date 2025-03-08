import type { Metadata } from 'next';
import './globals.css';
import { Splash } from '@/components/Splash';

export const metadata: Metadata = {
  title: '이준영 포트폴리오',
  description: '이준영 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Splash />
        {children}
      </body>
    </html>
  );
}
