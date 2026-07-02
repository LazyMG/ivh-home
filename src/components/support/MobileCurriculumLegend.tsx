import { Box, Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

const Legend = ({ color, text }: { color: string; text: string }) => {
  return (
    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
      <Box
        sx={{
          width: "28px",
          height: "10px",
          borderRadius: "20px",
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

const MobileCurriculumLegend = () => {
  return (
    <Box sx={{ display: "flex", gap: 3, mt: 2 }}>
      {[
        {
          color: "#DB5F11",
          text: "모집 중",
        },
        {
          color: "#005AD5",
          text: "모집 완료",
        },
        {
          color: "#B2B2B2",
          text: "취소",
        },
      ].map((legend) => (
        <Legend key={legend.text} color={legend.color} text={legend.text} />
      ))}
    </Box>
  );
};

export default MobileCurriculumLegend;
