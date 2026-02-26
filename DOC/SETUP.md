# GAMEUP-BETAZONE 설정 가이드

## 1. Node.js 설치

### macOS (Homebrew 사용)
```bash
# Homebrew 설치 (이미 설치되어 있다면 스킵)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js 설치
brew install node
```

### 또는 공식 웹사이트에서 다운로드
https://nodejs.org/ 에서 LTS 버전 다운로드 및 설치

## 2. 프로젝트 의존성 설치

```bash
# 프로젝트 루트에서
npm install

# 또는 각각 설치
cd client && npm install
cd ../server && npm install
```

## 3. 환경 변수 설정

`server/.env` 파일을 생성하고 다음 내용을 추가:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/gameup-betazone
JWT_SECRET=gameup-betazone-secret-key-change-this-in-production
STRIPE_SECRET_KEY=sk_test_your_stripe_key_here
```

## 4. MongoDB 설치 및 실행

### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### 또는 Docker 사용
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 5. 개발 서버 실행

### 전체 실행 (프론트엔드 + 백엔드)
```bash
npm run dev
```

### 개별 실행
```bash
# 프론트엔드만
npm run dev:client

# 백엔드만
npm run dev:server
```

## 6. 접속 확인

- 프론트엔드: http://localhost:3000
- 백엔드 API: http://localhost:5000/api/health

## 프로젝트 구조

```
GAMEUP-BETAZONE/
├── client/                 # React 프론트엔드
│   ├── src/
│   │   ├── components/    # 재사용 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── services/      # API 서비스
│   │   ├── types/         # TypeScript 타입
│   │   └── styles/        # 스타일 파일
│   └── package.json
├── server/                # Express 백엔드
│   ├── src/
│   │   ├── routes/        # API 라우트
│   │   ├── controllers/   # 컨트롤러
│   │   ├── models/        # MongoDB 모델
│   │   ├── middleware/    # 미들웨어
│   │   ├── config/        # 설정 파일
│   │   └── services/      # 비즈니스 로직
│   └── package.json
└── shared/                # 공유 타입
    └── types/

```

## 주요 기능

- ✅ 웹게임 업로드 및 관리
- ✅ 유료/무료 게임 설정
- ✅ 결제 시스템 (Stripe)
- ✅ 사용자 인증 (JWT)
- ✅ 개발자 대시보드
- ✅ 게임 피드백 시스템

## 다음 단계

1. MongoDB 모델과 컨트롤러 구현 완성
2. 파일 업로드 기능 구현
3. 인증 미들웨어 구현
4. Stripe 결제 통합
5. 프론트엔드 UI/UX 개선
