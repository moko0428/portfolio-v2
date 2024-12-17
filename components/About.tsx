import React from 'react';

import Intro from './about/intro';
import AboutContent from './about/aboutContent';
const About = () => {
  return (
    <div className="w-full max-w-[800px] p-[20px] mx-auto h-screen mt-[80px] pt-[100px]">
      <div className="flex AboutContent justify-center items-center space-y-8">
        <Intro />
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
