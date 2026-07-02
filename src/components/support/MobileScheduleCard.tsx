import { Box, Chip, Paper, Typography } from "@mui/material";
import type {
  ReservationResponse,
  ReservationStatus,
} from "../../types/reservation";
import { RESERVATION_STATUS_MOBILE_COLOR } from "../../utils/constants";
import { FONTS } from "../../theme/theme";

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
        border: "1px solid #03193F",
        borderRadius: "10px",
        p: 2,
        boxShadow: "4px 4px 4px 0 rgba(0,0,0,0.25)",
        // cursor: onCardClick ? "pointer" : "default",  // 나중에 사용
      }}
      // onClick={handleCardClick}  // 나중에 사용
    >
      {/* 교육명 */}
      <Box sx={{ display: "flex", gap: 2, mb: 1.5, alignItems: "start" }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: FONTS.freesentation.medium,
            color: "#737373",
            minWidth: "60px",
          }}
        >
          교육명
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: FONTS.freesentation.semiBold,
            color: "#03193F",
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
            fontFamily: FONTS.freesentation.medium,
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
                  RESERVATION_STATUS_MOBILE_COLOR[schedule.status].color,
                color: "#ffffff",
                fontFamily: FONTS.freesentation.semiBold,
                fontSize: "16px",
                cursor: "pointer",
                height: "fit-content",
                "&:hover": {
                  backgroundColor:
                    RESERVATION_STATUS_MOBILE_COLOR[schedule.status].color,
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
