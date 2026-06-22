import { Box, Typography } from "@mui/material";
import type { MenuItem } from "../../types/header";
import { AccordionMenu } from "./AccordionMenu";

interface AccordionItemProps {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void; // 하위 메뉴가 있으면 펼치기/접기
  onNavigate: (path?: string) => void; // 하위 메뉴가 없으면 이동
  navigate: (path: string) => void;
  onClose: () => void;
  // 펼쳐진 하위 메뉴 항목의 최대 너비 (없으면 AccordionMenu 기본값)
  subMenuMaxWidth?: string;
}

// 상위 항목(링크) + 클릭 시 펼쳐지는 하위 메뉴
export const AccordionItem = ({
  item,
  isOpen,
  onToggle,
  onNavigate,
  navigate,
  onClose,
  subMenuMaxWidth,
}: AccordionItemProps) => {
  const hasSubMenu = !!item.subMenu && item.subMenu.length > 0;

  return (
    <Box
      sx={{
        position: "relative",
        width: isOpen ? "100%" : "fit-content",
      }}
    >
      <Typography
        onClick={() => (hasSubMenu ? onToggle() : onNavigate(item.path))}
        sx={{
          fontSize: "16px",
          fontFamily: "Freesentation-6-SemiBold",
          // 클릭(아코디언 열림) 시 hover 색상 유지
          color: isOpen ? "#005AD5" : "#8D8D8D",
          cursor: "pointer",
          py: 0.5,
          width: "fit-content",
          textTransform: "uppercase",
          "&:hover": { color: "#005AD5" },
        }}
      >
        {item.name}
      </Typography>

      {hasSubMenu && isOpen && (
        <AccordionMenu
          items={item.subMenu || []}
          navigate={navigate}
          onClose={onClose}
          itemMaxWidth={subMenuMaxWidth}
        />
      )}
    </Box>
  );
};
