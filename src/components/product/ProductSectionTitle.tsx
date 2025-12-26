import { Typography } from "@mui/material";

const ProductSectionTitle = ({ titleText }: { titleText: string }) => {
  return (
    <Typography
      variant="h5"
      sx={{
        fontFamily: "Freesentation-6-SemiBold",
        fontSize: "24px",
        mb: 4,
        letterSpacing: "4px",
      }}
    >
      {titleText}
    </Typography>
  );
};

export default ProductSectionTitle;
