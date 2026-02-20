# 🚀 서버 재부팅 및 테스트 가이드

재부팅 완료 일시: 2026-02-19

---

## ✅ 서버 상태

### Frontend (Vite)
```
✅ Local:   http://localhost:3000/
✅ Network: use --host to expose
✅ Ready in 732 ms
```

### Backend (Express)
```
✅ Server is running on port 5001
✅ MongoDB connected successfully
```

### Session ID
```
cmd_2uj25
```

---

## 📋 테스트 체크리스트

### 1️⃣ 메인 홈페이지 (/)

**URL**: http://localhost:3000

#### Hero Section
- [ ] 배경 이미지 로드
- [ ] "게임의 미래를 함께 만들어요" Badge 표시
- [ ] 그라데이션 타이틀: "베타 테스트의 새로운 기준"
- [ ] "무료로 시작하기" 버튼 → `/register`
- [ ] "게임 둘러보기" 버튼 → `/games`

#### Featured Games (3개)
- [ ] Cyber Nexus 카드 표시 (액션 RPG, 진행중)
- [ ] Stellar Warfare 카드 표시 (FPS, 모집중)
- [ ] Mystic Realms 카드 표시 (판타지 RPG, 곧 시작)
- [ ] 각 카드 hover 시 scale-110 효과
- [ ] 별점 표시 (4.8, 4.6, 4.7)
- [ ] "모든 게임 보기" 버튼 → `/games`

#### Features (4개)
- [ ] 최신 게임 미리 플레이 카드
- [ ] 개발진과 직접 소통 카드
- [ ] 특별 보상 획득 카드
- [ ] 게이머 커뮤니티 카드

#### How It Works (4단계)
- [ ] Step 01: 가입 및 프로필 설정
- [ ] Step 02: 베타 게임 탐색
- [ ] Step 03: 베타 신청 및 참여
- [ ] Step 04: 피드백 제공
- [ ] "자세히 알아보기" 버튼

#### Testimonials (3개)
- [ ] 김게이머 후기 (5⭐)
- [ ] 이플레이어 후기 (5⭐)
- [ ] 박유저 후기 (5⭐)

#### CTA Section
- [ ] Shield 아이콘 표시
- [ ] "무료로 가입하기" 버튼 → `/register`

#### Footer
- [ ] 4개 컬럼 표시 (브랜드/플랫폼/지원/법적 고지)
- [ ] 링크 hover 효과
- [ ] 저작권 표시

---

### 2️⃣ Navbar (모든 페이지 공통)

#### Desktop (md 이상)
- [ ] 로고 클릭 → `/`
- [ ] "홈" 링크 → `/`
- [ ] "베타존" 링크 → `/games`
- [ ] "플랫폼 소개" 링크 → `/how-it-works`
- [ ] "커뮤니티" 링크 → `/community`
- [ ] "개발자 센터" 버튼 → `/dashboard`
- [ ] "로그인" 버튼 → `/login`
- [ ] "가입하기" 버튼 (녹색) → `/register`

#### Mobile (md 미만)
- [ ] 햄버거 메뉴 버튼 표시
- [ ] 클릭 시 드롭다운 메뉴 표시
- [ ] 모든 링크 세로 정렬
- [ ] 링크 클릭 시 메뉴 자동 닫기

#### Active Link
- [ ] 현재 페이지 링크가 녹색(green-400)으로 표시

---

### 3️⃣ 베타존 페이지 (/games)

**URL**: http://localhost:3000/games

- [ ] Navbar 표시
- [ ] 게임 목록 표시
- [ ] 필터/검색 기능 (있는 경우)
- [ ] 게임 카드 클릭 시 상세 페이지로 이동
- [ ] Footer 표시

---

### 4️⃣ 플랫폼 소개 페이지 (/how-it-works)

**URL**: http://localhost:3000/how-it-works

#### Header
- [ ] "가이드" Badge (보라색)
- [ ] "베타 테스트 참여 방법" 제목
- [ ] 설명 텍스트

#### 4단계 프로세스
- [ ] Step 01: 가입하기 (UserPlus 아이콘)
  - [ ] 4개 detail 항목 표시
  - [ ] 큰 숫자 "01" 표시
  - [ ] 교차 레이아웃

- [ ] Step 02: 게임 탐색 (Search 아이콘)
  - [ ] 4개 detail 항목 표시
  - [ ] 큰 숫자 "02" 표시

- [ ] Step 03: 베타 참여 (Play 아이콘)
  - [ ] 4개 detail 항목 표시
  - [ ] 큰 숫자 "03" 표시

- [ ] Step 04: 피드백 제공 (MessageCircle 아이콘)
  - [ ] 4개 detail 항목 표시
  - [ ] 큰 숫자 "04" 표시

#### 베타 테스터의 혜택
- [ ] 조기 액세스 카드 (Trophy)
- [ ] 특별 보상 카드 (Gift)
- [ ] 개발진 소통 카드 (MessageCircle)
- [ ] 게임에 영향력 카드 (Star)

#### 참여 요건
- [ ] 시스템 요구사항 카드
- [ ] 테스터 자격 카드
- [ ] 참여 의무 카드

#### FAQ
- [ ] 4개 질문 카드 표시
- [ ] 각 카드 클릭/호버 효과

#### CTA
- [ ] Shield 아이콘
- [ ] "무료로 시작하기" 버튼 → `/register`

#### Footer
- [ ] Footer 표시

---

### 5️⃣ 커뮤니티 페이지 (/community)

**URL**: http://localhost:3000/community

#### Header
- [ ] "커뮤니티" 제목
- [ ] 설명 텍스트

#### Stats (4개)
- [ ] 활성 테스터: 12,450명 (보라색)
- [ ] 토론 주제: 6,091개 (파란색)
- [ ] 댓글: 45,320개 (녹색)
- [ ] 버그 발견: 1,234개 (노란색)

#### Tabs
- [ ] "인기 글" 탭 (TrendingUp 아이콘)
- [ ] "최신 글" 탭 (Clock 아이콘)
- [ ] 탭 전환 작동

#### 토픽 카드 (인기 글 탭)
- [ ] 4개 토픽 카드 표시
- [ ] Flame 아이콘 (핫 토픽 2개)
- [ ] 게임 Badge 표시
- [ ] 댓글 수, 좋아요 수 표시
- [ ] 카드 hover 효과 (border-purple-500/50)

#### 사이드바 - 상위 기여자
- [ ] 5명 표시
- [ ] 1위: 금메달 (yellow-500)
- [ ] 2위: 은메달 (slate-400)
- [ ] 3위: 동메달 (orange-600)
- [ ] 4-5위: 회색 (slate-700)
- [ ] Badge 표시 (전설/마스터/엘리트/프로)

#### 사이드바 - 게임별 포럼
- [ ] 4개 포럼 카드 표시
- [ ] "활성" Badge (3개)
- [ ] 멤버 수, 게시글 수 표시

#### 사이드바 - 최근 활동
- [ ] 4개 활동 표시
- [ ] Avatar + 초성 표시
- [ ] 액션 텍스트 표시
- [ ] 시간 정보 표시

#### CTA
- [ ] MessageSquare 아이콘
- [ ] "토론 시작하기" 버튼

#### Footer
- [ ] Footer 표시

---

### 6️⃣ 개발자 센터 (/dashboard)

**URL**: http://localhost:3000/dashboard

#### 로그인 필요
- [ ] 로그인하지 않은 경우 처리 확인
- [ ] 로그인 후 대시보드 접근

#### Dashboard (로그인 후)
- [ ] DeveloperLayout (사이드바 + 헤더)
- [ ] Stats 카드 표시
- [ ] 게임 목록 테이블
- [ ] 차트/그래프 (있는 경우)

---

### 7️⃣ 로그인 페이지 (/login)

**URL**: http://localhost:3000/login

- [ ] Navbar 표시
- [ ] 로그인 폼 표시
- [ ] 이메일 입력 필드
- [ ] 비밀번호 입력 필드
- [ ] "로그인" 버튼
- [ ] "회원가입" 링크 → `/register`

#### 테스트 계정
```
이메일: admin@test.com
비밀번호: admin123
```

- [ ] 로그인 시도
- [ ] 로그인 성공 시 `/dashboard`로 리다이렉트
- [ ] 로그인 실패 시 에러 메시지

---

### 8️⃣ 회원가입 페이지 (/register)

**URL**: http://localhost:3000/register

- [ ] Navbar 표시
- [ ] 회원가입 폼 표시
- [ ] 이름 입력 필드
- [ ] 이메일 입력 필드
- [ ] 비밀번호 입력 필드
- [ ] 역할 선택 (테스터/개발자)
- [ ] "가입하기" 버튼
- [ ] "로그인" 링크 → `/login`

---

### 9️⃣ 게임 상세 페이지 (/games/:id)

**URL**: http://localhost:3000/games/1

- [ ] Navbar 표시
- [ ] 게임 정보 표시
- [ ] 스크린샷/동영상
- [ ] 상세 설명
- [ ] 시스템 요구사항
- [ ] "참여하기" 버튼
- [ ] Footer 표시

---

### 🔟 반응형 테스트

#### Desktop (1920x1080)
- [ ] Navbar 정상 표시
- [ ] 4컬럼 그리드 정상
- [ ] Footer 4컬럼 정상

#### Tablet (768x1024)
- [ ] Navbar 정상 표시
- [ ] 2컬럼 그리드 정상
- [ ] Footer 2컬럼 정상

#### Mobile (375x667)
- [ ] 햄버거 메뉴 표시
- [ ] 1컬럼 그리드 정상
- [ ] Footer 1컬럼 정상
- [ ] 터치 스크롤 정상

---

## 🐛 버그 체크리스트

### 일반적인 문제
- [ ] 콘솔 에러 없음 (F12 → Console)
- [ ] 네트워크 에러 없음 (F12 → Network)
- [ ] 404 에러 없음
- [ ] 이미지 로드 실패 없음
- [ ] API 호출 실패 없음

### 스타일 문제
- [ ] Dark Theme 일관성
- [ ] Badge 색상 정상 (녹색/보라색/파란색 등)
- [ ] Button hover 효과 정상
- [ ] Card hover 효과 정상
- [ ] 텍스트 가독성 (대비)

### 성능 문제
- [ ] 페이지 로드 속도 (<3초)
- [ ] 이미지 최적화 (lazy loading)
- [ ] 부드러운 스크롤
- [ ] 애니메이션 끊김 없음

---

## 🔧 디버깅 도구

### Chrome DevTools
1. **Console** (F12 → Console)
   - JavaScript 에러 확인
   - React 경고 확인

2. **Network** (F12 → Network)
   - API 요청/응답 확인
   - 이미지 로드 확인
   - Status Code 확인 (200, 404, 500 등)

3. **Elements** (F12 → Elements)
   - CSS 스타일 확인
   - DOM 구조 확인

4. **Lighthouse** (F12 → Lighthouse)
   - 성능 점수 확인
   - 접근성 점수 확인
   - SEO 점수 확인

---

## 📊 예상 결과

### 정상 작동 시
✅ 모든 페이지 로드  
✅ 모든 링크 작동  
✅ 모든 버튼 작동  
✅ 콘솔 에러 없음  
✅ 네트워크 에러 없음  
✅ Dark Theme 일관성  
✅ 반응형 정상  

### 문제 발생 시
❌ 페이지 로드 실패 → 서버 재시작  
❌ API 에러 → MongoDB 연결 확인  
❌ 이미지 로드 실패 → Fallback 확인  
❌ 스타일 깨짐 → CSS 빌드 확인  

---

## 🚨 긴급 문제 해결

### 서버 재시작
```bash
# 현재 세션 종료
operation=stop, session_id=cmd_2uj25

# 재시작
cd /Users/andy.bae/Documents/verdent-projects/GAMEUP-BETAZONE && npm run dev
```

### 캐시 클리어
```bash
# Vite 캐시 클리어
rm -rf client/node_modules/.vite

# 브라우저 캐시 클리어
Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
```

### 의존성 재설치
```bash
# 루트 디렉토리
npm install

# 클라이언트
cd client && npm install

# 서버
cd server && npm install
```

---

## 📝 테스트 보고서 템플릿

테스트 완료 후 다음 형식으로 보고:

```
✅ 메인 홈페이지: 정상
✅ Navbar: 모든 링크 작동
✅ 플랫폼 소개: 4단계 표시 정상
✅ 커뮤니티: Tabs 전환 정상
✅ 로그인: 정상 작동
⚠️ 게임 상세: 이미지 로드 느림
❌ 개발자 센터: 로그인 후 500 에러

총 테스트: 50개
성공: 47개 (94%)
경고: 2개 (4%)
실패: 1개 (2%)
```

---

## 🎉 테스트 시작

### 1단계: 브라우저 접속
```
URL: http://localhost:3000
```

### 2단계: 순서대로 테스트
1. 메인 홈페이지 (/)
2. Navbar 링크 (모든 페이지)
3. 베타존 (/games)
4. 플랫폼 소개 (/how-it-works)
5. 커뮤니티 (/community)
6. 개발자 센터 (/dashboard)
7. 로그인 (/login)
8. 회원가입 (/register)

### 3단계: 문제 발견 시
- 스크린샷 캡처
- 콘솔 에러 복사
- 재현 단계 기록

### 4단계: 보고
- 테스트 결과 정리
- 버그 리스트 작성
- 개선 사항 제안

---

**준비 완료! 테스트를 시작하세요! 🚀**
