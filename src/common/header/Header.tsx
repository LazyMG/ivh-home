import { Box, AppBar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import { useState, useEffect } from "react";
import menu from "../../data/header/menu.json";
import { MainMenuBar } from "./MainMenuBar";
import { Drawer } from "./Drawer";

const Header = () => {
  const navigate = useLocalizedNavigate();
  const location = useLocation();
  const isHomePage = /^\/(en|ko)?\/?$/.test(location.pathname);

  // 어떤 메인 메뉴가 hover되어 열려있는지
  const [openMainMenu, setOpenMainMenu] = useState<string | null>(null);
  // 드로어 콘텐츠를 정렬할 x좌표 (상위 메뉴 위치 기준)
  const [anchorLeft, setAnchorLeft] = useState(0);

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setOpenMainMenu(null);
  }, [location.pathname]);

  const handleMainMenuClick = (title: string, left: number) => {
    setOpenMainMenu(title);
    setAnchorLeft(left);
  };

  const handleClose = () => {
    setOpenMainMenu(null);
  };

  return (
    <Box
      component="header"
      sx={{
        position: isHomePage ? "fixed" : "relative",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #00235F 0%, #03193F 100%)",
          boxShadow: "0 10px 7px 0 rgba(0,0,0,0.25)",
          p: 0,
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
          onMenuClick={handleMainMenuClick}
          openMainMenu={openMainMenu}
          onClose={handleClose}
        />
      </AppBar>

      {/* drawer 영역 */}
      {openMainMenu && (
        <>
          {/* 어두운 배경 오버레이 */}
          <Box
            onClick={handleClose}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 998,
            }}
          />
          <Drawer
            menuItems={menu.mainMenu}
            openMainMenu={openMainMenu}
            anchorLeft={anchorLeft}
            navigate={navigate}
            onClose={handleClose}
          />
        </>
      )}
    </Box>
  );
};

export default Header;
