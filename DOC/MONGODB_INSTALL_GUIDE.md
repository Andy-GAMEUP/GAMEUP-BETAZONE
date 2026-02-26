# MongoDB 수동 설치 가이드

## 방법 1: Homebrew를 통한 설치 (권장)

### 1.1 Homebrew 설치

**터미널에서 실행:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**설치 후 PATH 설정 (Apple Silicon Mac의 경우):**
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

**Intel Mac의 경우:**
```bash
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

**Homebrew 설치 확인:**
```bash
brew --version
```

### 1.2 MongoDB 설치

```bash
# MongoDB tap 추가
brew tap mongodb/brew

# MongoDB Community Edition 설치
brew install mongodb-community@7.0
```

### 1.3 MongoDB 실행

**백그라운드 서비스로 시작:**
```bash
brew services start mongodb-community@7.0
```

**서비스 상태 확인:**
```bash
brew services list | grep mongodb
```

**수동 실행 (포그라운드):**
```bash
mongod --config /opt/homebrew/etc/mongod.conf
```

### 1.4 MongoDB 접속 테스트

```bash
mongosh
```

성공하면 다음과 같이 표시됩니다:
```
Current Mongosh Log ID: xxxxx
Connecting to: mongodb://127.0.0.1:27017/
Using MongoDB: 7.0.x
Using Mongosh: 2.x.x
```

**종료:**
```
exit
```

---

## 방법 2: Docker를 사용한 설치

### 2.1 Docker 설치 확인

```bash
docker --version
```

Docker가 없다면 https://www.docker.com/products/docker-desktop/ 에서 다운로드

### 2.2 MongoDB 컨테이너 실행

**컨테이너 생성 및 실행:**
```bash
docker run -d \
  --name gameup-mongodb \
  -p 27017:27017 \
  -v ~/mongodb-data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin123 \
  -e MONGO_INITDB_DATABASE=gameup-betazone \
  mongo:7.0
```

**컨테이너 상태 확인:**
```bash
docker ps
```

**로그 확인:**
```bash
docker logs gameup-mongodb
```

**MongoDB 접속:**
```bash
docker exec -it gameup-mongodb mongosh -u admin -p admin123
```

### 2.3 .env 파일 설정 (Docker 사용 시)

```env
MONGODB_URI=mongodb://admin:admin123@localhost:27017/gameup-betazone?authSource=admin
```

### 2.4 Docker 컨테이너 관리

**중지:**
```bash
docker stop gameup-mongodb
```

**시작:**
```bash
docker start gameup-mongodb
```

**재시작:**
```bash
docker restart gameup-mongodb
```

**삭제 (데이터 보존):**
```bash
docker rm -f gameup-mongodb
```

---

## 방법 3: MongoDB Atlas (클라우드, 무료)

### 3.1 계정 생성
1. https://www.mongodb.com/cloud/atlas/register 방문
2. Google 계정 또는 이메일로 가입
3. 무료 M0 플랜 선택

### 3.2 클러스터 생성

1. **"Build a Database" 클릭**
2. **"Free" (M0 Shared) 선택**
3. **Provider & Region 선택:**
   - Provider: AWS
   - Region: Seoul (ap-northeast-2) 또는 Tokyo (ap-northeast-1)
4. **Cluster Name:** Cluster0 (기본값)
5. **"Create" 클릭**

### 3.3 데이터베이스 사용자 생성

1. **Security > Database Access 메뉴**
2. **"Add New Database User" 클릭**
3. 설정:
   ```
   Username: gameup-admin
   Password: (안전한 비밀번호 생성 및 복사)
   Database User Privileges: Read and write to any database
   ```
4. **"Add User" 클릭**

### 3.4 네트워크 액세스 설정

1. **Security > Network Access 메뉴**
2. **"Add IP Address" 클릭**
3. **"Allow Access from Anywhere" 선택** (개발용)
   - IP: 0.0.0.0/0
4. **"Confirm" 클릭**

> ⚠️ 프로덕션에서는 특정 IP만 허용하세요!

### 3.5 연결 문자열 가져오기

1. **Database 메뉴로 돌아가기**
2. **"Connect" 버튼 클릭**
3. **"Drivers" 선택**
4. **Driver: Node.js, Version: 5.5 or later**
5. **연결 문자열 복사**

예시:
```
mongodb+srv://gameup-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 3.6 .env 파일 업데이트

server/.env 파일에 추가:
```env
MONGODB_URI=mongodb+srv://gameup-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/gameup-betazone?retryWrites=true&w=majority
```

> 중요: `<password>` 부분을 실제 비밀번호로 변경하세요!

### 3.7 연결 테스트

프로젝트에서 서버 실행:
```bash
cd /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE
npm run dev:server
```

성공 메시지 확인:
```
MongoDB connected successfully
Server is running on port 5000
```

---

## 방법 4: 수동 바이너리 설치 (고급)

### 4.1 MongoDB Community Edition 다운로드

**다운로드 페이지:**
https://www.mongodb.com/try/download/community

**선택:**
- Version: 7.0.x (Latest)
- Platform: macOS
- Package: TGZ

### 4.2 압축 해제 및 설치

```bash
# 다운로드 폴더로 이동
cd ~/Downloads

# 압축 해제 (파일명은 다를 수 있음)
tar -zxvf mongodb-macos-*-7.0.*.tgz

# 홈 디렉토리로 이동
sudo mv mongodb-macos-*-7.0.* /usr/local/mongodb

# PATH 추가
echo 'export PATH=/usr/local/mongodb/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### 4.3 데이터 디렉토리 생성

```bash
# MongoDB 데이터 저장 디렉토리
sudo mkdir -p /usr/local/var/mongodb

# 로그 디렉토리
sudo mkdir -p /usr/local/var/log/mongodb

# 권한 설정
sudo chown -R $(whoami) /usr/local/var/mongodb
sudo chown -R $(whoami) /usr/local/var/log/mongodb
```

### 4.4 설정 파일 생성

```bash
sudo nano /usr/local/etc/mongod.conf
```

내용:
```yaml
systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /usr/local/var/mongodb
net:
  bindIp: 127.0.0.1
  port: 27017
```

### 4.5 MongoDB 실행

```bash
mongod --config /usr/local/etc/mongod.conf
```

---

## ✅ 설치 확인

### 모든 방법 공통

**1. MongoDB 프로세스 확인:**
```bash
ps aux | grep mongod
```

**2. 포트 확인:**
```bash
lsof -i :27017
```

**3. MongoDB 쉘 접속:**
```bash
mongosh
```

**4. 테스트 데이터 삽입:**
```javascript
use gameup-betazone
db.test.insertOne({ message: "Hello GAMEUP!" })
db.test.find()
exit
```

---

## 🔧 문제 해결

### MongoDB가 시작되지 않을 때

**1. 포트 충돌 확인:**
```bash
lsof -i :27017
# 프로세스가 있다면 종료
kill -9 <PID>
```

**2. 데이터베이스 복구:**
```bash
mongod --repair --dbpath /usr/local/var/mongodb
```

**3. 로그 확인:**
```bash
tail -f /usr/local/var/log/mongodb/mongo.log
```

### Homebrew 설치 오류

**1. Xcode Command Line Tools 설치:**
```bash
xcode-select --install
```

**2. Homebrew 재설치:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### MongoDB 연결 오류

**1. 연결 문자열 확인:**
```bash
# .env 파일 확인
cat /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE/server/.env
```

**2. MongoDB 상태 확인:**
```bash
# Homebrew 서비스
brew services list

# Docker
docker ps

# 프로세스
ps aux | grep mongod
```

---

## 💡 추천 방법

### 개발 환경
- **로컬 머신**: Homebrew 또는 Docker
- **간편함 우선**: MongoDB Atlas (클라우드)
- **제어 필요**: 수동 바이너리 설치

### 장단점

| 방법 | 장점 | 단점 |
|------|------|------|
| Homebrew | 간편한 관리, 자동 업데이트 | Homebrew 설치 필요 |
| Docker | 격리된 환경, 이식성 높음 | Docker 설치 필요 |
| Atlas | 설치 불필요, 무료, 백업 자동 | 인터넷 연결 필요 |
| 수동 설치 | 완전한 제어 | 관리 복잡, 수동 업데이트 |

---

## 🚀 다음 단계

설치 완료 후:

1. **.env 파일 생성** (아직 안했다면)
2. **개발 서버 실행:**
   ```bash
   cd /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE
   npm run dev
   ```
3. **API 테스트:**
   ```bash
   curl http://localhost:5000/api/health
   ```

---

## 📞 도움이 더 필요하시다면

1. 어떤 방법을 선택하셨는지 알려주세요
2. 발생한 오류 메시지를 공유해주세요
3. 설치 과정에서 막힌 부분을 구체적으로 설명해주세요
