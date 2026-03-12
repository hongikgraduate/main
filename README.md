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
| ✨ 기능 추가             | `feat/[이슈번호]`     | 새로운 UI/기능 개발                                   | `feat/100`    |
| ♻️ 리팩토링              | `refactor/[이슈번호]` | 코드 구조 개선                                        | `refactor/28` |
| 🐛 버그 수정             | `bug/[이슈번호]`      | UI/UX 버그 수정                                       | `bug/23`      |
| 🎨 코드 포맷팅, CSS 수정 | `style/[이슈번호]`    | 코드 포맷팅, CSS 수정 등 기능에 영향 없는 스타일 변경 | `style-123`   |
| 🔨 잡무성 작업           | `chore/[이슈번호]`    | 주석, 콘솔 제거, 의존성 관리                          | `chore/102`   |
| 📝 문서 수정             | `docs/[이슈번호]`     | 문서 수정 (README 등)                                 | `docs/23`     |
| 🚀 빌드 설정             | `build/[이슈번호]`    | 빌드 설정, 의존성 패키지                              | `build/12`    |
| ✅ 테스트 코드 추가/수정 | `test/[이슈번호]`     | 테스트 코드 추가 / 수정                               | `test/12`     |

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
