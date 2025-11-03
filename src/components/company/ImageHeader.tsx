import { Box } from "@mui/material";

const ImageHeader = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imgUrl})`,
        width: "100%",
        height: "280px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default ImageHeader;
