import { Box, Typography } from "@mui/material";

const ProductSectionTitle = ({ titleText }: { titleText: string }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={(theme) => ({
          display: "block",
          width: "8px",
          height: "16px",
          backgroundColor: "#00758F",
          [theme.breakpoints.up("tablet")]: { display: "none" },
        })}
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

export default ProductSectionTitle;
