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
        height: "640px",
        backgroundPosition: imgPosition,
        borderRadius: "16px",
        [theme.breakpoints.up("tablet")]: {
          m: 0,
          borderRadius: 0,
          marginTop: "-2%",
        },
      })}
    />
  );
};

export default ImageHeader;
