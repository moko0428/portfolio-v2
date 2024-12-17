'use client';

import { Project_Data } from '@/data/project.data';
import React, { useState } from 'react';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import Image from 'next/image';

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = Project_Data[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Project_Data.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === Project_Data.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full h-full p-[20px] bg-white shadow-lg">
      <div className="flex flex-col">
        <div className="w-full h-[500px] rounded-xl border-2 border-black bg-red-50 flex justify-center items-center">
          {project.screen && (
            <Image
              src={project.screen}
              alt={project.title}
              width={500}
              height={500}
              className="object-contain"
            />
          )}
        </div>
        <div className="py-[20px]">
          <h2 className="font-bold text-[18px]">{project.title}</h2>
          <span className="text-gray-300">{project.made}</span>
        </div>
      </div>

      <div className="flex justify-around items-center h-[100px]">
        <button onClick={handlePrev}>
          <MdKeyboardDoubleArrowLeft className="size-[50px]" />
        </button>
        <div className="flex gap-2 justify-center items-center">
          {Project_Data.map((_, index) => (
            <div
              key={index}
              className={`size-[50px] rounded-full flex justify-center items-center text-sm
                ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-100'}`}
            />
          ))}
        </div>
        <button onClick={handleNext}>
          <MdKeyboardDoubleArrowRight className="size-[50px]" />
        </button>
      </div>
    </div>
  );
};

export default Card;
