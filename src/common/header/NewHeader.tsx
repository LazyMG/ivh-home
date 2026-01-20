import { Box, AppBar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import menu from "../../data/header/menu.json";
import { NewMainMenuBar } from "./NewMainMenuBar";
import { NewDrawer } from "./NewDrawer";

const NewHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // 어떤 메인 메뉴가 hover되어 열려있는지
  const [openMainMenu, setOpenMainMenu] = useState<string | null>(null);

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setOpenMainMenu(null);
  }, [location.pathname]);

  const handleMainMenuHover = (title: string) => {
    setOpenMainMenu(title);
  };

  const handleClose = () => {
    setOpenMainMenu(null);
  };

  return (
    <Box
      component="header"
      onMouseLeave={handleClose}
      sx={{
        position: isHomePage ? "fixed" : "relative",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 1px rgba(0,0,0,0.05), 0 1px 1px rgba(0,0,0,0.1)",
          p: 0,
          maxWidth: "100vw",
          overflowX: "hidden",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <NewMainMenuBar
          menuItems={menu.mainMenu}
          isHomePage={isHomePage}
          navigate={navigate}
          onMenuHover={handleMainMenuHover}
          openMainMenu={openMainMenu}
        />
      </AppBar>

      {/* drawer 영역 */}
      {openMainMenu && (
        <NewDrawer
          menuItems={menu.mainMenu}
          openMainMenu={openMainMenu}
          navigate={navigate}
          onClose={handleClose}
        />
      )}
    </Box>
  );
};

export default NewHeader;
