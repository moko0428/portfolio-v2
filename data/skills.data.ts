import nomad from '@/public/assets/study_nomadcoder_표지.png';
import question from '@/public/assets/study_면접질문_표지.png';
import nextjs from '@/public/assets/skills/nextdotjs.svg';
import htmlOn from '@/public/assets/skills/htmlOn.svg';
import htmlOff from '@/public/assets/skills/htmlOff.svg';
import cssOn from '@/public/assets/skills/cssOn.svg';
import cssOff from '@/public/assets/skills/cssOff.svg';
import jsOn from '@/public/assets/skills/javascriptOn.svg';
import jsOff from '@/public/assets/skills/javascriptOff.svg';
import tsOn from '@/public/assets/skills/typescriptOn.svg';
import tsOff from '@/public/assets/skills/typescriptOff.svg';
import remixOn from '@/public/assets/skills/remixOn.svg';
import remixOff from '@/public/assets/skills/remixOff.svg';
import nextOn from '@/public/assets/skills/nextjsOn.svg';
import nextOff from '@/public/assets/skills/nextjsOff.svg';
import rnOn from '@/public/assets/skills/reactOn.svg';
import rnOff from '@/public/assets/skills/reactOff.svg';
import twOn from '@/public/assets/skills/tailwindcssOn.svg';
import twOff from '@/public/assets/skills/tailwindcssOff.svg';
import supaOn from '@/public/assets/skills/supabaseOn.svg';
import supaOff from '@/public/assets/skills/supabaseOff.svg';
const ICON_BASE_URL = 'https://simpleicons.org/icons/';
export const Skills_Data = [
  {
    id: 1,
    cover: htmlOff,
    hoverCover: htmlOn,
    title: 'HTML',
    description: [
      '기본적인 HTML 구조와 문서 타입 선언을 이해하고 있어요.',
      '시멘틱 태그를 활용하여 웹 접근성을 고려한 마크업을 할 수 있어요.',
      'meta 태그를 활용하여 SEO 최적화를 할 수 있어요.',
    ],
    hot: false,
  },
  {
    id: 2,
    cover: cssOff,
    hoverCover: cssOn,
    title: 'CSS',
    description: [
      '선택자(Selector)를 활용하여 원하는 요소를 스타일링할 수 있어요',
      'Box Model을 이해하고 레이아웃을 구성할 수 있어요',
      'Flexbox와 Grid를 활용하여 반응형 레이아웃을 만들 수 있어요',
      'Position, Display 속성을 활용하여 요소를 배치할 수 있어요',
      'Media Query를 활용한 반응형 디자인을 구현할 수 있어요',
      'CSS 변수와 애니메이션을 활용할 수 있어요',
    ],
    hot: false,
  },
  {
    id: 3,
    cover: jsOff,
    hoverCover: jsOn,
    title: 'JavaScript',
    description: [
      '변수, 데이터 타입, 연산자 등 기본 문법을 이해하고 있어요',
      '함수, 스코프를 활용할 수 있어요',
      '배열과 객체의 메서드를 활용할 수 있어요',
      'DOM 조작과 이벤트 처리를 할 수 있어요',
      '비동기 처리(Promise, async/await)를 이해하고 있어요',
      'ES6+ 문법(화살표 함수, 구조 분해, 스프레드 등)을 활용할 수 있어요',
      '로컬 스토리지, 쿠키를 활용한 데이터 관리를 할 수 있어요',
      'API 통신과 JSON 데이터를 다룰 수 있어요',
    ],
    hot: false,
  },
  {
    id: 4,
    cover: tsOff,
    hoverCover: tsOn,
    title: 'TypeScript',
    description: [
      '기본 타입과 타입 추론을 이해하고 활용할 수 있어요',
      '인터페이스와 타입 별칭을 활용하여 타입을 정의할 수 있어요',
      '제네릭을 활용하여 재사용 가능한 타입을 만들 수 있어요',
      '유니온/인터섹션 타입을 활용할 수 있어요',
      '타입 가드를 활용한 타입 좁히기를 할 수 있어요',
      'enum과 as const를 적절히 활용할 수 있어요',
      'tsconfig.json 설정을 이해하고 프로젝트에 맞게 구성할 수 있어요',
    ],
    hot: true,
  },
  {
    id: 5,
    cover: remixOff,
    hoverCover: remixOn,
    title: 'React/Remix',
    description: [
      '컴포넌트 생명주기와 훅(useState, useEffect 등)을 활용할 수 있어요',
      '컴포넌트 설계와 상태 관리 전략을 구현할 수 있어요',
      'React Query, SWR 등을 활용한 서버 상태 관리를 할 수 있어요',
      'Remix의 라우팅 시스템과 중첩 라우팅을 구현할 수 있어요',
      'loader와 action을 활용한 데이터 처리를 할 수 있어요',
      'ErrorBoundary와 CatchBoundary로 에러 처리를 할 수 있어요',
      'Form과 액션을 활용한 폼 처리를 구현할 수 있어요',
      'SSR과 CSR의 차이를 이해하고 적절히 활용할 수 있어요',
      'Web Vitals와 성능 최적화를 고려한 개발을 할 수 있어요',
    ],
    hot: true,
  },
  {
    id: 6,
    cover: nextOff,
    hoverCover: nextOn,
    title: 'Next.js(v14)',
    description: [
      'App Router와 Server Components를 활용할 수 있어요',
      'Server Actions를 통한 폼 처리와 데이터 변경을 구현할 수 있어요',
      'Route Handlers를 활용한 API 엔드포인트를 구현할 수 있어요',
      'Parallel Routes와 Intercepting Routes를 활용할 수 있어요',
      'Next.js 캐싱 전략(Full Route Cache, Router Cache, Data Cache)을 이해하고 있어요',
      'Middleware를 활용한 인증/인가를 구현할 수 있어요',
    ],
    hot: true,
  },
  {
    id: 7,
    cover: rnOff,
    hoverCover: rnOn,
    title: 'ReactNative',
    description: [
      'React Native의 기본 컴포넌트와 API를 활용할 수 있어요',
      'Expo SDK와 EAS(Expo Application Services)를 활용할 수 있어요',
      '네이티브 기능(카메라, 위치, 알림 등)을 구현할 수 있어요',
      '크로스 플랫폼 UI/UX를 구현하고 플랫폼별 최적화를 할 수 있어요',
    ],
    hot: false,
  },
  {
    id: 8,
    cover: twOff,
    hoverCover: twOn,
    title: 'TailwindCSS',
    description: [
      'Tailwind의 유틸리티 클래스를 활용하여 반응형 디자인을 구현할 수 있어요',
      'Tailwind 컨벤션을 활용한 일관된 디자인 시스템을 구축할 수 있어요',
      'custom 설정(theme, plugin)을 통해 프로젝트에 맞는 스타일을 확장할 수 있어요',
      '@apply와 @layer를 활용한 컴포넌트 스타일을 구현할 수 있어요',
      'JIT(Just-In-Time) 컴파일러의 동작 방식을 이해하고 있어요',
      'dark mode와 테마 전환을 구현할 수 있어요',
    ],
    hot: true,
  },

  {
    id: 9,
    cover: supaOff,
    hoverCover: supaOn,
    title: 'supabase',
    description: [
      'Supabase 클라이언트를 설정하고 데이터베이스 연결을 관리할 수 있어요',
      'Row Level Security(RLS)를 활용한 보안 정책을 구현할 수 있어요',
      'Auth를 활용한 사용자 인증과 소셜 로그인을 구현할 수 있어요',
      'Realtime 구독을 통한 실시간 데이터 동기화를 구현할 수 있어요',
      'Storage를 활용한 파일 업로드와 관리를 할 수 있어요',
      'Edge Functions를 활용한 서버리스 함수를 구현할 수 있어요',
      'PostgreSQL의 고급 기능(Full Text Search, JSON 등)을 활용할 수 있어요',
    ],
    hot: true,
  },
];
