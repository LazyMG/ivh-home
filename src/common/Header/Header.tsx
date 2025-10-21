import { Box, AppBar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import menu from "../../data/header/menu.json";
import { MainMenuBar } from "./MainMenuBar";
import { SubMenuDrawer } from "./SubMenuDrawer";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: isHomePage ? "#000" : "#ffffff",
          boxShadow: "none",
          p: 0,
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <MainMenuBar
          menuItems={menu.mainMenu}
          isHomePage={isHomePage}
          navigate={navigate}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        />
      </AppBar>

      {/* 하단 서브메뉴 영역 */}
      {isMenuOpen && (
        <SubMenuDrawer
          menuItems={menu.mainMenu}
          isHomePage={isHomePage}
          navigate={navigate}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        />
      )}
    </Box>
  );
};

export default Header;
