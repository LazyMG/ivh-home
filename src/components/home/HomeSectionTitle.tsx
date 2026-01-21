import { Box } from "@mui/material";
import MainGradientText from "../common/MainGradientText";

const HomeSectionTitle = ({ text }: { text: string }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={(theme) => ({
          width: "8px",
          height: "14px",
          backgroundColor: "#339070",
          [theme.breakpoints.up("tablet")]: {
            width: "12px",
            height: "20px",
          },
        })}
      />
      <MainGradientText
        sx={(theme) => ({
          fontSize: "18px",
          fontFamily: "Freesentation-6-SemiBold",
          [theme.breakpoints.up("tablet")]: {
            fontSize: "28px",
          },
        })}
      >
        {text}
      </MainGradientText>
    </Box>
  );
};

export default HomeSectionTitle;
