import React from 'react';
import { Project_Data } from '@/data/project.data';
import Image from 'next/image';
import Link from 'next/link';

function Project() {
  return (
    <section
      id="project"
      className="flex flex-col w-full h-screen items-center bg-gray-100/50 p-10"
    >
      <h2 className="text-4xl font-bold">PROJECT</h2>
      <div className="flex flex-col gap-4 mt-10">
        {Project_Data.map((project) => (
          <Link
            href={`/project/${project.id}`}
            key={project.id}
            className="flex gap-4 bg-white max-w-4xl p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col gap-2 w-1/2">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
              <div className="flex gap-2 flex-wrap text-sm mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 rounded-full "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Image
              src={project.screen}
              alt={project.title}
              className="w-1/2 overflow-hidden"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Project;
