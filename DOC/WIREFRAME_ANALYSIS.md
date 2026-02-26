# Wireframe 분석 결과 및 클라이언트 업데이트 계획

## 📋 Wireframe 분석 요약

### 발견된 주요 기능

#### 1. 페이지 구조
```
Public Pages:
- Home (/)
- Games (/games) - "BetaZone"
- How It Works (/how-it-works)
- Community (/community)

Developer Pages (/developer):
- Dashboard (/developer)
- Game Management (/developer/games)
- Game Register (/developer/games/new)
- Game Detail Management (/developer/games/:id)
- Tester Management (/developer/testers)
- Feedback Management (/developer/feedback)
- Analytics (/developer/analytics)
- Settings (/developer/settings)
```

#### 2. 주요 컴포넌트
- **Layout.tsx**: 메인 레이아웃 (네비게이션)
- **DeveloperLayout.tsx**: 개발자 전용 사이드바 레이아웃
- **UI Components**: shadcn/ui 스타일 (Card, Badge, Button, Table, Tabs, Input 등)

#### 3. 개발자 대시보드 기능

**통계 카드 (KPI)**:
- 등록된 게임 수
- 총 매출
- 활성 유저 수
- 평균 ARPPU (사용자당 평균 결제액)

**게임 목록**:
- 상태: 모집중/진행중/종료/운영중
- 승인 상태: approved/pending/rejected
- 서비스 타입: beta/live
- 수익화 모델: free/ad/paid
- 테스터 수, 피드백 수, 평점
- 리텐션 지표 (D1, D7, D14, D30)
- 전환율, ARPPU

#### 4. 게임 등록 프로세스
- 3단계: Apply -> Pending -> Approved
- 기본 정보, 상세 정보, 수익화 모델 설정

#### 5. 분석 기능 (Analytics)
- 조회수, 다운로드 수
- 활성 유저 수
- 리텐션 (D1, D7, D14, D30)
- 매출 추이
- 사용자 행동 분석

#### 6. 피드백 관리
- 카테고리: 버그/제안/긍정적
- 우선순위: High/Medium/Low
- 상태: 미처리/진행중/완료

---

## 🎯 기존 프로젝트와 비교

### 현재 구현 상태
✅ Phase 1: 인증 시스템
✅ Phase 2: 게임 업로드, 목록, 상세

### Wireframe에서 추가된 기능
🆕 개발자 대시보드 (통계 카드)
🆕 게임 관리 테이블 (상세한 상태 관리)
🆕 테스터 관리
🆕 피드백 관리 시스템
🆕 분석 페이지 (Analytics)
🆕 리텐션 지표
🆕 ARPPU, 전환율 등 수익 지표
🆕 How It Works 페이지
🆕 Community 페이지

---

## 📝 업데이트 계획

### Priority 1: 개발자 대시보드 강화
1. **DashboardPage 완전 재구현**
   - 4개 통계 카드 (게임 수, 매출, 활성 유저, ARPPU)
   - 게임 목록 테이블 (Wireframe 기반)
   - 탭 기능 (전체/베타/라이브)
   - 게임 상태별 필터링

2. **UI 컴포넌트 추가**
   - Badge 컴포넌트 (상태 표시)
   - Table 컴포넌트 (게임 목록)
   - Tabs 컴포넌트 (탭 전환)
   - 통계 Card 컴포넌트

### Priority 2: 게임 관리 기능 확장
3. **GameManagement 페이지 추가**
   - 게임 목록 테이블
   - 검색, 필터링
   - 상태 관리 (모집중/진행중/종료)
   - 승인 상태 관리

4. **Game Model 확장**
   - serviceType (beta/live)
   - monetization (free/ad/paid)
   - approvalStatus (approved/pending/rejected)
   - retention 지표
   - arppu, conversion 필드

### Priority 3: 분석 및 피드백
5. **Analytics 페이지**
   - 조회/다운로드 차트
   - 활성 유저 그래프
   - 리텐션 분석
   - 매출 추이

6. **FeedbackManagement 페이지**
   - 피드백 목록
   - 카테고리별 분류
   - 상태 관리

### Priority 4: 추가 페이지
7. **HowItWorks 페이지**
8. **Community 페이지**
9. **TesterManagement 페이지**

---

## 🚀 구현 순서

### Phase 3-A: 대시보드 강화 (우선)
1. ✅ Badge, Table, Tabs UI 컴포넌트 추가
2. ✅ DashboardPage 완전 재구현
3. ✅ Game Model 확장
4. ✅ 대시보드 API 추가 (통계)

### Phase 3-B: 게임 관리
5. ✅ GameManagement 페이지
6. ✅ 게임 상태 업데이트 API
7. ✅ 승인 시스템

### Phase 3-C: 분석 및 피드백 (나중에)
8. Analytics 페이지
9. FeedbackManagement 페이지
10. Feedback Model & API

---

## 📦 필요한 새 컴포넌트

### UI Components (from Wireframe)
- `Badge.tsx` - 상태 표시
- `Table.tsx` - 데이터 테이블
- `Tabs.tsx` - 탭 컴포넌트
- `Select.tsx` - 드롭다운 (이미 select 태그 사용 중)

### Stats Components
- `StatCard.tsx` - 통계 카드
- `Chart.tsx` - 차트 (나중에)

---

## 🎨 디자인 시스템 통합

Wireframe은 shadcn/ui 스타일을 사용하지만, 
현재 프로젝트는 Tailwind CSS 사용 중.

**접근 방식:**
- Wireframe의 컴포넌트 구조는 참고
- Tailwind CSS로 스타일 직접 구현
- shadcn/ui 의존성 추가하지 않음
- 기존 Button, Input, Card 스타일과 일관성 유지

---

## ✅ 다음 단계

1. Badge, Table, Tabs 컴포넌트 구현
2. DashboardPage 완전 재구현 (Wireframe 기반)
3. Game Model 확장 (serviceType, monetization, retention 등)
4. 대시보드 통계 API 추가
5. GameManagement 페이지 추가

Phase 3-A 완료 후 Phase 3-B 진행
