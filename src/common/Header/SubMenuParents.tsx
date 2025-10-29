import { Box, Typography } from "@mui/material";
import type { MenuItem } from "../../types/header";

interface SubMenuParentsProps {
  items: MenuItem[];
  isHomePage: boolean;
  navigate: (path: string) => void;
  openLevel1Menu: string | null;
  onLevel1Click: (name: string) => void;
}

export const SubMenuParents = ({
  items,
  isHomePage,
  navigate,
  openLevel1Menu,
  onLevel1Click,
}: SubMenuParentsProps) => {
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

        return (
          <Typography
            key={item.name}
            onClick={() => {
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
        );
      })}
    </Box>
  );
};
