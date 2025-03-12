'use client';

import { Project_Data } from '@/data/project.data';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '@/public/assets/projects/githubIcon.svg';
import figmaIcon from '@/public/assets/projects/figma.svg';
import { Projects_Data } from '@/data/projects.data';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = Project_Data.find((p) => p.id === Number(params.id));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const projects = Projects_Data[Number(params.id) - 1];
  return (
    <main className="min-h-screen p-10">
      <Link
        href="/#project"
        className="mb-8 inline-block text-neutral-400 hover:text-blue-800"
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
        <section>
          <Image src={projects.coverMain} alt="cover" />
          {projects.descriptionShort}
          <ul>
            <li>팀명 : {projects.teamName}</li>
            <li>진행기간 : {projects.progressPeriod}</li>
            <li>멤버 : {projects.member}</li>
            <li>
              저장소 :
              <Link href={projects.link} target="_blank">
                {projects.link}
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>기술스택</h2>
          <ul>
            {projects.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        <section className="prose max-w-none">
          {projects.description.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              {section.list.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <h3>{item.title}</h3>
                  <img src={item.cover} alt={item.title} />
                  {item.desc.map((text, descIndex) => (
                    <p key={descIndex}>{text}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
