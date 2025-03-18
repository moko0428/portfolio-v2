import type { Metadata } from 'next';
import './globals.css';

import Header from '../sections/header/Header';
import Splash from '../components/Splash';
import Footer from '../sections/footer/Footer';

export const metadata: Metadata = {
  title: '이준영 포트폴리오',
  description: '프론트엔드 개발자 이준영입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="">
        <Splash />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
