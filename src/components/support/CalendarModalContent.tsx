import { useEffect, useState } from "react";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import type { ReservationResponse } from "../../types/reservation";
import {
  RESERVATION_STATUS_COLOR,
  RESERVATION_TYPE,
} from "../../utils/constants";

const formattingDate = (targetDate: string) => {
  const [year, month, date] = targetDate.split("-");
  return `${year}년 ${month}월 ${date}일`;
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

  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => setProgress(targetValue), 30);
    return () => clearTimeout(timer);
  }, [targetValue]);

  return (
    reservation && (
      <Box>
        <Typography
          sx={{
            fontSize: "18px",
            borderRadius: "15px",
            backgroundColor:
              RESERVATION_STATUS_COLOR[reservation.reservationStatus].color,
            width: "fit-content",
            color: "#ffffff",
            fontWeight: "bold",
            px: 2,
            py: 0.5,
          }}
        >
          {RESERVATION_STATUS_COLOR[reservation.reservationStatus].label}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontSize: "24px",
            fontWeight: "bold",
            wordBreak: "keep-all",
            lineHeight: 1.2,
          }}
        >
          {reservation.reservationName}
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.6, mt: 1 }}>
          {`${RESERVATION_TYPE[reservation.reservationType]} | ${formattingDate(
            reservation.startDate.split("T")[0]
          )}`}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography>{`비용: ${reservation.cost.toLocaleString()}원`}</Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: 3,
            }}
          >
            <Typography sx={{ width: "fit-content", minWidth: "fit-content" }}>
              인원 정보
            </Typography>
            <LinearProgress
              value={progress}
              variant="determinate"
              sx={{
                borderRadius: "4px",
                [`&.${linearProgressClasses.colorPrimary}`]: {
                  backgroundColor: "#9fa4a8ff",
                },
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: "#1a90ff",
                  borderRadius: "4px",
                  transition: "transform 0.6s ease-out",
                },
                height: 12,
                width: "100%",
              }}
            />
            {/* <Tooltip
              title={`현재 ${reservation.reservatedPeople}명`}
              slotProps={{
                popper: {
                  sx: {
                    [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: 1,
                      },
                  },
                },
              }}
            >
              <LinearProgress
                value={progress}
                variant="determinate"
                sx={{
                  borderRadius: "4px",
                  [`&.${linearProgressClasses.colorPrimary}`]: {
                    backgroundColor: "#9fa4a8ff",
                  },
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: "#1a90ff",
                    borderRadius: "4px",
                    transition: "transform 0.6s ease-out",
                  },
                  height: 12,
                }}
              />
            </Tooltip> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "flex-end",
              justifyContent: "flex-end",
              mt: 1,
            }}
          >
            <Typography
              sx={{ lineHeight: 1 }}
            >{`${reservation.reservatedPeople}명/${reservation.maxPeople}명`}</Typography>
            <Typography
              sx={{ fontSize: "12px", lineHeight: 1.2, opacity: 0.6 }}
            >
              {"(현재/최대)"}
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "12px", opacity: 0.6, textAlign: "right" }}
          >
            {`최소: ${reservation.maxPeople}명`}
          </Typography>
        </Box>
        <Box sx={{ mt: 2, minHeight: 160 }}>
          <Typography
            sx={{
              fontSize: "16px",
              wordBreak: "keep-all",
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
