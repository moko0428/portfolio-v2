import itzipCover from '@/public/assets/잇집_로고.png';
import getoutCover from '@/public/assets/일단나와_로고.png';
import { ProjectsProps } from '@/src/types/projects';

export const Projects_Data: ProjectsProps[] = [
  {
    id: 1,
    title: 'ItZip',
    coverMain: itzipCover,
    descriptionShort:
      '개발자 취준생을 위한 종합 취업 준비 플랫폼으로, 블로그, 학습, 구인 정보 등을 제공하는 웹 서비스입니다.',
    teamName: 'ITZIP',
    progressPeriod: '2024.06 ~ 진행중',
    member: 'FE 4명, BE 5명, DE 4명',
    link: 'https://github.com/ITZipProject/itzip_front',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Jotai', 'Zod'],
    features: [
      '사용자 인증 플로우 구현',
      '토큰 기반 자동 인증 갱신 시스템 구현',
      '사용자 프로필 관리 시스템 구현',
    ],
    description: [
      {
        title: '1. 사용자 인증 플로우 구현',
        list: [
          {
            title: '1. 회원가입',
            cover: '',
            desc: [
              '이메일 중복 검사',
              '이메일 인증 코드 검사',
              '비밀번호 유효성 검사',
              '회원가입 완료',
            ],
          },
          {
            title: '2. 로그인',
            cover: '',
            desc: ['자격 증명 확인', '토큰 발급', '인증 상태 저장'],
          },
          {
            title: '3. 인증 상태 유지',
            cover: '',
            desc: [
              '토큰 기반 자동 로그인',
              '토큰 만료 관리',
              '토큰 갱신 요청 처리',
            ],
          },
          {
            title: '4. 인증 실패 처리',
            cover: '',
            desc: [
              '잘못된 자격 증명',
              '토큰 만료',
              '토큰 갱신 실패 후 자동 로그아웃',
            ],
          },
          {
            title: '5. 로그아웃',
            cover: '',
            desc: ['토큰 초기화', '인증 상태 초기화', '리다이렉션'],
          },
        ],
      },
      {
        title: '2. 토큰 기반 자동 인증 갱신 시스템 구현',
        list: [
          {
            title: '1. 토큰 갱신 시스템 아키텍처',
            cover: '',
            desc: [
              '토큰 갱신 중복 방지',
              '대기 중인 요청 큐 관리',
              '갱신 완료 후 요청 재실행',
            ],
          },
          {
            title: '2. 요청 인터셉터 구현',
            cover: '',
            desc: ['자동 토큰 주입', '인증 헤더 설정'],
          },
          {
            title: '3. 토큰 회전(Rotation) 매커니즘',
            cover: '',
            desc: [
              '리프레시 토큰 교체',
              '보안 강화를 위한 토큰 회전 (리프레시 토큰 탈취 공격, 재사용 공격 취약점)',
            ],
          },
          {
            title: '4. 에러 처리 및 자동 로그아웃',
            cover: '',
            desc: ['인증 실패 시 자동 로그아웃', '토큰 초기화'],
          },
        ],
      },
      {
        title: '3. 사용자 프로필 관리 시스템 구현',
        list: [
          {
            title: '1. 프로필 이미지 관리',
            cover: '',
            desc: [
              '이미지 업로드 및 미리보기',
              '이미지 유효성 검사',
              '기본 이미지 처리',
            ],
          },
          {
            title: '2. 사용자 정보 수정',
            cover: '',
            desc: ['닉네임 중복 검사', '비밀번호 변경', '실시간 입력 검증'],
          },
          {
            title: '3. 편집 모드 관리',
            cover: '',
            desc: ['섹션별 편집모드 상태 관리', '변경 사항 취소/저장'],
          },
          {
            title: '4. UI/UX 개선',
            cover: '',
            desc: [
              '직관적인 편집 인터페이스',
              '실시간 피드백 제공',
              '반응형 레이아웃 구현',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '일단 나와',
    coverMain: getoutCover,
    descriptionShort:
      '개발자 취준생을 위한 종합 취업 준비 플랫폼으로, 블로그, 학습, 구인 정보 등을 제공하는 웹 서비스입니다.',
    teamName: 'ITZIP',
    progressPeriod: '2024.06 ~ 진행중',
    member: 'FE 4명, BE 5명, DE 4명',
    link: 'https://github.com/ITZipProject/itzip_front',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Jotai', 'Zod'],
    features: [
      '사용자 인증 플로우 구현',
      '토큰 기반 자동 인증 갱신 시스템 구현',
      '사용자 프로필 관리 시스템 구현',
    ],
    description: [
      {
        title: '1. 사용자 인증 플로우 구현',
        list: [
          {
            title: '1. 회원가입',
            cover: '',
            desc: [
              '이메일 중복 검사',
              '이메일 인증 코드 검사',
              '비밀번호 유효성 검사',
              '회원가입 완료',
            ],
          },
          {
            title: '2. 로그인',
            cover: '',
            desc: ['자격 증명 확인', '토큰 발급', '인증 상태 저장'],
          },
          {
            title: '3. 인증 상태 유지',
            cover: '',
            desc: [
              '토큰 기반 자동 로그인',
              '토큰 만료 관리',
              '토큰 갱신 요청 처리',
            ],
          },
          {
            title: '4. 인증 실패 처리',
            cover: '',
            desc: [
              '잘못된 자격 증명',
              '토큰 만료',
              '토큰 갱신 실패 후 자동 로그아웃',
            ],
          },
          {
            title: '5. 로그아웃',
            cover: '',
            desc: ['토큰 초기화', '인증 상태 초기화', '리다이렉션'],
          },
        ],
      },
      {
        title: '2. 토큰 기반 자동 인증 갱신 시스템 구현',
        list: [
          {
            title: '1. 토큰 갱신 시스템 아키텍처',
            cover: '',
            desc: [
              '토큰 갱신 중복 방지',
              '대기 중인 요청 큐 관리',
              '갱신 완료 후 요청 재실행',
            ],
          },
          {
            title: '2. 요청 인터셉터 구현',
            cover: '',
            desc: ['자동 토큰 주입', '인증 헤더 설정'],
          },
          {
            title: '3. 토큰 회전(Rotation) 매커니즘',
            cover: '',
            desc: [
              '리프레시 토큰 교체',
              '보안 강화를 위한 토큰 회전 (리프레시 토큰 탈취 공격, 재사용 공격 취약점)',
            ],
          },
          {
            title: '4. 에러 처리 및 자동 로그아웃',
            cover: '',
            desc: ['인증 실패 시 자동 로그아웃', '토큰 초기화'],
          },
        ],
      },
      {
        title: '3. 사용자 프로필 관리 시스템 구현',
        list: [
          {
            title: '1. 프로필 이미지 관리',
            cover: '',
            desc: [
              '이미지 업로드 및 미리보기',
              '이미지 유효성 검사',
              '기본 이미지 처리',
            ],
          },
          {
            title: '2. 사용자 정보 수정',
            cover: '',
            desc: ['닉네임 중복 검사', '비밀번호 변경', '실시간 입력 검증'],
          },
          {
            title: '3. 편집 모드 관리',
            cover: '',
            desc: ['섹션별 편집모드 상태 관리', '변경 사항 취소/저장'],
          },
          {
            title: '4. UI/UX 개선',
            cover: '',
            desc: [
              '직관적인 편집 인터페이스',
              '실시간 피드백 제공',
              '반응형 레이아웃 구현',
            ],
          },
        ],
      },
    ],
  },
];
