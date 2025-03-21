'use client';

import React from 'react';
import { AnimatedHeader } from './AnimatedHeader';
import Scroll from '@/src/components/Scroll';
import Link from 'next/link';

const menuItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'project', label: 'PROJECT' },
  { id: 'study', label: 'STUDY' },
];

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 이 값을 조절하여 스크롤 위치 미세 조정
      const targetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatedHeader>
      <Scroll />
      <Link href="/">
        <div className="text-[30px]">MOKO</div>
      </Link>
      <div className="Nav flex flex-row gap-4 *:text-[25px]">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-blue-500 transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}
      </div>
    </AnimatedHeader>
  );
};

export default Header;
