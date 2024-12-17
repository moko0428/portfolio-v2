'use client';

import React from 'react';
import { AnimatedHeader } from './AnimatedHeader';

export function Header() {
  return (
    <AnimatedHeader>
      <div className="text-[30px]">MOKO</div>
      <div className="Nav flex flex-row gap-4 *:text-[25px] ">
        <div>ABOUT</div>
        <div>PROJECT</div>
        <div>STUDY</div>
      </div>
    </AnimatedHeader>
  );
}
