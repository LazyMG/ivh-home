import { Box, Typography } from "@mui/material";
import type { TextBoxProps } from "../../types/solution";

const TextBox = (textBoxProps: TextBoxProps) => {
  const { title, contents, imgurl, marginTop } = textBoxProps;
  return (
    <Box
      component="section"
      aria-label="content-section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        mt: marginTop || 10,
      }}
    >
      <Typography variant="solutionTextTitleFont">{title}</Typography>
      <Typography
        variant="solutionTextFont"
        sx={{
          mt: 1.5,
          wordBreak: "keep-all",
        }}
      >
        {contents}
      </Typography>
      {imgurl && <img src={imgurl} alt={title} />}
    </Box>
  );
};

export default TextBox;
