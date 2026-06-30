import { Box, Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

const LibrarySectionTitle = ({ titleText }: { titleText: string }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          display: "block",
          width: "6px",
          height: "20px",
          backgroundColor: "#00758F",
        }}
      />
      <Typography
        sx={(theme) => ({
          fontFamily: FONTS.freesentation.medium,
          fontSize: "24px",
          letterSpacing: "2px",
          [theme.breakpoints.up("tablet")]: {
            fontFamily: FONTS.freesentation.semiBold,
            fontSize: "32px",
            letterSpacing: "4px",
          },
        })}
      >
        {titleText}
      </Typography>
    </Box>
  );
};

export default LibrarySectionTitle;
