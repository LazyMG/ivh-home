export interface QuarterInfo {
  currentMonth: number;
  year: number;
  quarterMonths: number[]; // [시작월, 중간월, 마지막월]
  quarterYears: number[]; // 각 월의 년도 (12월→1월 경우 다음해)
  displayRange: string; // 표시용 문자열 (예: "1-3", "4-6")
  tableTitle: string; // 테이블 제목용 (예: "2026년 1~3월")
  isLastMonthOfQuarter: boolean;
  currentQuarter: number;
}

/**
 * 분기 정보를 계산하는 유틸 함수
 * - 분기 마지막 달(3, 6, 9, 12월)이면 다음 분기
 * - 아니면 현재 분기
 */
export const getQuarterInfo = (date?: Date): QuarterInfo => {
  const dateInfo = date || new Date();
  const month = dateInfo.getMonth() + 1;
  const year = dateInfo.getFullYear();

  const currentQuarter = Math.floor((month - 1) / 3); // 0: Q1, 1: Q2, 2: Q3, 3: Q4
  const isLastMonthOfQuarter = month % 3 === 0; // 3, 6, 9, 12월

  const targetQuarter = isLastMonthOfQuarter
    ? (currentQuarter + 1) % 4
    : currentQuarter;

  const quarterStartMonth = targetQuarter * 3 + 1; // 1, 4, 7, 10
  const quarterMonths = [
    quarterStartMonth,
    quarterStartMonth + 1,
    quarterStartMonth + 2,
  ];

  // 년도 계산 (12월에서 다음해 1월로 넘어가는 경우)
  const quarterYears = quarterMonths.map(() =>
    isLastMonthOfQuarter && currentQuarter === 3 ? year + 1 : year,
  );

  const lastQuarterMonth = quarterMonths[2];
  const lastQuarterYear = quarterYears[2];

  const displayRange = `${quarterStartMonth}-${lastQuarterMonth}`;

  const tableTitle =
    lastQuarterYear > year
      ? `${year}년 ${month}월~${lastQuarterYear}년 ${lastQuarterMonth}월`
      : `${year}년 ${month}~${lastQuarterMonth}월`;

  return {
    currentMonth: month,
    year,
    quarterMonths,
    quarterYears,
    displayRange,
    tableTitle,
    isLastMonthOfQuarter,
    currentQuarter,
  };
};
