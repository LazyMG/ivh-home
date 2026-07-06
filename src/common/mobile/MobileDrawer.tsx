import { useEffect, useRef } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import menu from "../../data/header/menu.json";
import youtubeBlack from "/images/header/youtube_black.png";
import linkedinBlack from "/images/header/linkedin_black.png";
import { MobileMenuRecursive } from "./MobileMenuRecursive";
import { FONTS } from "../../theme/theme";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (path: string) => void;
  // 상단 바에 가려지지 않도록 패널 상단에 주는 패딩(px). 헤더 높이를 넘겨받는다.
  topOffset: number;
}

// 햄버거 메뉴 드로어 (왼쪽에서 슬라이드) + 배경 오버레이.
// 드로어는 항상 라이트 테마 → 아이콘·구분선 색을 고정한다.
const MobileDrawer = ({
  isOpen,
  onClose,
  navigate,
  topOffset,
}: MobileDrawerProps) => {
  const location = useLocation();
  // 활성 메뉴 판별용 경로 — lang prefix(/en)를 제거해 한/영 모두 매칭되게 한다.
  const pathname = location.pathname.replace(/^\/en(?=\/|$)/, "");
  const panelRef = useRef<HTMLDivElement>(null);

  // 열릴 때 스크롤 위치를 맨 위로 초기화
  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <>
      {/* 슬라이드 패널 */}
      <Box
        ref={panelRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "80%",
          maxWidth: "400px",
          // 모바일 브라우저에서 100vh는 주소창을 제외한 '최대' 높이라 실제 표시 영역보다 커서
          // 하단(소셜 아이콘)이 브라우저 UI 뒤로 잘린다. dvh는 실제 보이는 높이를 따라간다.
          height: "100vh", // dvh 미지원 브라우저용 폴백
          "@supports (height: 100dvh)": { height: "100dvh" },
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          zIndex: 1050,
          // 상단 패딩 = 헤더 높이(가림 방지) + 좌우/하단 24px
          padding: `${topOffset}px 24px 24px 24px`,
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-track": { backgroundColor: "#f0f0f0" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#d0d0d0",
            borderRadius: "4px",
            "&:hover": { backgroundColor: "#b0b0b0" },
          },
        }}
      >
        {menu.mainMenu.map((mainItem, index) => {
          const mainPath = (mainItem as { path?: string }).path;
          const basePath = (mainItem as { basePath?: string }).basePath;
          // 이 섹션의 basePath로 현재 경로가 시작하면 활성 (예: /product/imova → PRODUCT)
          const isActive = basePath ? pathname.startsWith(basePath) : false;

          return (
            <Box key={index} sx={{ mb: 3 }}>
              {/* 메인 메뉴 타이틀 */}
              <Typography
                onClick={() => {
                  if (mainPath) {
                    navigate(mainPath);
                    onClose();
                  }
                }}
                sx={{
                  color: "#424242",
                  fontSize: "18px",
                  fontFamily: FONTS.galderglynn.regular,
                  cursor: "pointer",
                  mb: 1,
                  pb: 1,
                  borderBottom: isActive
                    ? "2px solid #424242"
                    : "2px solid #e0e0e0",
                }}
              >
                {mainItem.title}
              </Typography>

              {/* 서브메뉴 (재귀적) */}
              {mainItem.subMenu && mainItem.subMenu.length > 0 && (
                <Box sx={{ mt: 1 }}>
                  <MobileMenuRecursive
                    items={mainItem.subMenu}
                    navigate={navigate}
                    onClose={onClose}
                  />
                </Box>
              )}

              {index < menu.mainMenu.length - 1 && (
                <Divider sx={{ mt: 2, borderColor: "rgba(0, 0, 0, 0.1)" }} />
              )}
            </Box>
          );
        })}

        {/* 소셜 미디어 영역 */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            component="img"
            src={linkedinBlack}
            alt="linkedin"
            sx={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://kr.linkedin.com/company/ivhkr?trk=public_post_feed-actor-image",
                "_blank",
              )
            }
          />
          <Box
            component="img"
            src={youtubeBlack}
            alt="youtube"
            sx={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.youtube.com/@ivhkorea", "_blank")
            }
          />
        </Box>
      </Box>

      {/* 오버레이 (메뉴 열렸을 때 배경 어둡게) */}
      {isOpen && (
        <Box
          onClick={onClose}
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

export default MobileDrawer;
