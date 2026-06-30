import { Box } from "@mui/material";
import search_icon from "/images/header/search_icon.png";

export const DrawerFixedArea = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          mt: 1,
          mb: 2,
          position: "relative",
          backgroundColor: "blue",
          height: "fit-content",
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            border: "2px solid #03193F",
            height: "40px",
            backgroundColor: "#ffffff",
            padding: "2px 24px 2px 8px",
            boxSizing: "border-box",
            fontSize: "16px",
          }}
        />
        <Box
          component="img"
          src={search_icon}
          sx={{
            position: "absolute",
            right: 10,
            top: 0,
            bottom: 0,
            my: "auto",
            width: "14px",
            height: "14px",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};
