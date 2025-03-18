import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';
import { useCopyToClipboard } from 'usehooks-ts';
import { EMAIL, PHONE_NUMBER } from '@/src/constants/text';
import { HiDownload } from 'react-icons/hi';
import Profile from './Profile';

export const contect = [
  {
    id: 1,
    title: '이력서',
    icon: HiDownload,
    href: '이준영_이력서.pdf',
    download: '이준영_이력서.pdf',
  },
  {
    id: 2,
    title: '깃허브',
    icon: FaGithub,
    href: 'https://github.com/moko0428',
  },
  {
    id: 3,
    title: '블로그',
    icon: SiVelog,
    href: 'https://velog.io/@moko0428',
  },
  {
    id: 4,
    title: '전화',
    icon: FaPhone,
    href: PHONE_NUMBER,
  },
  {
    id: 5,
    title: '메일',
    icon: IoMdMail,
    href: EMAIL,
  },
];
const AboutContent = () => {
  const [, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    copy(text)
      .then(() => {
        alert(`${text} 복사 완료!`);
      })
      .catch(() => {
        alert(`${text} 복사 실패!`);
      });
  };
  return (
    <div className="flex flex-col items-center mt-20">
      <Profile />
      <div className="flex gap-4 mt-10">
        {contect.map((item) => (
          <div key={item.id} className="group relative hover:text-gray-700">
            {item.download ? (
              <Link
                href={item.href}
                download={item.download}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 px-[10px] py-[5px] rounded-md"
              >
                <item.icon className="text-white size-[20px]" />
              </Link>
            ) : item.title === '전화' || item.title === '메일' ? (
              <div onClick={() => handleCopy(item.href)}>
                <item.icon className="size-[30px]" />
              </div>
            ) : (
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <item.icon className="size-[30px]" />
              </Link>
            )}
            <span className="invisible group-hover:visible absolute top-10 left-1/2 -translate-x-1/2 text-[12px] text-white w-[50px] h-[30px] bg-gray-700 font-bold rounded-md flex justify-center items-center mt-2">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
