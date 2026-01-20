import { useEffect, useState } from "react";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import type { ReservationResponse } from "../../types/reservation";
import { RESERVATION_STATUS_COLOR } from "../../utils/constants";

const formattingDate = (isoString: string) => {
  // ISO 문자열을 로컬 시간으로 변환
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}년 ${month}월 ${day}일`;
};

const calculateValue = (maxPeople: number, currentPeople: number) => {
  return (currentPeople / maxPeople) * 100;
};

const CalendarModalContent = ({
  reservation,
}: {
  reservation: ReservationResponse | null;
}) => {
  const [progress, setProgress] = useState(0);
  const targetValue = reservation
    ? calculateValue(reservation.maxPeople, reservation.reservatedPeople)
    : 0;
  const percentage = calculateValue(
    reservation?.maxPeople || 0,
    reservation?.reservatedPeople || 0
  );

  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => setProgress(targetValue), 30);
    return () => clearTimeout(timer);
  }, [targetValue]);

  return (
    reservation && (
      <Box>
        {/* 상태 배지 */}
        <Typography
          sx={{
            fontSize: "14px",
            borderRadius: "15px",
            backgroundColor:
              RESERVATION_STATUS_COLOR[reservation.reservationStatus]?.color ||
              "transparent",
            width: "fit-content",
            color: "#ffffff",
            fontWeight: "bold",
            px: 2,
            py: 0.5,
            mb: 2,
          }}
        >
          {RESERVATION_STATUS_COLOR[reservation.reservationStatus]?.label || ""}
        </Typography>

        {/* 제목 */}
        <Typography
          sx={{
            mt: 1,
            fontSize: "24px",
            fontWeight: "bold",
            wordBreak: "keep-all",
            lineHeight: 1.2,
            mb: 3,
          }}
        >
          {reservation.reservationName}
        </Typography>

        {/* 주요 정보 카드 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            mb: 3,
            p: 2,
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
          }}
        >
          {/* 날짜 정보 */}
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#6c757d",
                mb: 0.5,
                fontWeight: "500",
              }}
            >
              📅 교육 일정
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              {formattingDate(reservation.startDate)}
            </Typography>
          </Box>

          {/* 비용 정보 */}
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#6c757d",
                mb: 0.5,
                fontWeight: "500",
              }}
            >
              💰 교육 비용
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#1a90ff",
              }}
            >
              {reservation.cost.toLocaleString()}원
            </Typography>
          </Box>
        </Box>

        {/* 인원 정보 섹션 */}
        <Box
          sx={{
            p: 2,
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#495057" }}
            >
              👥 신청 현황
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "baseline" }}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "bold", color: "#1a90ff" }}
              >
                {reservation.reservatedPeople}
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#6c757d" }}>
                / {reservation.maxPeople}명
              </Typography>
            </Box>
          </Box>

          <Box sx={{ position: "relative" }}>
            <LinearProgress
              value={progress}
              variant="determinate"
              sx={{
                borderRadius: "4px",
                [`&.${linearProgressClasses.colorPrimary}`]: {
                  backgroundColor: "#e9ecef",
                },
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: "#3d67bc",
                  borderRadius: "4px",
                  transition: "transform 0.6s ease-out",
                },
                height: 16,
                mb: 1,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000000", // 진행도에 따라 색상 변경
                pointerEvents: "none", // 클릭 이벤트 방지
              }}
            >
              {percentage.toFixed(0)}%
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#6c757d",
              textAlign: "right",
            }}
          >
            최소 인원: {reservation.minPeople}명
          </Typography>
        </Box>

        {/* 교육 설명 */}
        <Box
          sx={{
            p: 2,
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            mb: 3,
            maxHeight: "200px",
            overflow: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#495057",
              mb: 1,
            }}
          >
            📝 교육 안내
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              wordBreak: "break-word",
              lineHeight: 1.6,
              color: "#495057",
              whiteSpace: "pre-wrap",
            }}
          >
            {reservation.reservationDescription}
          </Typography>
        </Box>
      </Box>
    )
  );
};

export default CalendarModalContent;
