import Link from 'next/link';
import React from 'react';
import ProjectLogo from './ProjectLogo';
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
  id: number;
  screen: StaticImageData;
  title: string;
  description: string;
  tech: string[];
  path: string;
}

const ProjectCard = ({
  id,
  screen,
  title,
  description,
  tech,
  path,
}: ProjectCardProps) => {
  return (
    <Link
      href={`/project/${path}`}
      key={`project-${id}`}
      className="flex flex-col bg-white max-w-lg h-[400px] p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center justify-center w-full bg-neutral-100 mb-2">
        <ProjectLogo screen={screen} title={title} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg h-min-20">{description}</p>
        <div className="flex gap-2 flex-wrap text-sm mt-4">
          {tech.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-100 rounded-full ">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
