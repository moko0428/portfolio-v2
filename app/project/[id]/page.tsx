'use client';

import { Project_Data } from '@/data/project.data';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '@/public/assets/projects/githubIcon.svg';
import figmaIcon from '@/public/assets/projects/figma.svg';
export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = Project_Data.find((p) => p.id === Number(params.id));

  console.log(params);
  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <main className="min-h-screen p-10">
      <Link
        href="/#project"
        className="mb-8 inline-block text-blue-600 hover:text-blue-800"
      >
        ← 메인으로 돌아가기
      </Link>

      <div className="max-w-4xl mx-auto bg-white p-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center gap-2 *:text-neutral-400">
            <Image src={githubIcon} alt="github" />
            <Image src={figmaIcon} alt="figma" />
          </div>
        </header>

        <Image
          src={project.screen}
          alt={project.title}
          className="w-full rounded-lg mb-6"
        />
        <p className="text-lg mb-6">{project.description}</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">사용 기술</h2>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
