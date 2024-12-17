import Image from 'next/image';
import React from 'react';
import profile from '@/public/assets/이준영.jpg';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';
import { useCopyToClipboard } from 'usehooks-ts';
import { EMAIL, PHONE_NUMBER } from '@/constants/text';

const AboutContent = () => {
  const [, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    copy(text)
      .then(() => {
        console.log('copy', { text });
      })
      .catch((err) => {
        console.log('failed copy', err);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center  px-10">
      <Image
        src={profile}
        className="Profile w-[250px] h-[250px] rounded-full ring-2 ring-black mb-4"
        alt="profile"
      />
      <div className="flex flex-row gap-8 *:text-gray-300 ">
        <div>
          <Link
            href={'https://github.com/moko0428'}
            className="group relative hover:text-gray-700"
          >
            <FaGithub className="size-[30px]" />
            <span className="invisible group-hover:visible absolute top-10 left-1/2 -translate-x-1/2 text-[12px] text-white w-[50px] h-[30px] bg-gray-700 font-bold rounded-md flex justify-center items-center">
              깃허브
            </span>
          </Link>
        </div>
        <div>
          <Link
            href={'https://github.com/moko0428'}
            className="group relative hover:text-gray-700"
          >
            <SiVelog className="size-[30px]" />
            <span className="invisible group-hover:visible absolute top-10 left-1/2 -translate-x-1/2 text-[12px] text-white w-[50px] h-[30px] bg-gray-700 font-bold rounded-md flex justify-center items-center">
              블로그
            </span>
          </Link>
        </div>
        <div
          onClick={() => handleCopy(PHONE_NUMBER)}
          className="group relative hover:text-gray-700"
        >
          <FaPhone className="size-[30px]" />
          <span className="invisible group-hover:visible absolute top-10 left-1/2 -translate-x-1/2 text-[12px] text-white w-[50px] h-[30px] bg-gray-700 font-bold rounded-md flex justify-center items-center">
            전화
          </span>
        </div>
        <div
          onClick={() => handleCopy(EMAIL)}
          className="group relative hover:text-gray-700"
        >
          <IoMdMail className="size-[30px]" />
          <span className="invisible group-hover:visible absolute top-10 left-1/2 -translate-x-1/2 text-[12px] text-white w-[50px] h-[30px] bg-gray-700 font-bold rounded-md flex justify-center items-center">
            메일
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
