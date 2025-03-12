'use client';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { Header } from '@/components/header/Header';
import Project from '@/components/Project';
import Scroll from '@/components/Scroll';
import Skills from '@/components/skills';
import Study from '@/components/Study';
export default function Home() {
  return (
    <div className="flex flex-col ">
      <Scroll />
      <div className="flex flex-col items-center">
        <Header />
        <About />
        <Skills />
        <Project />
        <Study />
        <Footer />
      </div>
    </div>
  );
}
