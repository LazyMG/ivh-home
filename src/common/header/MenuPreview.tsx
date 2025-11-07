import { Box, Typography, Fade } from "@mui/material";
import type { MenuItem } from "../../types/header";
import { headerColors } from "../../theme/headerTheme";

interface MenuPreviewProps {
  item: MenuItem | null;
  isHomePage: boolean;
  position?: {
    x: number;
    y: number;
  };
  visible: boolean;
}

export const MenuPreview = ({
  item,
  isHomePage,
  position,
  visible,
}: MenuPreviewProps) => {
  if (!item || !visible || !position) return null;

  // menu.json에서 description을 직접 사용
  const description =
    item.description || `${item.name}에 대한 상세 정보를 확인하세요.`;

  // preview_img_path가 없으면 기본 배경색 사용
  const previewImgPath = item.preview_img_path;

  // 삼각형 크기 (커스터마이징 가능)
  const triangleWidth = 75;
  const triangleHeight = 70;

  return (
    <Fade in={visible} timeout={300}>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 10000,
          pointerEvents: "none",
        }}
      >
        {/* 삼각형 - 메뉴 아이템 기준으로 배치 */}
        <Box
          sx={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${triangleWidth}px`,
            height: `${triangleHeight}px`,
            background:
              "linear-gradient(to right, rgba(34, 34, 34, 1), rgba(71, 69, 68, 1))",
            clipPath: "polygon(100% 55%, 100% 0, 0 0)",
          }}
        />

        {/* 프리뷰 박스 - 삼각형 오른쪽에 붙어서 배치 */}
        <Box
          sx={{
            position: "fixed",
            left: `${position.x + triangleWidth}px`,
            top: `${position.y}px`,
            width: "350px",
            minHeight: "240px",
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
