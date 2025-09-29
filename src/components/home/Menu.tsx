import { Box, Divider, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import MenuList from "./MenuList";

const Menu = () => {
  return (
    <Box
      component="nav"
      sx={{
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          color: "white",
          fontSize: "0.8rem",
          width: "100%",
          padding: "4rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.8rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "0.6rem",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "0.8rem",
              color: "#6d6d6d",
              alignSelf: "center",
              lineHeight: "0",
              fontFamily: "Presentaition",
              fontWeight: "700",
            }}
          >
            ENG
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "white", height: "10px" }}
          />
          <Typography
            component="p"
            sx={{
              fontSize: "0.8rem",
              alignSelf: "center",
              lineHeight: "0",
              fontFamily: "Presentaition",
              fontWeight: "700",
            }}
          >
            KOR
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "100%",
            backgroundColor: "#003ff1",
            width: "25px",
            height: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuIcon fontSize="small" />
        </Box>
      </Box>
      <MenuList />
    </Box>
  );
};

export default Menu;
