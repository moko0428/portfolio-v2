'use client';

import Scroll from '@/src/components/Scroll';
import About from '@/src/sections/intro/About';
import Project from '@/src/sections/project/Project';
import Skills from '@/src/sections/skill/skills';
import Study from '@/src/sections/study/Study';
export default function Home() {
  return (
    <div className="flex flex-col ">
      <Scroll />
      <div className="flex flex-col items-center">
        <About />
        <Skills />
        <Project />
        <Study />
      </div>
    </div>
  );
}
