import { Box, AppBar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import menu from "../../data/header/menu.json";
import { MainMenuBar } from "./MainMenuBar";
import { SubMenuDrawer } from "./SubMenuDrawer";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // 어떤 메인 메뉴가 클릭되어 열려있는지
  const [openMainMenu, setOpenMainMenu] = useState<string | null>(null);

  // 1단계 서브메뉴 중 어떤 것이 클릭되었는지
  const [openLevel1Menu, setOpenLevel1Menu] = useState<string | null>(null);

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setOpenMainMenu(null);
    setOpenLevel1Menu(null);
  }, [location.pathname]);

  const handleMainMenuClick = (title: string) => {
    if (openMainMenu === title) {
      // 같은 메뉴 클릭 시 닫기
      setOpenMainMenu(null);
      setOpenLevel1Menu(null);
    } else {
      // 다른 메뉴 클릭 시 열기
      setOpenMainMenu(title);
      setOpenLevel1Menu(null); // 1단계 메뉴 초기화
    }
  };

  const handleLevel1Click = (name: string) => {
    console.log("click");

    if (openLevel1Menu === name) {
      // 같은 1단계 메뉴 클릭 시 닫기
      setOpenLevel1Menu(null);
    } else {
      // 다른 1단계 메뉴 클릭 시 열기
      setOpenLevel1Menu(name);
    }
  };

  const handleClose = () => {
    setOpenMainMenu(null);
    setOpenLevel1Menu(null);
  };

  return (
    <Box
      component="header"
      onMouseLeave={() => {
        setOpenMainMenu(null);
        setOpenLevel1Menu(null);
      }}
      sx={{
        position: isHomePage ? "fixed" : "relative",
        width: "100%",
        // zIndex: isHomePage ? 1000 : 0,
        zIndex: 1000,
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
          onMenuClick={handleMainMenuClick}
          openMainMenu={openMainMenu}
        />
      </AppBar>

      {/* 서브메뉴 영역 */}
      {openMainMenu && (
        <SubMenuDrawer
          allMenuItems={menu.mainMenu}
          openedMenuIndex={menu.mainMenu.findIndex(
            (item) => item.title === openMainMenu
          )}
          isHomePage={isHomePage}
          navigate={navigate}
          openLevel1Menu={openLevel1Menu}
          onLevel1Click={handleLevel1Click}
          onClose={handleClose}
        />
      )}
    </Box>
  );
};

export default Header;
