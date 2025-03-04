import React from 'react';

import Intro from './about/intro';
import AboutContent from './about/aboutContent';

function About() {
  return (
    <section id="about" className="w-full h-screen bg-gray-100/50">
      <div className="flex flex-col items-center ">
        <Intro />

        <AboutContent />
      </div>
    </section>
  );
}

export default About;
