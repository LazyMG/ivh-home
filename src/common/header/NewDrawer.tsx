import { Box } from "@mui/material";
import type { MainMenuItem } from "../../types/header";
import { DrawerFixedArea } from "./DrawerFixedArea";
import { DrawerContent } from "./DrawerContent";

interface NewDrawerProps {
  menuItems: MainMenuItem[];
  openMainMenu: string;
  navigate: (path: string) => void;
  onClose: () => void;
}

export const NewDrawer = ({
  menuItems,
  openMainMenu,
  navigate,
  onClose,
}: NewDrawerProps) => {
  const currentMenu = menuItems.find((item) => item.title === openMainMenu);

  return (
    <Box
      sx={{
        position: "relative",
        left: 0,
        width: "100%",
        maxWidth: "100vw",
        minHeight: "300px",
        maxHeight: "calc(100vh - 80px)",
        zIndex: 999,
        pb: 2,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        background: "linear-gradient(to bottom, #FFFFFF 0%, #E5EFF2 100%)",
      }}
    >
      {/* 스크롤 가능한 콘텐츠 영역 */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: "3%",
          overflowY: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
          overscrollBehavior: "contain",
        }}
      >
        <DrawerContent
          menu={currentMenu}
          menuItems={menuItems}
          openMainMenu={openMainMenu}
          navigate={navigate}
          onClose={onClose}
        />
      </Box>

      {/* 왼쪽 고정 영역 (SNS) - 항상 하단에 고정 */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        <DrawerFixedArea />
      </Box>
    </Box>
  );
};
