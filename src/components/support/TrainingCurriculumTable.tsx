import { Box, Typography } from "@mui/material";
import type { ReservationResponse } from "../../types/reservation";

interface TraingCurriculumTableProps {
  reservationList: ReservationResponse[] | null;
  curriculums: string[];
}

type CurriculumType = {
  [key: string]: {
    isClosed: boolean;
    date?: string;
  };
};

const BLANK_TEXT = "-";

{
  /** 커리큘럼 섹션에 사용되는 테이블 컴포넌트 */
}
{
  /** JSON 데이터에서 파일에서 row-span 및 content를 가져옴 */
}
const TraingCurriculumTable = ({
  curriculums,
  reservationList,
}: TraingCurriculumTableProps) => {
  const dateInfo = new Date();
  const month = dateInfo.getMonth() + 1;
  const year = dateInfo.getFullYear();
  const currentMonth = month.toString().padStart(2, "0");

  // 분기별 일정 계산
  // 분기 마지막 달(3,6,9,12월)이면 다음 분기, 아니면 현재 분기
  const currentQuarter = Math.floor((month - 1) / 3); // 0: Q1, 1: Q2, 2: Q3, 3: Q4
  const isLastMonthOfQuarter = month % 3 === 0; // 3, 6, 9, 12월 체크

  const targetQuarter = isLastMonthOfQuarter
    ? (currentQuarter + 1) % 4
    : currentQuarter;

  const quarterStartMonth = targetQuarter * 3 + 1; // 1, 4, 7, 10

  // 분기 3개월 계산
  const quarterMonths = [
    quarterStartMonth,
    quarterStartMonth + 1,
    quarterStartMonth + 2,
  ];

  // 년도 계산 (12월에서 다음해 1월로 넘어가는 경우)
  const quarterYears = quarterMonths.map(() =>
    isLastMonthOfQuarter && currentQuarter === 3 ? year + 1 : year
  );

  // 교육 일정 데이터 처리
  const getCurriculumSchedule = () => {
    if (!reservationList) return {};

    // 현재 달과 다음 분기 3개월 필터링
    const filteredReservations = reservationList.filter((reservation) => {
      const [resYear, resMonth] = reservation.startDate.split("-");
      const resMonthNum = parseInt(resMonth, 10);
      const resYearNum = parseInt(resYear, 10);

      // 현재 달 체크
      if (resYearNum === year && resMonthNum === month) return true;

      // 다음 분기 3개월 체크
      for (let i = 0; i < 3; i++) {
        if (
          resYearNum === quarterYears[i] &&
          resMonthNum === quarterMonths[i]
        ) {
          return true;
        }
      }

      return false;
    });

    // 월별로 분류
    const scheduleByMonth: Record<string, CurriculumType> = {};

    filteredReservations.forEach((reservation) => {
      if (curriculums.includes(reservation.reservationName)) {
        const [resYear, resMonth, resDay] = reservation.startDate.split("-");
        const monthKey = `${resYear}-${resMonth}`;

        if (!scheduleByMonth[monthKey]) {
          scheduleByMonth[monthKey] = {};
        }

        const isClosed = reservation.reservationStatus === "CLOSED";

        const curriculumName = reservation.reservationName;
        const existing = scheduleByMonth[monthKey][curriculumName];

        // 같은 교육명이 같은 달에 이미 있다면, 날짜가 더 빠른 것만 유지
        if (
          !existing ||
          !existing.date ||
          reservation.startDate <
            `${resYear}-${existing.date.replace(".", "-")}`
        ) {
          scheduleByMonth[monthKey][curriculumName] = {
            isClosed,
            date: `${resMonth}.${resDay}`,
          };
        }
      }
    });

    return scheduleByMonth;
  };

  const scheduleByMonth = getCurriculumSchedule();
  const currentMonthKey = `${year}-${currentMonth}`;

  // 다음 분기 3개월 키 생성
  const quarterMonthKeys = quarterMonths.map((m, i) => {
    const monthStr = m.toString().padStart(2, "0");
    return `${quarterYears[i]}-${monthStr}`;
  });

  // 테이블 제목 생성
  const lastQuarterMonth = quarterMonths[2];
  const lastQuarterYear = quarterYears[2];
  const tableTitle =
    lastQuarterYear > year
      ? `${year}년 ${month}월~${lastQuarterYear}년 ${lastQuarterMonth}월 교육일정`
      : `${year}년 ${month}~${lastQuarterMonth}월 교육일정`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={(theme) => ({
        mt: 4,
        mb: 8,
        maxWidth: "1500px",
        mx: "auto",
        [theme.breakpoints.up("desktop")]: {
          mx: 24,
        },
      })}
    >
      <Typography
        sx={{
          fontSize: "24px",
          color: "#3d67bc",
          fontFamily: "Freesentation-7-Bold",
        }}
      >
        {tableTitle}
      </Typography>
      <Box
        component="table"
        sx={{
          width: "100%",
          borderCollapse: "collapse",
          "& td, & th": {
            borderBottom: 1,
            borderRight: 1,
            borderColor: "divider",
            p: 2,
            textAlign: "center",
            "&:last-child": {
              borderRight: 0,
            },
            "&:nth-of-type(2)": {
              borderRight: "1px solid #00000062",
            },
          },
          "& th": {
            fontFamily: "Freesentation-7-Bold",
            color: "text.secondary",
            fontSize: "16px",
          },
          "& td": {
            fontSize: "14px",
            fontFamily: "Freesentation-6-SemiBold",
          },
        }}
      >
        <thead>
          <tr>
            <th>{"교육명"}</th>
            <th>{`${month}월`}</th>
            <th>{`${quarterMonths[0]}월`}</th>
            <th>{`${quarterMonths[1]}월`}</th>
            <th>{`${quarterMonths[2]}월`}</th>
          </tr>
        </thead>
        <tbody
          style={{
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          {curriculums.map((curriculum, index) => {
            const currentMonthData =
              scheduleByMonth[currentMonthKey]?.[curriculum];
            const quarterMonthsData = quarterMonthKeys.map(
              (key) => scheduleByMonth[key]?.[curriculum]
            );

            const renderCell = (
              data: { isClosed: boolean; date?: string } | undefined
            ) => {
              if (!data) return BLANK_TEXT;

              if (data.isClosed) {
                return (
                  <Typography fontSize="14px" color="error" fontWeight="bold">
                    마감
                  </Typography>
                );
              }

              return (
                <Typography fontSize="14px">
                  {data.date?.split("T")[0].replace(".", "/")}
                </Typography>
              );
            };

            return (
              <tr key={index}>
                <td>{curriculum}</td>
                <td>{renderCell(currentMonthData)}</td>
                <td>{renderCell(quarterMonthsData[0])}</td>
                <td>{renderCell(quarterMonthsData[1])}</td>
                <td>{renderCell(quarterMonthsData[2])}</td>
              </tr>
            );
          })}
        </tbody>
      </Box>
    </Box>
  );
};

export default TraingCurriculumTable;
