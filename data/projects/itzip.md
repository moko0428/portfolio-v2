## 프로젝트 개요

![itzip_cover](https://portfolio-moko-s3-bucket.s3.us-east-1.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%BA%E1%84%8C%E1%85%B5%E1%86%B8_%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png)

> 개발자 취준생을 위한 종합 취업 준비 플랫폼으로, 블로그, 학습, 구인 정보 등을 제공하는 웹 서비스.

- 팀 명 : Itzip
- 진행 기간 : 2024.06 ~ 진행 중
- 멤버 : FE 4명, BE 5명, DE 4명

## 기술 스택

- TypeScript
- Next.js
- Tailwind CSS
- Jotai
- Zod

## 내가 기여한 부분

- 사용자 인증 플로우 구현
- 사용자 프로필 관리 시스템 구현
- 토큰 기반 자동 인증 갱신 시스템 구현

### 1. 사용자 인증 플로우 구현

![itzip_cover](https://portfolio-moko-s3-bucket.s3.us-east-1.amazonaws.com/itzip.gif)

- 사용자는 이메일, 비빌번호를 사용하여 회원가입/로그인을 할 수 있습니다.
- 회원가입을 위해서는 이메일 인증코드가 필요합니다.
- formData는 Zod를 사용하여 유효성 검사를 진행합니다.
- 약관 동의를 모두 체크해야 회원가입을 진행할 수 있습니다.

### 2. 사용자 프로필 관리 시스템 구현

- 사용자는 프로필 정보를 수정할 수 있습니다.
- 닉네임은 회원가입 시 설정하지 않고 랜덤 문자열을 사용하게 됩니다.
- 닉네임은 프로필 수정을 통해 중복되지 않도록 유효성 검사를 진행 후 수정할 수 있습니다.
- 프로필 수정 시 이미지 업로드를 통해 프로필 이미지를 수정할 수 있습니다.
- 프로필 이미지는 클라이언트에서 업로드 후 변경하기 버튼을 누르면 서버에 이미지가 전달됩니다.
- 프로필 이미지는 서버에서 저장되고 클라이언트에서 이미지 주소를 받아와 프로필 이미지를 업로드합니다.
- 비밀번호를 재설정할 수 있습니다.

### 3. 토큰 기반 자동 인증 갱신 시스템 구현

- interceptor의 헤더 noAuth를 사용하여 각 요청마다 인증이 필요한 경우, 필요하지 않는 경우를 구분합니다.
- 유저가 로그인 시 토큰이 발급되고 토큰(액세스, 리프레시 토큰)은 쿠키에 저장됩니다.
- 토큰은 useTokenStore 훅에서 jotai store에 저장되고 상태를 관리합니다.

![itzip_cover](https://portfolio-moko-s3-bucket.s3.us-east-1.amazonaws.com/projects_image1.png)

- isRefreshing 플래그를 사용하여 동시에 여러 요청이 토큰 갱신을 시도하는 것을 방지합니다.
- 토큰 갱신 요청이 완료되면 플래그를 false로 변경하여 다시 요청이 들어왔을 때 토큰 갱신을 시도할 수 있도록 합니다.

![itzip_cover](https://portfolio-moko-s3-bucket.s3.us-east-1.amazonaws.com/projects_image2.png)

- 토큰 갱신 중에 들어오는 요청들을 refreshSubscribers 배열에 저장하여 토큰 갱신 완료 후 요청들을 처리합니다.

### 트러블 슈팅

**[문제 상황 1] - 쿠키요?**

백엔드 담당자 : "토큰은 쿠키에 살포시 넣어드릴게요."

이 방식은 별도의 토큰 관리 없이 인증이 필요한 요청을 할 수 있어 프론트엔드 입장에서는 편리하지만, 처음에는 익숙하지 않아 이해하기 어려웠고, 계속해서 403(접근 권한 불일치) 에러가 발생했습니다.

결국, 백엔드 담당자와 협의하여 이전의 방법보다 조금 번거롭지만, 제 입장에서는 더 쉬운 방법을 선택하게 되었습니다.

**[문제 상황 2] - 토큰을 어디에 저장하고 관리할 것인가?**

1의 상황에서 결국 토큰을 받아서 관리하기로 했으나,
이 토큰을 관리하기 위해 어디에 저장해야할까에 고민이 생겼습니다.

1. 로컬스토리지
2. 쿠키

이 두 가지 방법이 있었습니다.

허나 제가 이때까지의 지식으로는 next.js는 서버, 클라이언트 사이드가 존재하고, 로컬스토리지는 클라이언트, 쿠키는 서버 사이드에서 동작하는 것으로 알고 있었습니다.

**[해결 방법]**

찾아본 결과 로컬스토리지는 클라이언트 사이드에서만 동작하지만,
쿠키는 `js-cookie` 라이브러리를 통해 서버, 클라이언트 모두 접근이 가능하다는 것을 알게 되었고, 토큰을 쿠키에 저장하여 인증처리를 할 수 있게 되었습니다.

**[문제 상황 3] - 토큰 동기화 실패**

페이지를 새로고침 시 jotai store에 저장된 토큰이 사라지는 상황이 발생하였습니다.
jotai store에 저장된 토큰이 사라지게 될 경우 유저는 로그인 상태가 유지 되지 않았고, 토큰이 필요한 컴포넌트들이 정상적으로 동작하지 않았습니다.

```tsx
'use client';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

import { setAccessTokenAtom, setRefreshTokenAtom } from '@/store/useTokenStore';

const TokenSync: React.FC = () => {
  const [, setAccessToken] = useAtom(setAccessTokenAtom);
  const [, setRefreshToken] = useAtom(setRefreshTokenAtom);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken && refreshToken) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    }
  }, [setAccessToken, setRefreshToken]);

  return null;
};

export default TokenSync;
```

**[해결 방법]**

tokenSync 컴포넌트를 통해 루트 레이아웃에 추가하여 페이지를 새로고침하여도 토큰이 jotai store에서 사라지지 않도록 쿠키와 jotai store를 동기화하였습니다.
