import { Box, Stack, Typography } from "@mui/material";
import history from "../../data/company/history.json";
import ImageHeader from "../../components/company/ImageHeader";

const History = () => {
  const { history_list, history_title, history_image } = history;
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
        <ImageHeader imgUrl={history_image} />
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
            textTransform: "uppercase",
            whiteSpace: "pre-line",
            fontFamily: "Freesentation-6-SemiBold",
            letterSpacing: "4px",
            color: "#3e3e45",
            fontSize: "24px",
            [theme.breakpoints.up("tablet")]: {
              fontSize: "28px",
            },
            [theme.breakpoints.up("desktop")]: {
              fontSize: "36px",
            },
          })}
        >
          {history_title}
        </Typography>
        <Stack gap={4}>
          {history_list.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "Freesentation-6-SemiBold",
                }}
              >
                {item.year}
              </Typography>
              <Box>
                {item.contents.map((content, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: "#acacacff",
                      fontFamily: "Freesentation-5-Medium",
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
