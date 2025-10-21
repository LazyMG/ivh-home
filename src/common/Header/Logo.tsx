import { Box } from "@mui/material";
import logoBlack from "/images/common/ivh_logo_black.png";
import logoWhite from "/images/common/ivh_logo_white.png";

interface LogoProps {
  isHomePage: boolean;
  onClick: () => void;
}

export const Logo = ({ isHomePage, onClick }: LogoProps) => {
  return (
    <Box sx={{ cursor: "pointer" }} onClick={onClick}>
      <img
        src={isHomePage ? logoWhite : logoBlack}
        alt="logo"
        style={{ width: "64px", height: "27.4px" }}
      />
    </Box>
  );
};
