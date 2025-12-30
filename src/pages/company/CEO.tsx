import { Box, Stack, Typography } from "@mui/material";

import ceo from "../../data/company/ceo.json";
import ImageHeader from "../../components/company/ImageHeader";

const CEO = () => {
  const {
    ceo_image,
    ceo_title,
    ceo_contents,
    ceo_footer,
    ceo_color,
    ceo_image_position,
  } = ceo;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={(theme) => ({
          px: "20px",
          pt: "20px",
          [theme.breakpoints.up("tablet")]: {
            p: 0,
          },
        })}
      >
        <ImageHeader imgUrl={ceo_image} imgPosition={ceo_image_position} />
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 6,
          my: 10,
          px: "20px",
          pt: "20px",
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            pt: "50px",
            px: 40,
          },
        })}
      >
        <Typography
          sx={(theme) => ({
            whiteSpace: "pre-line",
            fontFamily: "Freesentation-6-SemiBold",
            wordBreak: "keep-all",
            color: ceo_color,
            fontSize: "24px",
            [theme.breakpoints.up("tablet")]: {
              fontSize: "28px",
            },
            [theme.breakpoints.up("desktop")]: {
              fontSize: "40px",
            },
          })}
        >
          {ceo_title}
        </Typography>
        <Stack gap={3}>
          {ceo_contents.map((content, index) => (
            <Typography
              key={index}
              sx={{
                whiteSpace: "pre-line",
                fontSize: "18px",
                color: "#2A2A2A",
                fontFamily: "Freesentation-4-Regular",
                wordBreak: "keep-all",
              }}
            >
              {content}
            </Typography>
          ))}
        </Stack>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "Freesentation-6-SemiBold",
            color: "#2A2A2A",
          }}
        >
          {ceo_footer}
        </Typography>
      </Box>
    </Box>
  );
};

export default CEO;
