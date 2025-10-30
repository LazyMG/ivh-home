import { Box, Typography } from "@mui/material";
import type { TextImageBoxProps } from "../../types/solution";

const TextImageBox = (textImageBoxProps: TextImageBoxProps) => {
  const { title, contents, imgurl, listHeader, imgText, width } =
    textImageBoxProps;

  return (
    <Box
      component="section"
      aria-label="content-section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        mt: 10,
      }}
    >
      <Typography variant="solutionTextTitleFont" component="p">
        {title}
      </Typography>
      {contents && (
        <Box
          sx={{
            mt: 1.5,
            mb: 4,
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
                    component="p"
                    variant="solutionTextFont"
                    sx={{
                      mr: 0.5,
                    }}
                  >
                    {listHeader}
                  </Typography>
                )}
                <Typography
                  component="p"
                  variant="solutionTextFont"
                  sx={{
                    mt: isSection && index !== 0 ? 2 : 0,
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
      {/** 이미지 하단에 텍스트가 있는 경우 추가 */}
      {imgurl?.map((img, index) => {
        const resolvedSrc = new URL(img, import.meta.url).href;
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={index}
          >
            <img
              src={resolvedSrc}
              alt={title}
              style={{
                maxWidth: "100%",
                width,
              }}
            />
            {imgText && (
              <Typography variant="solutionTextFont">{imgText}</Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default TextImageBox;
