import { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { MenuItem } from "../../types/header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface MobileMenuRecursiveProps {
  items: MenuItem[];
  isHomePage: boolean;
  navigate: (path: string) => void;
  onClose: () => void;
  level?: number;
}

export const MobileMenuRecursive = ({
  items,
  isHomePage,
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
            <MobileItemButton
              onClick={() => handleItemClick(item)}
              $level={level}
            >
              <Typography
                sx={{
                  fontSize:
                    level === 1 ? "15px" : level === 2 ? "14px" : "13px",
                  fontWeight: level === 1 ? "600" : "400",
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
            </MobileItemButton>

            {/* 재귀적으로 자식 렌더링 */}
            {hasChildren && (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2 }}>
                  <MobileMenuRecursive
                    items={childItems}
                    isHomePage={isHomePage}
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

const MobileItemButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$isHomePage" && prop !== "$level",
})<{
  $level: number;
}>(({ $level }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: $level === 1 ? "12px 8px" : "8px 8px",
  cursor: "pointer",
  borderRadius: "4px",
  color: "#424242",
  transition: "all 0.2s ease",
  marginBottom: "4px",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },

  "&:active": {
    transform: "scale(0.98)",
  },
}));
