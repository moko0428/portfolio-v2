## 프로젝트 개요

<img src="https://portfolio-moko-s3-bucket.s3.us-east-1.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%BA%E1%84%8C%E1%85%B5%E1%86%B8_%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png" alt="itzip_cover" />

> 설명

- 팀 명 : 독수리 오형제
- 진행 기간 : 2024.07 ~ 2024.08
- 멤버 : FE 2명, BE 2명, DE(PM) 1명

## 기술 스택

- JavaScript
- React-Native
- Expo
- ReactContextAPI

## 내가 기여한 부분

- 사용자 인증 플로우 구현
- 사용자 프로필 관리 시스템 구현

### 1. 사용자 인증 플로우 구현

<img src="https://portfolio-moko-s3-bucket.s3.us-east-1.amazonaws.com/itzip.gif" alt="itzip_cover" />

- 사용자는 이메일, 비빌번호를 사용하여 회원가입/로그인을 할 수 있습니다.
- 회원가입을 위해서는 이메일 인증코드가 필요합니다.
- formData는 Zod를 사용하여 유효성 검사를 진행합니다.

### 2. 토큰 기반 자동 인증 갱신 시스템 구현

- interceptor의 헤더 noAuth를 사용하여 각 요청마다 인증이 필요한 경우, 필요하지 않는 경우를 구분합니다.
- 유저가 로그인 시 토큰이 발급되고 토큰(액세스, 리프레시 토큰)은 쿠키에 저장됩니다.
- 토큰은 useTokenStore 훅에서 jotai store에 저장되고 상태를 관리합니다.

<img src="https://portfolio-moko-s3-bucket.s3.us-east-1.amazonaws.com/projects_image1.png" alt="itzip_cover" />
- isRefreshing 플래그를 사용하여 동시에 여러 요청이 토큰 갱신을 시도하는 것을 방지합니다.
- 토큰 갱신 요청이 완료되면 플래그를 false로 변경하여 다시 요청이 들어왔을 때 토큰 갱신을 시도할 수 있도록 합니다.

<img src="https://portfolio-moko-s3-bucket.s3.us-east-1.amazonaws.com/projects_image2.png" alt="itzip_cover" />

- 토큰 갱신 중에 들어오는 요청들을 refreshSubscribers 배열에 저장하여 토큰 갱신 완료 후 요청들을 처리합니다.

### 트러블 슈팅

[문제 상황] - 토큰 동기화 실패

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

[해결 방법]

tokenSync 컴포넌트를 통해 루트 레이아웃에 추가하여 페이지를 새로고침하여도 토큰이 jotai store에서 사라지지 않도록 쿠키와 jotai store를 동기화하였습니다.

[문제 상황] - interceptor는 서버에서 동작하는가?
