import itzip from '@/public/assets/잇집_로고2.png';
import getout from '@/public/assets/일단나와_로고.png';
export const Project_Data = [
  {
    id: 1,
    screen: itzip,
    title: 'ITZIP',
    description:
      '개발자 취준생을 위한 종합 취업 준비 플랫폼으로, 블로그, 학습, 구인 정보 등을 제공하는 웹 서비스.',
    member: '이준영(FE) 외 4명, 백엔드 5명, 디자이너 4명',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    path: 'itzip',
  },
  {
    id: 2,
    screen: getout,
    title: '일단 나와',
    description: '은둔 청년들의 외출 습관 기르기 서비스',
    member: '이준영(FE) 외 2명, 백엔드 2명, 디자이너 1명',
    tech: [
      'React-Native',
      'Tailwind CSS',
      'JavaScript',
      'Expo',
      'ReactContextAPI',
    ],
    path: 'getout',
  },
];
