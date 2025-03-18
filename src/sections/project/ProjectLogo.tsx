import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface LogoProps {
  screen: StaticImageData;
  title: string;
}

const ProjectLogo = ({ screen, title }: LogoProps) => {
  return (
    <div className="flex items-center justify-center size-[200px]">
      <Image src={screen} alt={title} className="object-cover" />
    </div>
  );
};

export default ProjectLogo;
