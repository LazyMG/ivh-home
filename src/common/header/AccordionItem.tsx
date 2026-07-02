import { Box, Typography } from "@mui/material";
import type { MenuItem } from "../../types/header";
import { AccordionMenu } from "./AccordionMenu";
import { FONTS } from "../../theme/theme";

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

  if (item.name === "iMOVA") {
    return (
      <Box
        sx={{
          position: "relative",
          width: isOpen ? "100%" : "fit-content",
        }}
      >
        <Box
          onClick={() => (hasSubMenu ? onToggle() : onNavigate(item.path))}
          sx={{
            cursor: "pointer",
            width: "58px", // 부모(열림 시 100%)에 안 끌려가도록 고정
            aspectRatio: "57 / 13", // 로고 원본 비율
            // 이미지 원래 색을 무시하고 마스크로 색상 지정 (클릭 시 hover 색 유지)
            backgroundColor: isOpen ? "#005AD5" : "#8D8D8D",
            WebkitMaskImage: "url(/images/header/logo_iMOVA.svg)",
            maskImage: "url(/images/header/logo_iMOVA.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "left center",
            maskPosition: "left center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            mt: 1,
            mb: 0.5,
            "&:hover": { backgroundColor: "#005AD5" },
          }}
        />

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
  } else if (item.name === "iSuite") {
    return (
      <Box
        sx={{
          position: "relative",
          width: isOpen ? "100%" : "fit-content",
        }}
      >
        <Box
          onClick={() => (hasSubMenu ? onToggle() : onNavigate(item.path))}
          sx={{
            cursor: "pointer",
            width: "58px", // 부모(열림 시 100%)에 안 끌려가도록 고정
            aspectRatio: "54 / 13", // 로고 원본 비율
            // 이미지 원래 색을 무시하고 마스크로 색상 지정 (클릭 시 hover 색 유지)
            backgroundColor: isOpen ? "#005AD5" : "#8D8D8D",
            WebkitMaskImage: "url(/images/header/logo_iSuite.svg)",
            maskImage: "url(/images/header/logo_iSuite.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "left center",
            maskPosition: "left center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            mt: 1,
            mb: 0.5,
            "&:hover": { backgroundColor: "#005AD5" },
          }}
        />

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
  }

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
          fontFamily: FONTS.galderglynn.regular,
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
