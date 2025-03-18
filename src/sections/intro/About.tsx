import React from 'react';
import AboutContent from './AboutContent';
import IntroText from './IntroText';

function About() {
  return (
    <section id="about" className="w-full h-screen bg-gray-100/50">
      <div className="flex flex-col items-center ">
        <IntroText />
        <AboutContent />
      </div>
    </section>
  );
}

export default About;
