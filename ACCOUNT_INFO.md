# 🔐 GAMEUP-BETAZONE 계정 정보

생성 일시: 2026-02-13

---

## 📋 사용 가능한 계정 목록

### 1. 👑 Admin 계정 (관리자)
```
이메일: admin@gameup.com
비밀번호: admin123456
역할: developer
```
**용도**: 
- 플랫폼 관리
- 전체 게임 관리
- 개발자 대시보드 접근

---

### 2. 👨‍💻 Developer 테스트 계정
```
이메일: developer@test.com
비밀번호: test123456
역할: developer
```
**용도**: 
- 게임 업로드 및 관리
- 대시보드 테스트
- 수익 관리

---

### 3. 🎮 Player 테스트 계정
```
이메일: player@test.com
비밀번호: test123456
역할: player
```
**용도**: 
- 게임 플레이
- 결제 테스트
- 리뷰 작성

---

## 🚀 빠른 로그인 방법

### 방법 1: 로그인 페이지에서 버튼 클릭
1. http://localhost:3000/login 접속
2. "테스트 계정으로 로그인" 섹션에서 원하는 버튼 클릭
   - **Admin** (보라색)
   - **개발자** (파란색)
   - **플레이어** (초록색)
3. 자동으로 이메일과 비밀번호가 입력됨
4. "로그인" 버튼 클릭

### 방법 2: 수동 입력
1. http://localhost:3000/login 접속
2. 위의 계정 정보 중 하나를 선택
3. 이메일과 비밀번호 입력
4. "로그인" 버튼 클릭

---

## 🎯 로그인 후 이동 페이지

### Developer 계정 (admin, developer@test.com)
- ✅ 자동으로 `/dashboard`로 이동
- 개발자 대시보드 접근
- 게임 업로드 및 관리 가능

### Player 계정 (player@test.com)
- ✅ 자동으로 `/games`로 이동
- 게임 목록 보기
- 게임 플레이 및 구매

---

## 🔧 계정 관리 스크립트

### Admin 계정 생성/재설정
```bash
cd server
npm run create-admin
```
- Admin 계정이 없으면 새로 생성
- 이미 있으면 비밀번호를 `admin123456`으로 재설정

### 테스트 계정 생성/재설정
```bash
cd server
npm run create-test-users
```
- Developer와 Player 테스트 계정 생성
- 이미 있으면 비밀번호를 `test123456`으로 재설정

---

## 📝 계정 생성 로직

### 위치
```
server/src/scripts/
├── createAdminUser.ts      # Admin 계정 생성
└── createTestUsers.ts      # 테스트 계정 생성
```

### 보안
- ✅ bcrypt로 비밀번호 해시화
- ✅ MongoDB에 암호화된 형태로 저장
- ✅ JWT 토큰 기반 인증
- ✅ 환경변수 (.env)에서 JWT_SECRET 사용

---

## 🎨 로그인 페이지 UI

### 테스트 계정 버튼
- **Admin**: 보라색 배경 (purple-50/purple-100)
- **개발자**: 파란색 배경 (blue-50/blue-100)
- **플레이어**: 초록색 배경 (green-50/green-100)

### 레이아웃
- 3개 버튼이 가로로 나란히 배치 (grid-cols-3)
- 반응형 디자인
- 호버 효과

---

## 🔄 계정 추가 방법

### 1. 데이터베이스에 직접 추가
```bash
cd server
npm run create-admin  # 또는 create-test-users
```

### 2. 회원가입 페이지 사용
```
http://localhost:3000/register
```
- 이메일, 사용자명, 비밀번호 입력
- 역할 선택 (개발자/플레이어)
- 회원가입 완료

### 3. 스크립트 수정
`server/src/scripts/createTestUsers.ts` 파일에 새 계정 추가:
```typescript
const testUsers = [
  {
    email: 'newuser@example.com',
    username: 'newuser',
    password: 'password123',
    role: 'developer' as const
  },
  // ...
]
```

---

## ⚠️ 주의사항

### 보안
- 🚨 **프로덕션 환경에서는 절대 이런 간단한 비밀번호 사용 금지**
- 🚨 테스트 계정 버튼은 **개발 환경에서만** 사용
- 🚨 배포 시 테스트 계정 버튼 제거 또는 숨김 처리 필요

### 비밀번호 정책
현재 최소 요구사항:
- 최소 6자 이상
- 특수문자, 대문자 등 요구사항 없음 (추후 강화 필요)

### 세션 관리
- JWT 토큰 기반
- localStorage에 저장
- 로그아웃 시 토큰 제거

---

## 🧪 테스트 시나리오

### 시나리오 1: 개발자 워크플로우
1. Admin 또는 Developer 계정으로 로그인
2. 대시보드에서 통계 확인
3. "게임 업로드" 버튼 클릭
4. 게임 정보 입력 및 업로드
5. 대시보드에서 업데이트된 통계 확인

### 시나리오 2: 플레이어 워크플로우
1. Player 계정으로 로그인
2. 게임 목록 페이지에서 게임 검색
3. 게임 상세 페이지 접속
4. 게임 플레이 또는 구매
5. 리뷰 작성 (Phase 3)

### 시나리오 3: 역할 전환 테스트
1. Developer 계정으로 로그인 → `/dashboard` 확인
2. 로그아웃
3. Player 계정으로 로그인 → `/games` 확인
4. 각 역할별 접근 권한 확인

---

## 📊 현재 데이터베이스 상태

### Users 컬렉션
```
총 3개 계정:
1. admin@gameup.com (developer)
2. developer@test.com (developer)
3. player@test.com (player)
```

### 확인 방법
```bash
mongosh gameup-betazone
db.users.find().pretty()
```

---

## 🎯 다음 단계

### Phase 3-A: 게임 업로드 완성
- [ ] 게임 파일 업로드 기능
- [ ] 썸네일 이미지 업로드
- [ ] 게임 정보 입력 폼

### Phase 3-B: 대시보드 강화
- [ ] 게임 수정 기능
- [ ] 게임 삭제 기능
- [ ] 상태 변경 (임시저장 → 베타 → 출시)

### Phase 4: 결제 시스템
- [ ] Stripe 통합
- [ ] 결제 테스트 (Player 계정)
- [ ] 수익 분배 로직

---

## 🔗 관련 링크

- **로그인**: http://localhost:3000/login
- **회원가입**: http://localhost:3000/register
- **대시보드**: http://localhost:3000/dashboard (개발자 전용)
- **게임 목록**: http://localhost:3000/games

---

✅ **계정 설정 완료!**

이제 Admin 및 테스트 계정으로 로그인하여 플랫폼을 테스트할 수 있습니다.
