import { Box } from "@mui/material";
import type { MainMenuItem } from "../../types/header";
import { DrawerFixedArea } from "./DrawerFixedArea";
import { DrawerContent } from "./DrawerContent";

interface DrawerProps {
  menuItems: MainMenuItem[];
  openMainMenu: string;
  anchorLeft: number;
  navigate: (path: string) => void;
  onClose: () => void;
}

export const Drawer = ({
  menuItems,
  openMainMenu,
  anchorLeft,
  navigate,
  onClose,
}: DrawerProps) => {
  const currentMenu = menuItems.find((item) => item.title === openMainMenu);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%", // 헤더 바로 아래
        left: 0,
        width: "100%",
        maxWidth: "100vw",
        minHeight: "300px",
        zIndex: 999,
        py: 4,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* 좌측 고정 검색 영역 */}
      <Box
        sx={{
          position: "absolute",
          top: 32, // py: 4
          left: "6%",
          width: "240px",
        }}
      >
        <DrawerFixedArea />
      </Box>

      {/* 메뉴 콘텐츠 - 상위 메뉴 위치(anchorLeft)에 정렬 */}
      <Box
        sx={{
          pl: `${anchorLeft}px`,
          pr: "6%",
          maxHeight: "calc(100vh - 80px)",
          overflowY: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
          overscrollBehavior: "contain",
        }}
      >
        <DrawerContent
          menu={currentMenu}
          openMainMenu={openMainMenu}
          navigate={navigate}
          onClose={onClose}
        />
      </Box>
    </Box>
  );
};
