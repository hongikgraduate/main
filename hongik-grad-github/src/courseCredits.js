// 기본값: 3학점, 기본값과 다른 과목만 Set으로 등록

const CREDITS_1 = new Set([
  "012103", // 대학물리실험(1)
  "012109", // 대학화학실험(1)
]);

const CREDITS_2 = new Set([
  // 시각디자인
  "410518", // 한국디자인사(1)
  "410618", // 한국디자인사(2)
  "410620", // 디자인텍스트(2)
]);

const CREDITS_4 = new Set([
  "013312", // 자료구조및프로그래밍
  "013313", // 논리회로설계및실험
  "101613", // 기초데이터베이스
]);

const CREDITS_5 = new Set([
  "410850", // 졸업프로젝트 (시각디자인)
]);

const CREDITS_6 = new Set([
  "002677", // 산학모빌리티프로젝트
  "777002", // PBL1+1 (경영)
  "777032", // PBL1+1 (시각디자인)
]);

/**
 * @param {string} id 학수번호
 * @returns {number} 학점
 */
export function getCredits(id) {
  if (CREDITS_1.has(id)) return 1;
  if (CREDITS_2.has(id)) return 2;
  if (CREDITS_4.has(id)) return 4;
  if (CREDITS_5.has(id)) return 5;
  if (CREDITS_6.has(id)) return 6;
  return 3;
}
