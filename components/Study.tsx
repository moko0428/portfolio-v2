import React from 'react';
import Image from 'next/image';
import { Study_Data } from '@/data/study.data';

function Project() {
  return (
    <section
      id="study"
      className="flex flex-col w-full h-screen items-center bg-gray-100/50 p-10"
    >
      <h2 className="text-4xl font-bold">STUDY</h2>
      <div className="flex flex-col gap-4 mt-10">
        {Study_Data.map((study) => (
          <div
            key={study.id}
            className="flex gap-4 bg-white max-w-4xl p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={study.cover}
              alt={study.title}
              className="w-1/4 overflow-hidden"
            />
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-2xl font-bold">{study.title}</h3>
              <p className="text-sm text-neutral-400">{study.date}</p>
              <div className="flex gap-2 flex-wrap text-sm">
                {study.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
