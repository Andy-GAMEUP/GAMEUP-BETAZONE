# Phase 1: 기본 인프라 설정 가이드

## 🔧 필수 수동 설정

### 1. 환경 변수 파일 생성 (.env)

#### 단계별 가이드

**1.1 터미널에서 .env 파일 생성**

```bash
# 서버 디렉토리로 이동
cd /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE/server

# .env 파일 생성 (nano 에디터 사용)
nano .env
```

**1.2 다음 내용을 복사하여 붙여넣기**

```env
# 서버 설정
PORT=5000
NODE_ENV=development

# MongoDB 연결 (로컬)
MONGODB_URI=mongodb://localhost:27017/gameup-betazone

# JWT 비밀 키 (프로덕션에서는 반드시 변경!)
JWT_SECRET=gameup-betazone-jwt-secret-key-change-in-production-2024

# JWT 만료 시간
JWT_EXPIRES_IN=7d

# Stripe 결제 (테스트 키)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# 파일 업로드 설정
MAX_FILE_SIZE=100000000
# 100MB in bytes

# 클라이언트 URL (CORS)
CLIENT_URL=http://localhost:3000
```

**1.3 파일 저장**
- nano 에디터: `Ctrl + O` (저장) → `Enter` → `Ctrl + X` (종료)
- vim 에디터: `ESC` → `:wq` → `Enter`

**1.4 파일 권한 설정 (보안)**

```bash
chmod 600 .env
```

**1.5 확인**

```bash
ls -la .env
cat .env
```

---

### 2. MongoDB 설치 및 설정

#### 방법 1: Homebrew 사용 (추천)

**2.1 MongoDB 설치**

```bash
# MongoDB tap 추가
brew tap mongodb/brew

# MongoDB Community Edition 설치
brew install mongodb-community@7.0
```

**2.2 MongoDB 서비스 시작**

```bash
# 백그라운드 서비스로 시작
brew services start mongodb-community@7.0

# 또는 포그라운드로 시작 (디버깅용)
mongod --config /opt/homebrew/etc/mongod.conf
```

**2.3 MongoDB 실행 확인**

```bash
# 서비스 상태 확인
brew services list | grep mongodb

# MongoDB 쉘 접속 테스트
mongosh
```

MongoDB 쉘이 열리면 성공입니다!
```
test>
```

나가기: `exit` 또는 `Ctrl + D`

**2.4 데이터베이스 생성 (선택 사항)**

```bash
mongosh

# 데이터베이스 사용 (없으면 자동 생성)
use gameup-betazone

# 테스트 데이터 삽입
db.test.insertOne({ message: "Hello GAMEUP BETAZONE!" })

# 확인
db.test.find()

# 종료
exit
```

---

#### 방법 2: Docker 사용 (대안)

**2.1 Docker 설치 확인**

```bash
docker --version
```

**2.2 MongoDB 컨테이너 실행**

```bash
# MongoDB 컨테이너 실행
docker run -d \
  --name gameup-mongodb \
  -p 27017:27017 \
  -v ~/mongodb-data:/data/db \
  -e MONGO_INITDB_DATABASE=gameup-betazone \
  mongo:7.0

# 실행 확인
docker ps

# 로그 확인
docker logs gameup-mongodb
```

**2.3 MongoDB 접속 테스트**

```bash
docker exec -it gameup-mongodb mongosh
```

**2.4 컨테이너 관리**

```bash
# 중지
docker stop gameup-mongodb

# 시작
docker start gameup-mongodb

# 삭제
docker rm -f gameup-mongodb
```

---

#### 방법 3: MongoDB Atlas (클라우드, 무료)

**3.1 계정 생성**
- https://www.mongodb.com/cloud/atlas/register 방문
- 무료 계정 생성 (M0 Sandbox)

**3.2 클러스터 생성**
- "Build a Database" 클릭
- "Free" 선택
- 리전 선택 (Asia Pacific - Seoul 권장)
- "Create" 클릭

**3.3 데이터베이스 사용자 생성**
- Username: `gameup-admin`
- Password: 안전한 비밀번호 생성
- "Create User" 클릭

**3.4 네트워크 액세스 설정**
- "Network Access" 메뉴
- "Add IP Address" 클릭
- "Allow Access from Anywhere" (개발용)
- "Confirm" 클릭

**3.5 연결 문자열 복사**
- "Database" 메뉴로 돌아가기
- "Connect" 클릭
- "Connect your application" 선택
- 연결 문자열 복사

예시:
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/gameup-betazone?retryWrites=true&w=majority
```

**3.6 .env 파일 업데이트**

```env
MONGODB_URI=mongodb+srv://gameup-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/gameup-betazone?retryWrites=true&w=majority
```

---

### 3. Stripe 계정 설정 (결제 기능)

#### 3.1 Stripe 계정 생성
- https://dashboard.stripe.com/register 방문
- 계정 생성

#### 3.2 테스트 API 키 가져오기
- 대시보드 → "Developers" → "API keys"
- "Secret key" 복사 (sk_test_로 시작)
- "Publishable key" 복사 (pk_test_로 시작)

#### 3.3 .env 파일에 추가

```env
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_SECRET_KEY
STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_STRIPE_PUBLISHABLE_KEY
```

---

## ✅ 설정 확인 체크리스트

### 환경 변수 (.env)
- [ ] server/.env 파일 생성
- [ ] PORT 설정 (5000)
- [ ] MONGODB_URI 설정
- [ ] JWT_SECRET 설정
- [ ] 파일 권한 설정 (600)

### MongoDB
- [ ] MongoDB 설치 완료
- [ ] MongoDB 서비스 실행 중
- [ ] mongosh 접속 테스트 성공
- [ ] gameup-betazone 데이터베이스 생성

### Stripe (선택 사항)
- [ ] Stripe 계정 생성
- [ ] 테스트 API 키 발급
- [ ] .env 파일에 키 추가

---

## 🚀 설정 완료 후 테스트

### 1. 개발 서버 실행

```bash
# 프로젝트 루트로 이동
cd /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE

# 전체 개발 서버 실행 (프론트엔드 + 백엔드)
npm run dev

# 또는 개별 실행
npm run dev:server  # 백엔드만
npm run dev:client  # 프론트엔드만
```

### 2. 서버 확인

```bash
# 새 터미널에서
curl http://localhost:5000/api/health
```

예상 응답:
```json
{"status":"ok","message":"Server is running"}
```

### 3. MongoDB 연결 확인

서버 로그에서 다음 메시지 확인:
```
MongoDB connected successfully
Server is running on port 5000
```

---

## 🔧 문제 해결

### MongoDB 연결 실패
```bash
# MongoDB 상태 확인
brew services list | grep mongodb

# 로그 확인
tail -f /opt/homebrew/var/log/mongodb/mongo.log

# 재시작
brew services restart mongodb-community@7.0
```

### 포트 이미 사용 중
```bash
# 5000 포트 사용 중인 프로세스 확인
lsof -i :5000

# 프로세스 종료
kill -9 <PID>
```

### .env 파일을 읽지 못함
```bash
# 파일 위치 확인
ls -la /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE/server/.env

# 권한 확인
chmod 600 /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE/server/.env
```

---

## 📝 다음 단계

설정이 완료되면 다음 작업을 진행합니다:

1. ✅ JWT 인증 미들웨어 구현
2. ✅ 회원가입 API 구현
3. ✅ 로그인 API 구현
4. ✅ 기본 UI 컴포넌트 구현

---

## 💡 추가 팁

### 환경 변수 관리
- **절대** .env 파일을 Git에 커밋하지 마세요
- .env.example 파일로 템플릿 제공
- 프로덕션에서는 환경 변수를 안전하게 관리

### MongoDB 백업
```bash
# 데이터베이스 백업
mongodump --db gameup-betazone --out ~/mongodb-backup/

# 복원
mongorestore --db gameup-betazone ~/mongodb-backup/gameup-betazone/
```

### 개발 팁
- MongoDB Compass 설치 (GUI 도구)
- Postman/Insomnia로 API 테스트
- VS Code MongoDB 확장 프로그램 사용
