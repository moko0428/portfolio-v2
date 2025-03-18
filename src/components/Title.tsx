import React from 'react';

interface TitleProps {
  title: string;
  subTitle?: string;
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <header className="flex flex-col items-center justify-center gap-2 mb-8">
      <h2 className="text-4xl font-bold">{title}</h2>
      <span className="text-neutral-500">{subTitle}</span>
    </header>
  );
};

export default Title;
