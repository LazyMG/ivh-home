import { Box, Stack, Typography } from "@mui/material";

import ceo from "../../data/company/ceo.json";
import ImageHeader from "../../components/company/ImageHeader";

const CEO = () => {
  const { ceo_image, ceo_title, ceo_contents, ceo_footer } = ceo;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ImageHeader imgUrl={ceo_image} />
      <Box
        sx={{
          px: 40,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          my: 10,
        }}
      >
        <Typography
          sx={{
            whiteSpace: "pre-line",
            fontSize: "36px",
            fontFamily: "Freesentation-6-SemiBold",
            color: "#3e3e45",
          }}
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
                color: "#acacacff",
                fontFamily: "Freesentation-5-Medium",
              }}
            >
              {content}
            </Typography>
          ))}
        </Stack>
        <Typography
          sx={{ fontSize: "18px", fontFamily: "Freesentation-6-SemiBold" }}
        >
          {ceo_footer}
        </Typography>
      </Box>
    </Box>
  );
};

export default CEO;
