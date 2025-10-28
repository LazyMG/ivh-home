import { Box, Typography } from "@mui/material";
import { RESERVATION_STATUS_COLOR } from "../../utils/constants";

const Legend = ({ color, text }: { color: string; text: string }) => {
  return (
    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
      <Box
        sx={{
          width: "10px",
          height: "80%",
          backgroundColor: color,
          borderRadius: "15px",
        }}
      />
      <Typography
        sx={{
          lineHeight: 1.2,
          fontFamily: "Freesentation-7-Bold",
          fontSize: "14.7px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const CalendarLegend = () => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {[
        {
          color: RESERVATION_STATUS_COLOR.OPEN.color,
          text: RESERVATION_STATUS_COLOR.OPEN.label,
        },
        {
          color: RESERVATION_STATUS_COLOR.CLOSED.color,
          text: RESERVATION_STATUS_COLOR.CLOSED.label,
        },
        {
          color: RESERVATION_STATUS_COLOR.CANCELED.color,
          text: RESERVATION_STATUS_COLOR.CANCELED.label,
        },
      ].map((legend) => (
        <Legend key={legend.color} color={legend.color} text={legend.text} />
      ))}
    </Box>
  );
};

export default CalendarLegend;
