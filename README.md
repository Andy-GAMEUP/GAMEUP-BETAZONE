# GAMEUP-BETAZONE

웹게임 베타존 - 개발자들이 웹게임을 올리고 유료화 결제까지 베타테스트할 수 있는 플랫폼

## 프로젝트 구조

```
GAMEUP-BETAZONE/
├── client/              # 프론트엔드 (React + Vite + TypeScript)
│   ├── src/
│   │   ├── components/  # 재사용 가능한 컴포넌트
│   │   ├── pages/       # 페이지 컴포넌트
│   │   ├── services/    # API 서비스
│   │   ├── types/       # TypeScript 타입 정의
│   │   └── styles/      # 스타일 파일
│   └── package.json
├── server/              # 백엔드 (Node.js + Express)
│   ├── src/
│   │   ├── routes/      # API 라우트
│   │   ├── controllers/ # 컨트롤러
│   │   ├── models/      # 데이터 모델
│   │   ├── middleware/  # 미들웨어
│   │   ├── config/      # 설정 파일
│   │   └── services/    # 비즈니스 로직
│   └── package.json
└── shared/              # 공유 타입 및 유틸리티
    └── types/

```

## 주요 기능

- 웹게임 업로드 및 관리
- 유료/무료 게임 설정
- 결제 시스템 통합
- 베타 테스터 피드백 수집
- 개발자 대시보드 (통계, 수익 등)

## 기술 스택

### 프론트엔드
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router

### 백엔드
- Node.js
- Express
- TypeScript
- MongoDB (예정)
- 미정 (결제)

## 시작하기

### 필요 사항
- Node.js (v18 이상)
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 개별 실행

```bash
# 프론트엔드만 실행
npm run dev:client

# 백엔드만 실행
npm run dev:server
```

## 환경 변수

server/.env 파일을 생성하고 다음 변수들을 설정하세요:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/gameup-betazone
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```
