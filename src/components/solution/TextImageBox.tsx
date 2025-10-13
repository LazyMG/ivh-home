import { Box, Typography } from "@mui/material";
import type { TextImageBoxProps } from "../../types/solution";

const TextImageBox = (textImageBoxProps: TextImageBoxProps) => {
  const { title, contents, imgurl, width, height } = textImageBoxProps;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        mt: 5,
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
      {contents && (
        <Typography
          sx={{
            fontFamily: "Freesentation-5-Medium",
            fontSize: "13px",
            mt: 1.5,
          }}
        >
          {contents.map((content, index) => {
            const isSection = /^[A-Z]\.\s/.test(content);
            return (
              <Typography
                key={index}
                component="div"
                sx={{
                  mt: isSection && index !== 0 ? 2 : 0,
                  wordBreak: "keep-all",
                }}
              >
                {content}
              </Typography>
            );
          })}
        </Typography>
      )}
      {imgurl.map((img, index) => {
        const resolvedSrc = new URL(img, import.meta.url).href;
        return (
          <img
            src={resolvedSrc}
            alt={title}
            key={index}
            width={width}
            height={height}
          />
        );
      })}
    </Box>
  );
};

export default TextImageBox;
