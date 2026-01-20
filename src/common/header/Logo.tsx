import { Box } from "@mui/material";
import logoBlack from "/images/header/ivh_logo_black.png";

interface LogoProps {
  onClick: () => void;
}

export const Logo = ({ onClick }: LogoProps) => {
  return (
    <Box sx={{ cursor: "pointer" }} onClick={onClick}>
      <img
        src={logoBlack}
        alt="logo"
        style={{ width: "64px", height: "27.4px" }}
      />
    </Box>
  );
};
