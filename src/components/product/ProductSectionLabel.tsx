import { Typography, type SxProps, type Theme } from "@mui/material";

const ProductSectionLabel = ({
  title,
  sx,
}: {
  title: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Typography
      sx={[
        (theme) => ({
          fontFamily: "Freesentation-7-Bold",
          color: "#fff",
          backgroundColor: "#000",
          py: 0.5,
          borderRadius: "24px",
          textAlign: "center",
          fontSize: "20px",
          width: "160px",
          [theme.breakpoints.up("desktop")]: {
            fontSize: "29px",
            width: "256px",
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {title}
    </Typography>
  );
};

export default ProductSectionLabel;
