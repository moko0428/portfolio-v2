import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center *:text-[25px] gap-4 mt-32">
      <div>
        안녕하세요.{' '}
        <span className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          프론트엔드 개발자 이준영
        </span>
        입니다.
      </div>
      <div>
        저는{' '}
        <span className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          성장하는 것
        </span>
        을 즐기는 개발자입니다.
      </div>
      <span className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        웹과 앱개발을 좋아합니다.
      </span>
    </div>
  );
};

export default Intro;
