import { Box } from "@mui/material";

const ImageHeader = ({
  imgUrl,
  imgPosition,
}: {
  imgUrl: string;
  imgPosition: string;
}) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundImage: `url(${imgUrl})`,
        width: "100%",
        height: "457px",
        backgroundPosition: imgPosition,
        borderRadius: "16px",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.up("tablet")]: {
          m: 0,
          borderRadius: 0,
        },
      })}
    />
  );
};

export default ImageHeader;
