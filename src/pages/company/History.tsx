import { Box, Stack, Typography } from "@mui/material";
import history from "../../data/company/history.json";
import ImageHeader from "../../components/company/ImageHeader";

const History = () => {
  const { history_list, history_title, history_image } = history;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ImageHeader imgUrl={history_image} />
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
            textTransform: "uppercase",
            whiteSpace: "pre-line",
            fontSize: "36px",
            fontFamily: "Freesentation-6-SemiBold",
            letterSpacing: "4px",
            color: "#3e3e45",
          }}
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
