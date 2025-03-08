import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center *:text-2xl gap-4 mt-32">
      <div>
        안녕하세요.{' '}
        <span className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          프론트엔드 개발자 이준영
        </span>
        입니다.
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <span className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            새로운 기술
          </span>
          과
          <span className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            {' '}
            트렌드
          </span>
          를
        </div>
        <div>
          <span className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            다양한 아이디어
          </span>
          를
        </div>
      </div>
      <span className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        일상 생활에 녹여내는 것을 좋아합니다.
      </span>
    </div>
  );
};

export default Intro;
