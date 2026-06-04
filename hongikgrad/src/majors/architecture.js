// 건축학 전공 필수 및 전공 과목

export const REQ = {
  category: "전공 필수",
  type: "each",
  items: [
    { label: "건축설계(1)", ids: ["110121"] },
    { label: "건축설계(2)", ids: ["110221"] },
    { label: "세계건축사(1)", ids: ["110222"] },

  ],
};

export const MSC = 2; // 비공학은 0, 공학은 1, 컴공은 2 로 표시

export const CREDITS = {
  "110121": 6, // 건축설계(1)
  "110221": 6, // 건축설계(2)
};

export const MAJOR_IDS = new Set([
  "110163", // 건축및실내건축
  "110164", // 미디어스터디(1)
  "110264", // 미디어스터디(2)
  "110262", // 구조의이해
]);
