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
  const nextMonthValue = month === 12 ? 1 : month + 1;
  const nextMonth = nextMonthValue.toString().padStart(2, "0");
  const nextYear = month === 12 ? year + 1 : year;

  // 교육 일정 데이터 처리
  const getCurriculumSchedule = () => {
    if (!reservationList) return {};

    // 이번 달과 다음 달 필터링
    const filteredReservations = reservationList.filter((reservation) => {
      const [resYear, resMonth] = reservation.startDate.split("-");
      return (
        (resYear === year.toString() && resMonth === currentMonth) ||
        (resYear === nextYear.toString() && resMonth === nextMonth)
      );
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
  const nextMonthKey = `${nextYear}-${nextMonth}`;

  const tableTitle =
    month === 12
      ? `${year}년 ${month}월~${year + 1}년 ${nextMonth}월 교육일정`
      : `${year}년 ${month}~${nextMonth}월 교육일정`;

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
            <th>{`${nextMonthValue}월`}</th>
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
            const nextMonthData = scheduleByMonth[nextMonthKey]?.[curriculum];

            return (
              <tr key={index}>
                <td>{curriculum}</td>
                <td>
                  {currentMonthData ? (
                    currentMonthData.isClosed ? (
                      <Typography
                        fontSize="14px"
                        color="error"
                        fontWeight="bold"
                      >
                        마감
                      </Typography>
                    ) : (
                      <Typography fontSize="14px">
                        {currentMonthData.date?.split("T")[0].replace(".", "/")}
                      </Typography>
                    )
                  ) : (
                    BLANK_TEXT
                  )}
                </td>
                <td>
                  {nextMonthData ? (
                    nextMonthData.isClosed ? (
                      <Typography
                        fontSize="14px"
                        color="error"
                        fontWeight="bold"
                      >
                        마감
                      </Typography>
                    ) : (
                      <Typography fontSize="14px">
                        {nextMonthData.date?.split("T")[0].replace(".", "/")}
                      </Typography>
                    )
                  ) : (
                    BLANK_TEXT
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Box>
    </Box>
  );
};

export default TraingCurriculumTable;
