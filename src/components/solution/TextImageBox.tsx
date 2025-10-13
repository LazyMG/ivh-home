import { Box, Typography } from "@mui/material";
import type { TextImageBoxProps } from "../../types/solution";

const TextImageBox = (textImageBoxProps: TextImageBoxProps) => {
  const { title, contents, imgurl, width, height, listHeader } =
    textImageBoxProps;

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
        <Box
          sx={{
            mt: 1.5,
          }}
        >
          {contents.map((content, index) => {
            const isSection = /^[A-Z]\.\s/.test(content);
            return (
              <Box
                key={index}
                sx={{ mt: isSection && index !== 0 ? 2 : 0, display: "flex" }}
              >
                {listHeader && !isSection && (
                  <Typography
                    sx={{
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: "13px",
                      mr: 0.5,
                    }}
                  >
                    {listHeader}
                  </Typography>
                )}
                <Typography
                  sx={{
                    mt: isSection && index !== 0 ? 2 : 0,
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "13px",
                    wordBreak: "keep-all",
                  }}
                >
                  {content}
                </Typography>
              </Box>
            );
          })}
        </Box>
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
