import { Box, Typography } from "@mui/material";
import type { ReservationResponse } from "../../types/reservation";
import { useState, useMemo } from "react";
import CustomModal from "./CustomModal";
import CalendarModalContent from "./CalendarModalContent";
import MobileScheduleCard from "./MobileScheduleCard";
import { getQuarterInfo } from "../../utils/quarter";
import { FONTS } from "../../theme/theme";
import MobileCurriculumLegend from "./MobileCurriculumLegend";

// 날짜 포맷 함수 (YYYY-MM-DD -> MM/DD)
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}/${day}`;
};

// 그룹핑 함수 - reservationName으로 그룹핑
const groupByTitle = (list: ReservationResponse[]) => {
  return list.reduce(
    (acc, item) => {
      const key = item.reservationName;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, ReservationResponse[]>,
  );
};

const MobileScheduleContainer = ({
  reservationList,
}: {
  reservationList: ReservationResponse[] | null;
}) => {
  const [selectedReservation, setSelectedReservation] =
    useState<ReservationResponse | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChipClick = (reservation: ReservationResponse) => {
    setSelectedReservation(reservation);
    setIsModalOpen(true);
  };

  // 카드 클릭 핸들러 - 나중에 사용
  // const handleCardClick = (reservation: ReservationResponse) => {
  //   setSelectedReservation(reservation);
  //   setIsModalOpen(true);
  // };

  const { tableTitle, quarterMonths, quarterYears } = getQuarterInfo();

  // reservationList를 분기 3개월(상단 표시 기간)로 필터링 후 교육명으로 그룹핑
  const groupedReservations = useMemo(() => {
    if (!reservationList) return {};

    const filtered = reservationList.filter((reservation) => {
      const [resYear, resMonth] = reservation.startDate.split("-");
      const resYearNum = parseInt(resYear, 10);
      const resMonthNum = parseInt(resMonth, 10);

      return quarterMonths.some(
        (qm, i) => resYearNum === quarterYears[i] && resMonthNum === qm,
      );
    });

    return groupByTitle(filtered);
  }, [reservationList, quarterMonths, quarterYears]);

  return (
    <>
      <Box
        sx={(theme) => ({
          display: "block",
          [theme.breakpoints.up("tablet")]: {
            display: "none",
          },
        })}
      >
        <MobileCurriculumLegend />
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: FONTS.freesentation.medium,
            mt: 2,
            color: "#424242",
          }}
        >
          기간: {tableTitle}
        </Typography>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 2,
          [theme.breakpoints.up("tablet")]: {
            display: "none",
          },
        })}
      >
        {Object.keys(groupedReservations).length === 0 ? (
          <Typography
            sx={{
              textAlign: "center",
              color: "#666",
              py: 4,
              fontFamily: FONTS.freesentation.medium,
            }}
          >
            등록된 교육 일정이 없습니다.
          </Typography>
        ) : (
          Object.entries(groupedReservations).map(([title, reservations]) => (
            <MobileScheduleCard
              key={title}
              title={title}
              schedules={reservations.map((r) => ({
                id: r.id,
                date: formatDate(r.startDate),
                status: r.reservationStatus,
                reservation: r,
              }))}
              onChipClick={handleChipClick}
              // onCardClick={handleCardClick}  // 나중에 사용
            />
          ))
        )}

        <Box
          sx={(theme) => ({
            mt: 3,
            display: "none",
            [theme.breakpoints.up("desktop")]: { display: "block" },
          })}
        >
          <Typography
            sx={{
              whiteSpace: "pre-wrap",
              fontFamily: FONTS.freesentation.medium,
              fontSize: "16px",
              wordBreak: "keep-all",
            }}
          >
            {`※ 보다 양질의 교육 서비스 제공을 위해 2026년 4월부터 교육 프로그램이 유료화됩니다.\n단, iVH 제품 구매 고객사께는 기존과 동일하게 무료 교육 혜택이 제공됩니다.`}
          </Typography>
        </Box>

        <CustomModal open={isModalOpen} onClose={handleModalClose}>
          <CalendarModalContent reservation={selectedReservation} />
        </CustomModal>
      </Box>
    </>
  );
};

export default MobileScheduleContainer;
