import { useState, useEffect } from "react";
import { AppBar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoWhite from "/images/header/ivh_logo_white.png";
import { useLocation } from "react-router-dom";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import MobileLangToggle from "./MobileLangToggle";
import MobileDrawer from "./MobileDrawer";

// 상단 고정 헤더의 대략적 높이(px).
// 드로어 콘텐츠가 헤더에 가려지지 않도록 MobileDrawer에 상단 패딩으로 넘긴다.
// 헤더의 py / 아이콘·로고 크기를 바꾸면 이 값도 함께 맞춰줄 것.
const HEADER_HEIGHT = 104;

const MobileHeader = () => {
  const navigate = useLocalizedNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = /^\/(en|ko)?\/?$/.test(location.pathname);

  // 메뉴가 열렸을 때 바디 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* 모바일 상단 바 */}
      <AppBar
        position={isHomePage ? "fixed" : "sticky"}
        sx={{
          background: "linear-gradient(90deg, #00235F 0%, #03193F 100%)",
          boxShadow: "0 3px 6px 3px rgba(0, 0, 0, 0.5)",
          // 세로 여백은 py, 좌우 패딩은 px 하나로 제어 (값 키우면 양 끝이 안쪽으로 당겨짐)
          py: 2,
          px: 4,
          zIndex: 1100,
          borderBottom: "6px solid transparent",
          borderImage: "linear-gradient(90deg, #296EE5 0%, #8BB0F1 100%) 1",
        }}
      >
        {/* 3열 그리드: [햄버거 | 로고(가운데) | 언어] — 양옆 1fr로 로고는 항상 정중앙 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          {/* 햄버거 아이콘 (크기: MenuIcon fontSize / 터치영역: IconButton p) */}
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            sx={{ color: "#ffffff", justifySelf: "start", p: 0.5 }}
          >
            {isMenuOpen ? (
              <CloseIcon sx={{ fontSize: 30 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 30 }} />
            )}
          </IconButton>

          {/* 로고 (가운데 열) */}
          <Box
            component="a"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setIsMenuOpen(false);
            }}
            aria-label="iVH 홈으로 이동"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={logoWhite}
              alt="iVH 로고"
              sx={{ width: "64px", height: "27.4px" }}
            />
          </Box>

          {/* 언어 선택 (우측 열, 오른쪽 정렬) */}
          <Box
            sx={{ justifySelf: "end", display: "flex", alignItems: "center" }}
          >
            <MobileLangToggle />
          </Box>
        </Box>
      </AppBar>

      {/* 햄버거 메뉴 드로어 */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navigate={navigate}
        topOffset={HEADER_HEIGHT}
      />
    </>
  );
};

export default MobileHeader;
