import { useState, useEffect, useRef } from "react";
import {
  AppBar,
  IconButton,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoWhite from "/images/header/ivh_logo_white.png";
import logoBlack from "/images/header/ivh_logo_black.png"; // 추가
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import menu from "../data/header/menu.json";
import { getHeaderTheme } from "../theme/headerTheme"; // 추가
import youtubeWhite from "/images/header/youtube_white.png";
import linkedinWhite from "/images/header/linkedin_white.png";
import youtubeBlack from "/images/header/youtube_black.png";
import linkedinBlack from "/images/header/linkedin_black.png";

const MobileHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTablets = useMediaQuery("(min-height: 1025px)");
  const menuDrawerRef = useRef<HTMLDivElement>(null);

  // 홈 페이지 여부 확인
  const isHomePage = location.pathname === "/";
  const theme = getHeaderTheme(isHomePage);

  // 메뉴가 열렸을 때 바디 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
      // 메뉴 드로어 초기 위치로 이동
      if (menuDrawerRef.current) {
        menuDrawerRef.current.scrollTop = 0;
      }
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* 모바일 상단 바 */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.background, // #000 대신 테마 색상
          boxShadow: "none",
          p: 2,
          zIndex: 1100,
        }}
      >
        {/* 햄버거 아이콘 */}
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          sx={{ color: theme.text, position: "absolute", left: 0 }} // #fff 대신 테마 색상
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* 로고 */}
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
          >
            <img
              src={isHomePage ? logoWhite : logoBlack} // 페이지에 따라 로고 변경
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
        $isTablets={isTablets}
      >
        {/* prop 추가 */}
        {menu.mainMenu.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            {/* 메뉴 타이틀 */}
            <MobileMenuTitle
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false);
              }}
              $isActive={location.pathname.startsWith(item.path)}
              $isHomePage={isHomePage}
            >
              {item.title}
            </MobileMenuTitle>

            {/* 서브메뉴 */}
            <Box sx={{ pl: 2, mt: 1 }}>
              {item?.columns ? (
                <Box>
                  {item.columns.map((column, colIndex) => (
                    <Box key={colIndex} sx={{ mb: 2 }}>
                      {column.title && (
                        <>
                          <MobileColumnTitle $isHomePage={isHomePage}>
                            {column.title}
                          </MobileColumnTitle>
                          {column.items?.map((subItem) => (
                            <MobileMenuItem
                              key={subItem.name}
                              onClick={() => {
                                navigate(subItem.path);
                                setIsMenuOpen(false);
                              }}
                              disabled={subItem.disabled}
                              $isHomePage={isHomePage}
                            >
                              {subItem.name}
                            </MobileMenuItem>
                          ))}
                        </>
                      )}
                      {column.subColumns?.map((subCol) => (
                        <Box key={subCol.title} sx={{ mb: 2 }}>
                          <MobileColumnTitle $isHomePage={isHomePage}>
                            {subCol.title}
                          </MobileColumnTitle>
                          {subCol.items?.map((subItem) => (
                            <MobileMenuItem
                              key={subItem.name}
                              onClick={() => {
                                navigate(subItem.path);
                                setIsMenuOpen(false);
                              }}
                              disabled={subItem.disabled}
                              $isHomePage={isHomePage}
                            >
                              {subItem.name}
                            </MobileMenuItem>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  ))}
                </Box>
              ) : (
                <Box>
                  {item?.items?.map((subItem) => (
                    <MobileMenuItem
                      key={subItem.name}
                      onClick={() => {
                        navigate(subItem.path);
                        setIsMenuOpen(false);
                      }}
                      disabled={subItem.disabled}
                      $isHomePage={isHomePage}
                    >
                      {subItem.name}
                    </MobileMenuItem>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        ))}
        {/* 소셜 미디어 영역 */}
        <Box
          sx={{
            position: isTablets ? "absolute" : "none",
            bottom: isTablets ? "24px" : 0,
            left: isTablets ? "24px" : 0,
            display: "flex",
            gap: 2,
            mt: isTablets ? 0 : 4,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            src={isHomePage ? youtubeWhite : youtubeBlack}
            alt="youtube"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.youtube.com/@ivhkorea", "_blank")
            }
          />
          <img
            src={isHomePage ? linkedinWhite : linkedinBlack}
            alt="linkedin"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.linkedin.com/company/ivhkr", "_blank")
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
const MobileMenuDrawer = styled(Box)<{
  $isOpen: boolean;
  $isHomePage: boolean;
  $isTablets: boolean;
}>(({ $isOpen, $isHomePage }) => {
  // prop 추가
  const theme = getHeaderTheme($isHomePage);

  return {
    position: "fixed",
    top: 0,
    left: 0,
    width: "80%",
    maxWidth: "400px",
    height: "100vh",
    boxSizing: "border-box",
    backgroundColor: theme.background, // #000 대신 테마 색상
    transform: $isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease",
    zIndex: 1050,
    padding: "80px 24px 24px 24px",
    overflowY: "auto",
    overflowX: "hidden",

    scrollbarWidth: "thin",
    scrollbarGutter: "stable",

    "&:hover": {
      scrollbarColor: $isHomePage ? "#4a4a4a #1a1a1a" : "#d0d0d0 #f0f0f0",
    },
    "&::-webkit-scrollbar": {
      width: "8px",
      position: "absolute",
    },
    // 스크롤바 트랙 (배경)
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    // 스크롤바 썸 (드래그 부분)
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      borderRadius: "4px",
    },
    "&:hover::-webkit-scrollbar-track": {
      backgroundColor: $isHomePage ? "#1a1a1a" : "#f0f0f0",
    },
    "&:hover::-webkit-scrollbar-thumb": {
      backgroundColor: $isHomePage ? "#4a4a4a" : "#d0d0d0",
    },
    "&:hover::-webkit-scrollbar-thumb:hover": {
      backgroundColor: $isHomePage ? "#666" : "#b0b0b0",
    },
  };
});

const MobileMenuTitle = styled(Typography)<{
  $isActive?: boolean;
  $isHomePage: boolean;
}>(({ $isActive, $isHomePage }) => {
  // prop 추가
  const theme = getHeaderTheme($isHomePage);

  return {
    color: theme.text, // #fff 대신 테마 색상
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Freesentation-7-Bold",
    cursor: "pointer",
    marginBottom: "8px",
    paddingBottom: "8px",
    borderBottom: $isActive
      ? `2px solid #000000`
      : `2px solid ${$isHomePage ? "#333" : "#e0e0e0"}`,
  };
});

const MobileColumnTitle = styled(Typography)<{ $isHomePage: boolean }>( // prop 추가
  ({ $isHomePage }) => {
    const theme = getHeaderTheme($isHomePage);

    return {
      color: theme.text, // #fff 대신 테마 색상
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "8px",
      marginTop: "8px",
      fontFamily: "Freesentation-6-SemiBold",
    };
  }
);

const MobileMenuItem = styled(Typography)<{
  disabled?: boolean;
  $isHomePage: boolean;
}>(({ disabled, $isHomePage }) => {
  // prop 추가
  const theme = getHeaderTheme($isHomePage);

  return {
    color: disabled ? theme.submenu.disabled : theme.submenu.active,
    fontSize: "13px",
    marginBottom: "6px",
    cursor: disabled ? "default" : "pointer",
    fontFamily: "Freesentation-4-Regular",
    paddingLeft: "8px",
    "&:hover": {
      opacity: disabled ? 1 : 0.7,
    },
  };
});

export default MobileHeader;
