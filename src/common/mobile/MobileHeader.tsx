import { useState, useEffect, useRef } from "react";
import { AppBar, IconButton, Box, Typography, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoWhite from "/images/header/ivh_logo_white.png";
import logoBlack from "/images/header/ivh_logo_black.png";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import menu from "../../data/header/menu.json";
import { getHeaderTheme } from "../../theme/headerTheme";
import youtubeWhite from "/images/header/youtube_white.png";
import linkedinWhite from "/images/header/linkedin_white.png";
import youtubeBlack from "/images/header/youtube_black.png";
import linkedinBlack from "/images/header/linkedin_black.png";
import { MobileMenuRecursive } from "./MobileMenuRecursive";

const MobileHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuDrawerRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === "/";
  const theme = getHeaderTheme(isHomePage);

  // 메뉴가 열렸을 때 바디 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      // 메뉴 드로어 초기 위치로 이동
      if (menuDrawerRef.current) {
        menuDrawerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 모바일 상단 바 */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.background,
          boxShadow: "none",
          p: 2,
          zIndex: 1100,
          borderBottom: isHomePage ? "2px solid #312f2f" : "2px solid #e0e0e0",
        }}
      >
        {/* 햄버거 아이콘 */}
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          sx={{ color: theme.text, position: "absolute", left: 8 }}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* 로고 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
          >
            <img
              src={isHomePage ? logoWhite : logoBlack}
              alt="logo"
              style={{ width: "64px", height: "27.4px" }}
            />
          </Box>
        </Box>
      </AppBar>

      {/* 햄버거 메뉴 드로어 */}
      <MobileMenuDrawer
        ref={menuDrawerRef}
        $isOpen={isMenuOpen}
        $isHomePage={isHomePage}
      >
        {menu.mainMenu.map((mainItem, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            {/* 메인 메뉴 타이틀 */}
            <MobileMainMenuTitle
              onClick={() => {
                if (mainItem.path) {
                  navigate(mainItem.path);
                  handleClose();
                }
              }}
              $isActive={
                mainItem.path && location.pathname.startsWith(mainItem.path)
                  ? true
                  : false
              }
              $isHomePage={isHomePage}
            >
              {mainItem.title}
            </MobileMainMenuTitle>

            {/* 서브메뉴 (재귀적) */}
            {mainItem.subMenu && mainItem.subMenu.length > 0 && (
              <Box sx={{ mt: 1 }}>
                <MobileMenuRecursive
                  items={mainItem.subMenu}
                  isHomePage={isHomePage}
                  navigate={navigate}
                  onClose={handleClose}
                />
              </Box>
            )}

            {index < menu.mainMenu.length - 1 && (
              <Divider
                sx={{
                  mt: 2,
                  borderColor: isHomePage
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
          </Box>
        ))}

        {/* 소셜 미디어 영역 */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${
              isHomePage ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }`,
          }}
        >
          <img
            src={isHomePage ? youtubeWhite : youtubeBlack}
            alt="youtube"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.youtube.com/@koreaelec", "_blank")
            }
          />
          <img
            src={isHomePage ? linkedinWhite : linkedinBlack}
            alt="linkedin"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://kr.linkedin.com/company/ivhkr?trk=public_post_feed-actor-image",
                "_blank"
              )
            }
          />
        </Box>
      </MobileMenuDrawer>

      {/* 오버레이 (메뉴 열렸을 때 배경 어둡게) */}
      {isMenuOpen && (
        <Box
          onClick={() => setIsMenuOpen(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

// 모바일 전용 스타일들
const MobileMenuDrawer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$isOpen" && prop !== "$isHomePage",
})<{
  $isOpen: boolean;
  $isHomePage: boolean;
}>(({ $isOpen, $isHomePage }) => {
  const theme = getHeaderTheme($isHomePage);

  return {
    position: "fixed",
    top: 0,
    left: 0,
    width: "80%",
    maxWidth: "400px",
    height: "100vh",
    boxSizing: "border-box",
    backgroundColor: theme.background,
    transform: $isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease",
    zIndex: 1050,
    padding: "80px 24px 24px 24px",
    overflowY: "auto",
    overflowX: "hidden",

    // 스크롤바 스타일
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: $isHomePage ? "#1a1a1a" : "#f0f0f0",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: $isHomePage ? "#4a4a4a" : "#d0d0d0",
      borderRadius: "4px",
      "&:hover": {
        backgroundColor: $isHomePage ? "#666" : "#b0b0b0",
      },
    },
  };
});

const MobileMainMenuTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$isActive" && prop !== "$isHomePage",
})<{
  $isActive?: boolean;
  $isHomePage: boolean;
}>(({ $isActive, $isHomePage }) => {
  const theme = getHeaderTheme($isHomePage);

  return {
    color: theme.text,
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "8px",
    paddingBottom: "8px",
    borderBottom: $isActive
      ? `2px solid ${theme.text}`
      : `2px solid ${$isHomePage ? "#333" : "#e0e0e0"}`,
    transition: "all 0.2s ease",

    "&:hover": {
      opacity: 0.8,
    },
  };
});

export default MobileHeader;
