# 포트 변경 안내

## 문제: macOS Control Center가 포트 5000 사용 중

macOS Monterey 이상에서는 Control Center가 포트 5000을 사용합니다.
따라서 서버 포트를 5001로 변경해야 합니다.

## 해결 방법

### 1. .env 파일 수정

```bash
nano /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE/server/.env
```

**PORT를 5001로 변경:**
```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/gameup-betazone
JWT_SECRET=gameup-betazone-jwt-secret-key-change-in-production-2024
JWT_EXPIRES_IN=7d
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
CLIENT_URL=http://localhost:3000
```

저장: `Ctrl + O` → `Enter` → `Ctrl + X`

### 2. Vite 프록시 설정도 업데이트

클라이언트의 API 프록시 설정도 변경해야 합니다.

파일: `client/vite.config.ts`

변경 전:
```typescript
proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true
  }
}
```

변경 후:
```typescript
proxy: {
  '/api': {
    target: 'http://localhost:5001',
    changeOrigin: true
  }
}
```

### 3. 서버 실행

```bash
cd /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE
npm run dev
```

## 또는 .env 파일 완전히 새로 생성

터미널에서 다음 명령어 실행:

```bash
cat > /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE/server/.env << 'EOF'
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/gameup-betazone
JWT_SECRET=gameup-betazone-jwt-secret-key-change-in-production-2024
JWT_EXPIRES_IN=7d
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
MAX_FILE_SIZE=100000000
CLIENT_URL=http://localhost:3000
EOF
```
