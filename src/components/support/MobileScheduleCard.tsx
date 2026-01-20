import { Box, Chip, Paper, Typography } from "@mui/material";
import type {
  ReservationResponse,
  ReservationStatus,
} from "../../types/reservation";
import { RESERVATION_STATUS_COLOR } from "../../utils/constants";

interface ScheduleInfo {
  id: number;
  date: string;
  status: ReservationStatus;
  reservation: ReservationResponse;
}

interface MobileScheduleCardProps {
  title: string;
  schedules: ScheduleInfo[];
  onChipClick: (reservation: ReservationResponse) => void;
  // onCardClick?: (reservation: ReservationResponse) => void;  // 나중에 사용
}

const MobileScheduleCard = ({
  title,
  schedules,
  onChipClick,
  // onCardClick,
}: MobileScheduleCardProps) => {
  // 카드 클릭 핸들러 - 나중에 사용
  // const handleCardClick = () => {
  //   if (onCardClick && schedules.length > 0) {
  //     onCardClick(schedules[0].reservation);
  //   }
  // };

  return (
    <Paper
      sx={{
        border: "2px solid transparent",
        borderRadius: "10px",
        p: 2,
        boxShadow: "4px 4px 4px 0 rgba(0,0,0,0.25)",
        background:
          "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #339070, #1755C2) border-box",
        // cursor: onCardClick ? "pointer" : "default",  // 나중에 사용
      }}
      // onClick={handleCardClick}  // 나중에 사용
    >
      {/* 교육명 */}
      <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Freesentation-5-Medium",
            color: "#737373",
            minWidth: "60px",
          }}
        >
          교육명
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Freesentation-6-SemiBold",
            color: "#000",
            wordBreak: "keep-all",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* 모집현황 */}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Freesentation-5-Medium",
            color: "#737373",
            minWidth: "60px",
          }}
        >
          모집현황
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {schedules.map((schedule) => (
            <Chip
              key={schedule.id}
              label={schedule.date}
              onClick={(e) => {
                e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
                onChipClick(schedule.reservation);
              }}
              sx={{
                backgroundColor:
                  RESERVATION_STATUS_COLOR[schedule.status].color,
                color: "#000000",
                fontFamily: "Freesentation-5-Medium",
                fontSize: "16px",
                cursor: "pointer",
                height: "fit-content",
                "&:hover": {
                  backgroundColor:
                    RESERVATION_STATUS_COLOR[schedule.status].color,
                  opacity: 0.8,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default MobileScheduleCard;
