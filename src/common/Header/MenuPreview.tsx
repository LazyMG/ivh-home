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
  if (!item || !visible) return null;

  // menu.json에서 description을 직접 사용
  const description =
    item.description || `${item.name}에 대한 상세 정보를 확인하세요.`;

  return (
    <Fade in={visible} timeout={300}>
      <Box
        sx={{
          position: position ? "fixed" : "absolute",
          left: position ? `${position.x}px` : "auto",
          top: position ? `${position.y + 16}px` : "auto",
          right: position ? "auto" : "24px",
          marginTop: position ? 0 : "16px",
          minWidth: "320px",
          maxWidth: "400px",
          backgroundColor: isHomePage
            ? headerColors.home.preview.background
            : headerColors.default.preview.background,
          color: isHomePage
            ? headerColors.home.preview.color
            : headerColors.default.preview.color,
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 20px #0000004d",
          zIndex: 10000,
          pointerEvents: "none",
          backdropFilter: "blur(10px)",
          border: `1px solid ${
            isHomePage
              ? headerColors.home.preview.borderColor
              : headerColors.default.preview.borderColor
          }`,
          transform: position ? "none" : "translateY(0)",
        }}
      >
        {/* 메뉴 이름 */}
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "12px",
            color: isHomePage
              ? headerColors.home.preview.color
              : headerColors.default.preview.color,
          }}
        >
          {item.name}
        </Typography>

        {/* 설명 */}
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: isHomePage
              ? headerColors.home.preview.text
              : headerColors.default.preview.text,
          }}
        >
          {description}
        </Typography>

        {/* 경로가 있으면 표시 */}
        {item.path && (
          <Box
            sx={{
              marginTop: "12px",
              paddingTop: "12px",
              borderTop: `1px solid ${
                isHomePage
                  ? headerColors.home.preview.borderColor
                  : headerColors.default.preview.borderColor
              }`,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: isHomePage
                  ? headerColors.home.preview.text
                  : headerColors.default.preview.text,
                fontStyle: "italic",
                fontHeight: "2.5",
              }}
            >
              클릭하여 자세히 보기
            </Typography>
          </Box>
        )}
      </Box>
    </Fade>
  );
};
