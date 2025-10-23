import { Box, Typography } from "@mui/material";
import type { OutlineProps } from "../../types/product";

const Outline = ({ outline, imgObj }: OutlineProps) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: imgObj ? 5 : 3,
        [theme.breakpoints.up("tablet")]: {
          gap: imgObj ? 8 : 3,
        },
        [theme.breakpoints.up("laptop")]: {
          gap: imgObj ? 12 : 3,
        },
      })}
    >
      {outline.map((sentence, index) => (
        <Typography
          variant="solutionTextFont"
          key={index}
          sx={{ wordBreak: "keep-all", whiteSpace: "pre-wrap" }}
        >
          {sentence}
        </Typography>
      ))}
      {/** 이미지가 있는 개요 영역일 경우 이미지 출력 */}
      {imgObj?.imgs.map((obj, index) => {
        const resolvedSrc = new URL(obj.imgUrl, import.meta.url).href;
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
            key={index}
          >
            <img
              src={resolvedSrc}
              alt={obj.imgUrl}
              style={{
                maxWidth: "100%",
                width: "800px",
              }}
            />
            {obj.imgText && (
              <Typography
                variant="solutionTextFont"
                sx={{ width: "fit-content" }}
              >
                {obj.imgText}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Outline;
