<div align="center">

# 🎓 홍익졸업요건

**홍익대학교 졸업요건 자동 확인 서비스**

[![Netlify Status](https://img.shields.io/badge/netlify-deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://hongikgrad.netlify.app)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

### 🌐 [hongikgrad.netlify.app](https://hongikgrad.netlify.app)

클래스넷 성적표를 붙여넣기만 하면<br>
졸업요건 충족 여부를 한눈에 확인할 수 있어요.

</div>

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 📋 **성적표 자동 파싱** | 클래스넷에서 복사한 텍스트를 자동으로 분석 |
| 📚 **교양 필수 확인** | 영어, 논리적사고와글쓰기, 설계사고 등 필수 교양 충족 여부 확인 |
| 🐉 **드래곤볼 확인** | 7개 교양 영역 중 6개 이상 이수 여부 확인 |
| 🏛️ **전공 필수 확인** | 학과별 전공 필수 과목 이수 여부 확인 |
| 🎯 **학점 계산** | 총 학점 및 전공 학점 자동 집계 |
| 🔒 **개인정보 보호** | 모든 처리는 브라우저에서만 이루어지며, 개인정보를 수집하지 않음 |

---

## 🏫 지원 학과

<div align="center">

|  | 학과 | 전공 필수 | 전공 과목 수 |
|--|------|-----------|-------------|
| 💻 | 컴퓨터공학과 | 8과목 | 26과목 |
| 📊 | 경영학과 | 11과목 | 66과목 |
| 🎨 | 시각디자인학과 | 7과목 | 54과목 |

</div>

---

## 🚀 사용 방법

```
1. 홍익대학교 클래스넷(ClassNet) 접속
2. 성적 조회 → 전체 성적 조회 페이지 이동
3. 성적표 전체 텍스트 선택 후 복사 (Ctrl+A → Ctrl+C)
4. 서비스에서 학과 선택
5. 복사한 텍스트 붙여넣기
6. "졸업요건 확인" 버튼 클릭
```

---

## 🖥️ 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

---

## 🛠️ 기술 스택

<div align="center">

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

</div>

---

## 📁 프로젝트 구조

```
src/
├── main.jsx              # 앱 진입점
├── App.jsx               # 메인 컴포넌트 (입력 / 결과 페이지)
├── App.css               # 스타일
├── parser.js             # 클래스넷 성적표 파싱
├── requirements.js       # 교양 필수·드래곤볼 요건 정의
├── creditSum.js          # 학점 계산 로직
├── courseCredits.js      # 과목별 학점 매핑
└── majors/
    ├── computerScience.js  # 컴퓨터공학과 요건
    ├── business.js         # 경영학과 요건
    └── visualDesign.js     # 시각디자인학과 요건
```

---

## 👥 팀

<div align="center">

© 2026 김형준 · 김범수

</div>

---

## 🎨 프론트엔드 개발 컨벤션

---

### 🌳 깃 브랜치 전략

- **main 브랜치**
  👑 서비스 배포용 브랜치
  👑 팀장만 직접 관리하고 머지 가능
- **develop 브랜치**
  🛠️ 개발 기능 통합 브랜치
  새로운 기능은 항상 이 브랜치를 기준으로 브랜치 생성

### 🔖 브랜치 명명 규칙

| 유형                     | 형식                  | 설명                                                  | 예시          |
| ------------------------ | --------------------- | ----------------------------------------------------- | ------------- |
| ✨ 기능 추가             | `feat-[이슈번호]`     | 새로운 UI/기능 개발                                   | `feat-100`    |
| ♻️ 리팩토링              | `refactor-[이슈번호]` | 코드 구조 개선                                        | `refactor-28` |
| 🐛 버그 수정             | `bug-[이슈번호]`      | UI/UX 버그 수정                                       | `bug-23`      |
| 🎨 코드 포맷팅, CSS 수정 | `style-[이슈번호]`    | 코드 포맷팅, CSS 수정 등 기능에 영향 없는 스타일 변경 | `style-123`   |
| 🔨 잡무성 작업           | `chore-[이슈번호]`    | 주석, 콘솔 제거, 의존성 관리                          | `chore-102`   |
| 📝 문서 수정             | `docs-[이슈번호]`     | 문서 수정 (README 등)                                 | `docs-23`     |
| 🚀 빌드 설정             | `build-[이슈번호]`    | 빌드 설정, 의존성 패키지                              | `build-12`    |
| ✅ 테스트 코드 추가/수정 | `test-[이슈번호]`     | 테스트 코드 추가 / 수정                               | `test-12`     |

---

### 📝 커밋/PR 컨벤션

| 타입          | 설명                                       | 예시                                  |
| ------------- | ------------------------------------------ | ------------------------------------- |
| ✨ `feat`     | 새로운 기능 추가                           | `feat: 검색 기능 추가`                |
| ♻️ `refactor` | 리팩토링                                   | `refactor: header 컴포넌트 구조 개선` |
| 🐛 `bug`      | 버그 수정                                  | `bug: 모바일 메뉴 토글 오류 수정`     |
| 🎨 `style`    | 스타일, 포맷, 세미콜론 등 코드 비동작 변경 | `style: 코드 정렬 및 들여쓰기 수정`   |
| 📝 `docs`     | 문서 수정                                  | `docs: README 배포 방법 추가`         |
| ✅ `test`     | 테스트 코드 추가/수정                      | `test: 로그인 테스트 케이스 추가`     |
| 📦 `build`    | 빌드 시스템, 의존성 설정                   | `build: Vite 설정 파일 수정`          |
| 🚀 `ci`       | CI 설정 변경                               | `ci: GitHub Actions 수정`             |
| 🔨 `chore`    | 그 외 잡무 (예: 콘솔 제거)                 | `chore: 불필요한 주석 제거`           |

---

### 🤝 PR (Pull Request) 전략

- **main 브랜치 PR**:
  👑 팀장 승인 → 머지 가능
- **그 외 브랜치 PR**:
  👥 최소 1명 이상 리뷰어 승인 → 머지

---

### 💻 코드 컨벤션 (JavaScript / React 기준)

| 항목                | 규칙                 | 예시                           |
| ------------------- | -------------------- | ------------------------------ |
| **컴포넌트명**      | `PascalCase`         | `UserCard`, `MainLayout`       |
| **변수/함수명**     | `camelCase`          | `handleClick`, `userName`      |
| **상수**            | `UPPER_SNAKE_CASE`   | `DEFAULT_LIMIT`, `API_URL`     |
| **파일명**          | `PascalCase`         | `ProfilePage.tsx`              |
| **스타일 클래스명** | `camelCase` or `BEM` | `buttonPrimary`, `card__title` |
| **CSS 파일**        | - 상의 필요          |                                |

---

### ⚛️ React 컴포넌트 규칙

- **props 구조 분해**
  ✅ `const Button = ({ text, onClick }) => {}`
- **조건부 렌더링**
  ✅ `isLoading && <Spinner />`
- **커스텀 훅**
  ✅ `use` 접두사 필수: `useFetch`, `useToggle`
- **useEffect**
  ✅ 의존성 배열 명시: `useEffect(() => { ... }, [value])`

---

### 🧹 스타일링 (CSS/SCSS)

- **방식**: CSS Module, TailwindCSS, styled-components 중 하나 사용
- **공통 변수**: `:root`, `variables.css`로 색상, 여백 등 관리
- **클래스명**: 역할 기반 명명 (`searchInput`, `formWrapper` 등)

---

### 🧰 Lint & Formatter

- Prettier 사용
