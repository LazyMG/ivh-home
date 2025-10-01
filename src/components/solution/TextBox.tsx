import { Box, Typography } from "@mui/material";
import type { TextBoxProps } from "../../types/solution";

const TextBox = (textBoxProps: TextBoxProps) => {
  const { title, contents, imgurl, marginTop } = textBoxProps;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        mt: marginTop ? marginTop : 5,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Freesentation-7-Bold",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Freesentation-5-Medium",
          fontSize: "13px",
          mt: 1.5,
        }}
      >
        {contents}
      </Typography>
      {imgurl && <img src={imgurl} alt={title} />}
    </Box>
  );
};

export default TextBox;
