import { Box, Button, AppBar, Typography } from "@mui/material";
import logoBlack from "/images/common/ivh_logo_black.png";
import logoWhite from "/images/common/ivh_logo_white.png";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const renderNavBarButton = (text: string, path: string) => {
    const isActive = location.pathname.startsWith(path);

    return (
      <NavBarButton
        disableRipple
        onClick={() => navigate(path)}
        $isActive={location.pathname.startsWith(path)}
        isHomePage={isHomePage}
      >
        <Typography
          sx={{
            fontFamily: "Freesentation-7-Bold",
            fontSize: "20px",
            fontWeight: "bold",
            color: isActive ? "#1d4ed8" : isHomePage ? "white" : "black",
          }}
        >
          {text}
        </Typography>
      </NavBarButton>
    );
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: isHomePage ? "transparent" : "white",
        boxShadow: "none",
        p: { xs: "20px", lg: "28px" }, // 반응형 패딩
        ...(isHomePage && {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }),
      }}
    >
      <Box
        sx={{
          width: "100%",
          mx: "auto", // 중앙 정렬
          maxWidth: {
            xs: "100%", // 모바일: 전체 너비
            sm: "640px", // 640px 이상
            md: "768px", // 768px 이상
            lg: "1024px", // 1024px 이상
            xl: "1536px", // 1280px 이상
          },
          position: "relative", // absolute 네비게이션을 위한 기준점
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // 로고 왼쪽, 언어선택 오른쪽
        }}
      >
        {/* 로고 */}
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          {isHomePage ? (
            <img
              src={logoWhite}
              alt="logo"
              style={{ width: "64px", height: "27.4px" }}
            />
          ) : (
            <img
              src={logoBlack}
              alt="logo"
              style={{ width: "64px", height: "27.4px" }}
            />
          )}
        </Box>
        {/* 네비게이션 */}
        <Box
          component="nav"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "40px",
          }}
        >
          {renderNavBarButton("PRODUCT", "/product")}
          {renderNavBarButton("SOLUTION", "/solution")}
          {renderNavBarButton("SERVICE", "/service")}
          {renderNavBarButton("COMPANY", "/company")}
        </Box>
        {/* 언어 전환 버튼  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            color: "black",
          }}
        >
          <Box component="span" sx={{ cursor: "pointer" }}>
            <Typography sx={{ color: isHomePage ? "white" : "black" }}>
              KOR
            </Typography>
          </Box>
          <Box
            sx={{
              width: "1px",
              height: "14px",
              backgroundColor: isHomePage ? "white" : "#71717a",
            }}
          />
          <Box component="span" sx={{ cursor: "pointer", opacity: 0.3 }}>
            <Typography sx={{ color: isHomePage ? "white" : "black" }}>
              ENG
            </Typography>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

const NavBarButton = styled(Button)<{
  $isActive: boolean;
  isHomePage: boolean;
}>(({ $isActive, isHomePage }) => ({
  color: $isActive ? "#1d4ed8" : "black",
  padding: 0,
  backgroundColor: "transparent",
  borderRadius: 0,
  // 활성화 상태 밑줄 (항상 존재하지만 투명도로 제어)
  "&::after": {
    content: '""', // 가상 요소니까 빈 내용
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    backgroundColor: isHomePage ? "white" : $isActive ? "#1d4ed8" : "#000",
    opacity: $isActive ? 1 : 0, // 활성화 시에만 보임
    transition: "opacity 0.3s ease",
  },

  "&:hover": {
    // 호버시 밑줄 나타나게 요소 뒤에 가상 요소 추가
    "&::after": {
      opacity: 1, // hover시에 밑줄
    },
  },
}));

export default Header;
