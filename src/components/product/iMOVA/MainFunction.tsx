import { Box, Paper, Typography } from "@mui/material";

type IMOVAMainFunction = {
  function_list: {
    function_title: string;
    function_description: string;
    function_image_url: string;
  }[];
};

const MainFunction = ({ function_list }: IMOVAMainFunction) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: 6,
        flexDirection: "column",
        [theme.breakpoints.up("tablet")]: {
          flexDirection: "row",
          gap: 6,
        },
        [theme.breakpoints.up("desktop")]: {
          flexDirection: "row",
          gap: 16,
        },
      })}
    >
      {function_list.map((func, index) => (
        <Paper
          elevation={3}
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
            boxSizing: "border-box",
            width: "290px",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={func.function_image_url}
            sx={{
              mb: 3,
              objectFit: "contain",
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Freesentation-7-Bold",
                mb: 2,
                textAlign: "center",
              }}
            >
              {func.function_title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                lineHeight: 1.6,
                fontFamily: "Freesentation-5-Medium",
                fontSize: "16px",
              }}
            >
              {func.function_description}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};
export default MainFunction;
