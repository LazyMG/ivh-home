import { AppBar, IconButton, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoWhite from "/images/common/ivh_logo_white.png";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import menu from "../data/header/menu.json";
import { useState } from "react";

const MobileHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 열림/닫힘

  return (
    <>
      {/* 모바일 상단 바 */}
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#000", boxShadow: "none", p: 2, zIndex: 1100 }}
      >
        {/* 햄버거 아이콘 */}
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          sx={{ color: "#fff", position: "absolute", left: 0 }}
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
          <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <img
              src={logoWhite}
              alt="logo"
              style={{ width: "64px", height: "27.4px" }}
            />
          </Box>
        </Box>
      </AppBar>

      {/* 햄버거 메뉴 드로어 */}
      <MobileMenuDrawer $isOpen={isMenuOpen}>
        {menu.mainMenu.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            {/* 메뉴 타이틀 */}
            <MobileMenuTitle
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false);
              }}
              $isActive={location.pathname.startsWith(item.path)}
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
                          <MobileColumnTitle>{column.title}</MobileColumnTitle>
                          {column.items?.map((subItem) => (
                            <MobileMenuItem
                              key={subItem.name}
                              onClick={() => {
                                navigate(subItem.path);
                                setIsMenuOpen(false);
                              }}
                              disabled={subItem.disabled}
                            >
                              {subItem.name}
                            </MobileMenuItem>
                          ))}
                        </>
                      )}
                      {column.subColumns?.map((subCol) => (
                        <Box key={subCol.title} sx={{ mb: 2 }}>
                          <MobileColumnTitle>{subCol.title}</MobileColumnTitle>
                          {subCol.items?.map((subItem) => (
                            <MobileMenuItem
                              key={subItem.name}
                              onClick={() => {
                                navigate(subItem.path);
                                setIsMenuOpen(false);
                              }}
                              disabled={subItem.disabled}
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
                    >
                      {subItem.name}
                    </MobileMenuItem>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        ))}
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
const MobileMenuDrawer = styled(Box)<{ $isOpen: boolean }>(({ $isOpen }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "80%",
  maxWidth: "400px",
  height: "100vh", // 전체 화면 높이
  backgroundColor: "#000",
  transform: $isOpen ? "translateX(0)" : "translateX(-100%)",
  transition: "transform 0.3s ease",
  zIndex: 1050,
  padding: "80px 24px 24px 24px", // 상단 바 공간 확보
  overflowY: "auto", // 세로 스크롤 활성화
  overflowX: "hidden",

  // 파이어폭스용 - 스크롤바를 얇게 만들고 자동으로 숨김
  scrollbarWidth: "thin",
  scrollbarColor: "transparent transparent",

  // 스크롤바 호버 시 보이기 (파이어폭스)
  "&:hover": {
    scrollbarColor: "#4a4a4a #1a1a1a",
  },

  // 웹킷 브라우저용 - 기본 스크롤바 숨김
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent", // 기본적으로 투명
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent", // 기본적으로 투명
    borderRadius: "4px",
  },

  // 스크롤 시 스크롤바 보이기 (웹킷)
  "&:hover::-webkit-scrollbar-track": {
    backgroundColor: "#1a1a1a",
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "#4a4a4a",
  },
  "&:hover::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#666",
  },
}));

const MobileMenuTitle = styled(Typography)<{ $isActive?: boolean }>(
  ({ $isActive }) => ({
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Freesentation-7-Bold",
    cursor: "pointer",
    marginBottom: "8px",
    paddingBottom: "8px",
    borderBottom: $isActive ? "2px solid #1d4ed8" : "2px solid #333",
  })
);

const MobileColumnTitle = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "8px",
  marginTop: "8px",
  fontFamily: "Freesentation-6-SemiBold",
});

const MobileMenuItem = styled(Typography)<{ disabled?: boolean }>(
  ({ disabled }) => ({
    color: disabled ? "#6b7280" : "#fff",
    fontSize: "13px",
    marginBottom: "6px",
    cursor: disabled ? "default" : "pointer",
    fontFamily: "Freesentation-4-Regular",
    paddingLeft: "8px",
    "&:hover": {
      opacity: disabled ? 1 : 0.7,
    },
  })
);

export default MobileHeader;
