import { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import type { MenuItem } from "../../types/header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FONTS } from "../../theme/theme";

interface MobileMenuRecursiveProps {
  items: MenuItem[];
  navigate: (path: string) => void;
  onClose: () => void;
  level?: number;
}

export const MobileMenuRecursive = ({
  items,
  navigate,
  onClose,
  level = 1,
}: MobileMenuRecursiveProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (name: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const handleItemClick = (item: MenuItem) => {
    const hasChildren = item.items || item.subMenu;

    if (hasChildren) {
      // 자식이 있으면 토글
      toggleItem(item.name);
    } else if (item.path) {
      // 자식 없고 경로 있으면 이동
      navigate(item.path);
      onClose();
    }
  };

  return (
    <Box>
      {items.map((item) => {
        // hide 상태인 항목 제외
        if (item?.state === "hide") return null;

        const hasChildren = item.items || item.subMenu; // 자식 메뉴가 있는지
        const isOpen = openItems.has(item.name);
        const childItems = item.items || item.subMenu || []; // 자식의 자식 메뉴가 있으면 재귀에 전달 없으면 빈 배열

        // 모든 자식 메뉴가 hide 상태인지 확인
        const allChildrenHidden =
          hasChildren && childItems.every((child) => child.state === "hide");

        // 모든 자식이 숨겨진 경우 부모도 숨김
        if (allChildrenHidden) return null;

        return (
          <Box key={item.name}>
            <Box
              onClick={() => handleItemClick(item)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1,
                py: level === 1 ? 1.5 : 1, // level 1만 위아래 여백 크게
                cursor: "pointer",
                color: "#424242",
                mb: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: level === 1 ? "16px" : "14px",
                  fontFamily:
                    level === 1
                      ? FONTS.freesentation.semiBold
                      : FONTS.freesentation.medium,
                  flex: 1,
                }}
              >
                {item.name}
              </Typography>
              {hasChildren &&
                (isOpen ? (
                  <ExpandLessIcon fontSize="small" />
                ) : (
                  <ExpandMoreIcon fontSize="small" />
                ))}
            </Box>

            {/* 재귀적으로 자식 렌더링 */}
            {hasChildren && (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2 }}>
                  <MobileMenuRecursive
                    items={childItems}
                    navigate={navigate}
                    onClose={onClose}
                    level={level + 1}
                  />
                </Box>
              </Collapse>
            )}
          </Box>
        );
      })}
    </Box>
  );
};
