import { Box, Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
      <Box
        sx={(theme) => ({
          width: "8px",
          height: "14px",
          backgroundColor: "#03193F",
          borderRadius: "20px",
          [theme.breakpoints.up("tablet")]: {
            width: "88px",
            height: "24px",
          },
        })}
      />
      <Typography
        sx={(theme) => ({
          fontSize: "20px",
          fontFamily: FONTS.galderglynn.regular,
          color: "#03193F",
          [theme.breakpoints.up("tablet")]: {
            fontSize: "28px",
          },
          textTransform: "uppercase",
        })}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
