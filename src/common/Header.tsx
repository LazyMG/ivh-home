import { Box } from "@mui/material";
import logo from "/images/common/ivh_logo.png";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        pl: 6,
        pt: 4,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          width: { mobile: 25, laptop: 35 },
          height: { mobile: 10, laptop: 15 },
        }}
      />
    </Box>
  );
};

export default Header;
