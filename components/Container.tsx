'use client';
import About from './About';
import Footer from './Footer';
import { Header } from './header/Header';
import Project from './Project';
import Scroll from './Scroll';
import Study from './Study';

export default function Container() {
  return (
    <div className="flex flex-col ">
      <Scroll />
      <div className="flex flex-col items-center">
        <Header />
        <About />
        <Project />
        <Study />
        <Footer />
      </div>
    </div>
  );
}
