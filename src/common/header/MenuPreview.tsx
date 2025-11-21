import { Box, Typography, Fade } from "@mui/material";
import type { MenuItem } from "../../types/header";
import { headerColors } from "../../theme/headerTheme";

interface MenuPreviewProps {
  item: MenuItem | null;
  isHomePage: boolean;
  position?: {
    x: number;
    y: number;
    align?: "left" | "right";
  };
  visible: boolean;
  drawerBottom?: number;
}

export const MenuPreview = ({
  item,
  isHomePage,
  position,
  visible,
  drawerBottom,
}: MenuPreviewProps) => {
  if (!item || !visible || !position) return null;

  // menu.json에서 description을 직접 사용
  const description =
    item.description || `${item.name}에 대한 상세 정보를 확인하세요.`;

  // preview_img_path가 없으면 기본 배경색 사용
  const previewImgPath = item.preview_img_path;

  const horizontalMargin = 40;
  const viewportWidth =
    typeof window !== "undefined" && typeof window.innerWidth === "number"
      ? window.innerWidth
      : 1080;
  const viewportHeight =
    typeof window !== "undefined" && typeof window.innerHeight === "number"
      ? window.innerHeight
      : 720;

  const previewWidth = Math.max(viewportWidth * 0.3, 350);
  const previewHeight = Math.max(viewportHeight * 0.32, 3);

  const align = position.align ?? "right";

  // align이 "left"면 최하단 레벨 메뉴 → 해당 컬럼 내부의 왼쪽에 배치
  // align이 "right"면 하위 메뉴 있음 → 화면 오른쪽에 배치
  const baseLeft =
    align === "left"
      ? position.x + 20 // 최하단 레벨 메뉴 컬럼 내부 왼쪽에 20px 간격으로 배치
      : viewportWidth - previewWidth - horizontalMargin; // 화면 오른쪽에 배치
  const calculatedLeft = Math.max(
    horizontalMargin,
    Math.min(baseLeft, viewportWidth - previewWidth - horizontalMargin)
  );

  // 메뉴 드로어의 하단 위치를 기준으로 프리뷰를 배치
  const menuDrawerBottom = drawerBottom ?? position.y + 300;
  const desiredTop = menuDrawerBottom - previewHeight - 20; // 드로어 하단에서 프리뷰 높이 + 20px 여백만큼 위로
  const calculatedTop = Math.max(
    horizontalMargin,
    Math.min(desiredTop, viewportHeight - previewHeight - horizontalMargin)
  );

  return (
    <Fade in={visible} timeout={300}>
      <Box
        sx={{
          position: "fixed",
          zIndex: 10000,
          pointerEvents: "none",
        }}
      >
        {/* 프리뷰 박스 */}
        <Box
          sx={{
            position: "fixed",
            left: `${calculatedLeft}px`,
            top: `${calculatedTop}px`,
            width: `${previewWidth}px`,
            minHeight: `${previewHeight}px`,
            backgroundColor: previewImgPath
              ? "transparent"
              : isHomePage
              ? headerColors.home.preview.background
              : headerColors.default.preview.background,
            backgroundImage: previewImgPath ? `url(${previewImgPath})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "4px",
            border: "3px solid rgba(34,34,34,1)",
            overflow: "hidden",
          }}
        >
          {/* 그라데이션 오버레이 (이미지 위에 어두운 그라데이션) */}
          {previewImgPath && (
            <Box
              sx={{
                height: "50%",
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8))",
                zIndex: 1,
              }}
            />
          )}

          {/* 텍스트 컨테이너 - 우측 하단 정렬 */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              padding: "20px",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              textAlign: "right",
            }}
          >
            {/* 메뉴 이름 */}
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#ffffff",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {item.name}
            </Typography>

            {/* 설명 */}
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#ffffff",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                maxWidth: "77%",
                wordBreak: "keep-all",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
