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
      <img src={logo} width={35} height={15} alt="logo" />
    </Box>
  );
};

export default Header;
