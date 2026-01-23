import { Box, Typography } from "@mui/material";

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
          fontFamily: "Freesentation-5-Medium",
          fontSize: "24px",
          letterSpacing: "2px",
          [theme.breakpoints.up("tablet")]: {
            fontFamily: "Freesentation-6-SemiBold",
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
