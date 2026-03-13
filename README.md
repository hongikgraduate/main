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

| 기능                    | 설명                                                               |
| ----------------------- | ------------------------------------------------------------------ |
| 📋 **성적표 자동 파싱** | 클래스넷에서 복사한 텍스트를 자동으로 분석                         |
| 📚 **교양 필수 확인**   | 영어, 논리적사고와글쓰기, 전공기초영어 등 필수 교양 충족 여부 확인 |
| 🐉 **드래곤볼 확인**    | 7개 교양 영역 중 6개 이상 이수 여부 확인                           |
| 🏛️ **전공 필수 확인**   | 학과별 전공 필수 과목 이수 여부 확인                               |
| 🔬 **MSC 확인**         | 학과별 수학·과학·전산 기초 과목 이수 여부 및 학점 합산 확인        |
| 🎯 **학점 계산**        | 총 학점 및 전공 학점 자동 집계                                     |
| 🔒 **개인정보 보호**    | 모든 처리는 브라우저에서만 이루어지며, 개인정보를 수집하지 않음    |

---

## 🏫 지원 학과

<div align="center">

|     | 학과           | 전공 필수 | MSC                           |
| --- | -------------- | --------- | ----------------------------- |
| 💻  | 컴퓨터공학과   | 8과목     | 수학·과학 17학점 + 전산 2과목 |
| 📊  | 경영학과       | 11과목    | 수학·과학·전산 각 개별 이수   |
| 🎨  | 시각디자인학과 | 7과목     | 없음                          |

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

## 🏗️ 학과 추가 방법

`src/majors/` 에 새 파일을 추가하고 드롭다운에 옵션만 추가하면 됩니다.

**1. `src/majors/{영어학과명}.js` 생성 후 아래 4가지 export 작성**

```js
// 전공 필수 과목 목록
export const REQ = {
  category: "전공 필수",
  type: "each",
  items: [{ label: "과목명", ids: ["학수번호"] }],
};

// 학과종류: 0 = 비공학, 1 = 공학, 2 = 컴공
export const MSC = 0;

// 기본 3학점이 아닌 과목만 명시 (나머지는 자동으로 3학점 적용)
export const CREDITS = {
  학수번호: 학점수,
};

// 전공으로 인정되는 모든 학수번호
export const MAJOR_IDS = new Set(["학수번호"]);
```

**2. `src/App.jsx` 드롭다운에 옵션 추가**

```jsx
<option value="{학과영문명}">학과명</option>
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
├── requirements.js       # 교양 필수·드래곤볼 요건 정의 및 요건 검사 로직
├── msc.js                # MSC(수학·과학·전산) 트랙별 요건 정의
├── creditSum.js          # 학점 계산 로직
└── majors/               # 학과별 요건 (새 학과 파일 추가만으로 확장 가능)
    ├── computerScience.js  # 컴퓨터공학과 (MSC 트랙 2)
    ├── business.js         # 경영학과 (MSC 트랙 1)
    └── visualDesign.js     # 시각디자인학과 (MSC 없음)
```

---

## 👥 팀

<div align="center">

© 2026 김형준 · 김범수

</div>
