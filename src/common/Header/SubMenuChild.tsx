import { Box, Typography } from "@mui/material";
import type { MenuItem } from "../../types/header";
import { useState } from "react";

interface SubMenuChildProps {
  parentItem?: MenuItem;
  isHomePage: boolean;
  navigate: (path: string) => void;
  level: number; // 현재 레벨 (2부터 시작)
  onHoverChange?: (itemName: string | null) => void;
}

export const SubMenuChild = ({
  parentItem,
  isHomePage,
  navigate,
  level,
  onHoverChange,
}: SubMenuChildProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  if (!parentItem) return null;

  // 표시할 아이템들 가져오기 (2단계는 items, 3단계+는 subMenu)
  const displayItems = parentItem.items || parentItem.subMenu || [];

  // 현재 호버된 menu
  const hoveredMenuItem = displayItems.find(
    (item) => item.name === hoveredItem
  );
  const hasNestedMenu = hoveredMenuItem && hoveredMenuItem.subMenu;

  // 레벨에 따른 배경색 계산 (점점 밝아짐)
  const getBackgroundColor = () => {
    if (isHomePage) {
      // 홈페이지: 어두운 회색 → 밝은 회색
      const baseGray = 0x2a; // #2a2a2a (어두운 회색)
      const increment = 0x15; // 21씩 증가
      const grayValue = Math.min(0xff, baseGray + increment * (level - 2));
      const hex = grayValue.toString(16).padStart(2, "0");
      return `#${hex}${hex}${hex}`;
    } else {
      // 일반 페이지: 밝은 회색 → 어두운 회색
      const baseLight = 0xec; // #ececec (밝은 회색) - 236
      const decrement = 0x1b; // 27씩 감소
      const grayValue = Math.max(0x00, baseLight - decrement * (level - 2));
      const hex = grayValue.toString(16).padStart(2, "0");
      return `#${hex}${hex}${hex}`;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: getBackgroundColor(),
      }}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <Box
        sx={{
          minWidth: "250px",
          maxWidth: "250px",
          padding: "24px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {displayItems.map((item) => {
          const hasSubMenu = item.subMenu;

          return (
            <Typography
              key={item.name}
              onMouseEnter={() => {
                if (hasSubMenu) {
                  setHoveredItem(item.name);
                  onHoverChange?.(item.name);
                }
              }}
              onClick={() => navigate(item.path || "")}
              sx={{
                color: isHomePage
                  ? "rgba(255,255,255,0.7)" // 기본 상태 - 70% 투명도
                  : "rgba(0,0,0,0.6)",
                fontSize: "14px",
                cursor: "pointer",
                padding: "8px 12px",
                borderRadius: "4px",
                "&:hover": {
                  color: isHomePage ? "rgba(255,255,255,1)" : "#000",
                  textDecoration: "underline",
                  transform: "translateX(4px)",
                },
              }}
            >
              {item.name}
            </Typography>
          );
        })}
      </Box>
      {/* 재귀적으로 다음 레벨 렌더링 */}
      {hasNestedMenu && (
        <Box
          sx={{
            display: "flex",
            flex: 1, // 남은 공간 모두
          }}
        >
          <SubMenuChild
            parentItem={hoveredMenuItem}
            isHomePage={isHomePage}
            navigate={navigate}
            level={level + 1}
            onHoverChange={onHoverChange}
          />
        </Box>
      )}
    </Box>
  );
};
