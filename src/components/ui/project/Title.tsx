import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import githubIcon from '@/public/assets/projects/githubIcon.svg';
import figmaIcon from '@/public/assets/projects/figma.svg';
const Title = ({
  title,
  link_github,
  link_figma,
}: {
  title: string;
  link_github: string;
  link_figma: string;
}) => {
  return (
    <header className="flex items-center justify-between mb-10 pb-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex items-center gap-2 pb-4">
        {link_github && (
          <Link href={link_github} target="_blank">
            <Image src={githubIcon} alt="github" />
          </Link>
        )}
        {link_figma && (
          <Link href={link_figma} target="_blank">
            <Image src={figmaIcon} alt="figma" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Title;
