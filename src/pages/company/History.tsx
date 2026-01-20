import { Box, Stack, Typography } from "@mui/material";
import history from "../../data/company/history.json";
import ImageHeader from "../../components/company/ImageHeader";

const History = () => {
  const {
    history_list,
    history_title,
    history_image,
    history_color,
    history_image_position,
  } = history;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: 20 }}>
      <Box
        sx={(theme) => ({
          px: "20px",
          display: "none",
          [theme.breakpoints.up("tablet")]: {
            p: 0,
            display: "block",
          },
        })}
      >
        <ImageHeader
          imgUrl={history_image}
          imgPosition={history_image_position}
        />
      </Box>

      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 4,
          my: 10,
          px: "20px",
          pt: 0,
          [theme.breakpoints.up("tablet")]: {
            px: 10,
            gap: 6,
            pt: "20px",
          },
          [theme.breakpoints.up("desktop")]: {
            pt: "50px",
            px: 40,
          },
        })}
      >
        <Typography
          sx={(theme) => ({
            textTransform: "uppercase",
            whiteSpace: "pre-line",
            fontFamily: "Freesentation-7-Bold",
            color: history_color,
            fontSize: "24px",
            [theme.breakpoints.up("tablet")]: {
              fontSize: "28px",
            },
            [theme.breakpoints.up("desktop")]: {
              fontSize: "40px",
            },
          })}
        >
          {history_title}
        </Typography>
        <Stack
          sx={{
            gap: 8,
          }}
        >
          {history_list.map((item, index) => (
            <Box
              key={index}
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 0,
                [theme.breakpoints.up("desktop")]: {
                  gap: 2,
                },
              })}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Freesentation-7-Bold",
                  color: history_color,
                }}
              >
                {item.year}
              </Typography>
              <Box>
                {item.contents.map((content, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: "#2A2A2A",
                      fontFamily: "Freesentation-4-Regular",
                      whiteSpace: "pre-line",
                      fontSize: "18px",
                    }}
                  >
                    {content}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default History;
