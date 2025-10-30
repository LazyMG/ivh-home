import { Box, Typography } from "@mui/material";
import type { ProductTextImageBoxProps } from "../../types/product";

const ProductTextImageBox = (textImageBoxProps: ProductTextImageBoxProps) => {
  const { title, contents, width, imgObj } = textImageBoxProps;

  return (
    <Box
      component="section"
      aria-label="outline-content"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        mt: 6,
        [theme.breakpoints.up("tablet")]: {
          mt: 8,
        },
        [theme.breakpoints.up("desktop")]: {
          mt: 10,
        },
      })}
    >
      <Typography
        variant="solutionTextTitleFont"
        component="p"
        sx={{ wordBreak: "keep-all" }}
      >
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
      {imgObj && (
        <Box
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            flexDirection: imgObj.imgLayout || "column",
            alignItems: "center",
            gap: imgObj.imgLayout ? 0 : 4,
            justifyContent: imgObj.imgPosition || "center",
            mt: 0,
            [theme.breakpoints.up("tablet")]: {
              mt: 6,
            },
            [theme.breakpoints.up("desktop")]: {
              mt: 8,
            },
          })}
        >
          {imgObj.imgs.map((obj, index) => {
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
                  alt={title}
                  style={{
                    maxWidth: "100%",
                    width: obj.imgWidth || width,
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
      )}
    </Box>
  );
};

export default ProductTextImageBox;
