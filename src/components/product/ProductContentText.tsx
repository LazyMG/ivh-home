import { Typography } from "@mui/material";

const ProductContentText = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <>
      <Typography
        sx={(theme) => ({
          fontSize: "18px",
          fontFamily: "Freesentation-6-SemiBold",
          color: "#00758F",
          [theme.breakpoints.up("tablet")]: {
            color: "#000000",
            fontSize: "24px",
          },
        })}
      >
        {title}
      </Typography>
      <Typography
        sx={(theme) => ({
          fontSize: "16px",
          fontFamily: "Freesentation-5-Medium",
          whiteSpace: "pre-wrap",
          color: "#737373",
          [theme.breakpoints.up("tablet")]: {
            color: "#424242",
          },
        })}
      >
        {text}
      </Typography>
    </>
  );
};

export default ProductContentText;
