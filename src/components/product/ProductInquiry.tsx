import { Box, Typography } from "@mui/material";

const ProductInquiry = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "32%",
        right: "4%",
        width: "60px",
        height: "60px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        boxSizing: "border-box",
        borderRadius: "4px",
        p: 2,
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          textAlign: "center",
          fontSize: "16px",
          fontFamily: "Freesentation-6-SemiBold",
        }}
      >
        {"제품 문의"}
      </Typography>
    </Box>
  );
};

export default ProductInquiry;
