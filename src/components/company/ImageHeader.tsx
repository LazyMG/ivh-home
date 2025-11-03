import { Box } from "@mui/material";

const ImageHeader = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundImage: `url(${imgUrl})`,
        width: "100%",
        height: "280px",
        backgroundPosition: "center",
        borderRadius: "16px",
        [theme.breakpoints.up("tablet")]: {
          m: 0,
          borderRadius: 0,
        },
      })}
    />
  );
};

export default ImageHeader;
