import { Box, Typography } from "@mui/material";
import type { MenuItem } from "../../types/header";
import { MenuHoverProgress } from "./MenuHoverProgress";
import { useMenuHoverPreview } from "../../hooks/useMenuHoverPreview";
import { previewDurations } from "./previewConstants";

interface SubMenuParentsProps {
  items: MenuItem[];
  isHomePage: boolean;
  navigate: (path: string) => void;
  openLevel1Menu: string | null;
  onLevel1Click: (name: string) => void;
  onPreviewItemChange?: (
    item: MenuItem | null,
    position?: { x: number; y: number }
  ) => void;
}

export const SubMenuParents = ({
  items,
  isHomePage,
  navigate,
  openLevel1Menu,
  onLevel1Click,
  onPreviewItemChange,
}: SubMenuParentsProps) => {
  // 호버 프리뷰 커스텀 훅 사용
  const {
    hoveredItemForPreview,
    itemRefs,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  } = useMenuHoverPreview({
    onPreviewItemChange,
    hoverDuration: previewDurations.hover,
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {items.map((item) => {
        const hasSubMenu = item.items; // 2단계 메뉴가 있는지
        const isActive = openLevel1Menu === item.name; // 현재 열려있는 1단계 메뉴인지
        const isHoveredForPreview = hoveredItemForPreview === item.name; // 현재 호버된 아이템 이름과 일치하는지

        return (
          <Box
            key={item.name}
            sx={{
              position: "relative",
            }}
          >
            <Typography
              ref={(el) => {
                itemRefs.current[item.name] = el;
              }}
              onMouseEnter={() => {
                // description이 있는 메뉴 아이템에 대해 프리뷰 표시
                if (item.description) {
                  handleMouseEnter(item, 1);
                }
              }}
              onMouseLeave={() => {
                // description이 있는 메뉴 아이템에서 벗어날 때 프리뷰 숨김
                if (item.description) {
                  handleMouseLeave();
                }
              }}
              onClick={() => {
                handleClick();
                if (hasSubMenu) {
                  onLevel1Click(item.name);
                } else {
                  if (item.path) {
                    navigate(item.path);
                  }
                }
              }}
              sx={{
                color: isActive
                  ? isHomePage
                    ? "rgba(255,255,255,1)"
                    : "rgba(0,0,0,1)" // 클릭된 상태 - 화이트 유지
                  : isHomePage
                  ? "rgba(255,255,255,0.7)" // 기본 상태 - 70% 투명도
                  : "rgba(0,0,0,0.6)",
                fontSize: "16px",
                fontWeight: isActive ? "bold" : "normal",
                cursor: "pointer",
                padding: "8px 12px",
                paddingRight: item.description ? "36px" : "12px", // 프로그레스바 공간 확보
                borderRadius: "2px",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: isHomePage ? "rgba(255,255,255,1)" : "#000",
                  transform: "translateX(4px)",
                },
              }}
            >
              {item.name}
            </Typography>
            {item.description && (
              <MenuHoverProgress
                visible={isHoveredForPreview}
                duration={previewDurations.progress}
                size={20}
                strokeWidth={2}
                color={isHomePage ? "#ffffff" : "#000000"}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};
