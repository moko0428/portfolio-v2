import nomad from '@/public/assets/study_nomadcoder_표지.png';
import question from '@/public/assets/study_면접질문_표지.png';
export const Study_Data = [
  {
    id: 1,
    cover: question,
    title: '프론트엔드 기술 면접 스터디',
    date: '2023.09 ~ 2024.02',
    description: [
      'Javascript, Typescript, React 등 자신이 알고 있는 기술적 지식을 정리하며 답변하는 스터디에요.',
      '매주 같은 질문에 대해서 다양한 시각으로 답변을 하며 서로에게 피드백을 주고 받으며 운영되었어요.',
    ],
  },
  {
    id: 2,
    cover: nomad,
    title: '노마드코더의 웹 기초 스터디',
    date: '2023.06 ~ 2023.09',
    description: [
      '웹 기초를 배우며 HTML/CSS, JS의 기초를 배울 수 있었어요.',
      '일일 스프린트를 작성하며 매일 어떤 공부를 해야할지 리스트업하는 습관을 기를 수 있었어요.',
    ],
  },
];
