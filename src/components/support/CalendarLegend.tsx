import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { RESERVATION_STATUS_COLOR } from "../../utils/constants";
import { FONTS } from "../../theme/theme";

// 오늘 날짜 셀 배경색과 동일 (training-calendar.css의 .fc-day-today)
const TODAY_LEGEND_COLOR = "#aed3f0";

{
  /** 달력에 사용되는 각주 컴포넌트 */
}
const Legend = ({ color, text }: { color: string; text: string }) => {
  return (
    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
      <Box
        sx={{
          width: "16px",
          aspectRatio: "1/1",
          backgroundColor: color,
        }}
      />
      <Typography
        sx={{
          lineHeight: 1.2,
          fontFamily: FONTS.freesentation.semiBold,
          fontSize: "16px",
          color: "#424242",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const CalendarLegend = ({
  showToday = false,
  sx,
}: {
  showToday?: boolean;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2, ...sx }}>
      {[
        {
          color: RESERVATION_STATUS_COLOR?.OPEN.color || "transparent",
          text: RESERVATION_STATUS_COLOR?.OPEN.label || "",
        },
        {
          color: RESERVATION_STATUS_COLOR?.CLOSED.color || "transparent",
          text: RESERVATION_STATUS_COLOR?.CLOSED.label || "",
        },
        {
          color: RESERVATION_STATUS_COLOR?.CANCELLED.color || "transparent",
          text: RESERVATION_STATUS_COLOR?.CANCELLED.label || "",
        },
        ...(showToday ? [{ color: TODAY_LEGEND_COLOR, text: "today" }] : []),
      ].map((legend) => (
        <Legend key={legend.text} color={legend.color} text={legend.text} />
      ))}
    </Box>
  );
};

export default CalendarLegend;
