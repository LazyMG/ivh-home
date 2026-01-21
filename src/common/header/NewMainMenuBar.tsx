import { Box, Typography } from "@mui/material";
import type { MainMenuItem } from "../../types/header";
import { Logo } from "./Logo";

interface NewMainMenuBarProps {
  menuItems: MainMenuItem[];
  isHomePage: boolean;
  navigate: (path: string) => void;
  onMenuClick: (title: string) => void;
  openMainMenu: string | null;
  onClose: () => void;
}

export const NewMainMenuBar = ({
  menuItems,
  navigate,
  onMenuClick,
  openMainMenu,
  onClose,
}: NewMainMenuBarProps) => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "100vw",
        overflowX: "hidden",
        borderBottom: "2px solid #e0e0e0",
        px: "8%",
        justifyContent: "space-between",
        gap: "6%",
      }}
    >
      {/* 로고 */}
      <Box
        sx={{
          py: 3,
          pr: 8,
        }}
      >
        <Logo onClick={() => navigate("/")} />
      </Box>

      {/* 메뉴 타이틀들 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            onClick={() => {
              if (openMainMenu === item.title) {
                onClose();
              } else {
                onMenuClick(item.title);
              }
            }}
            sx={{
              position: "relative",
              py: "24px",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Freesentation-7-Bold",
                color: openMainMenu === item.title ? "#179EBD" : "#424242",
                whiteSpace: "nowrap",
                ":hover": {
                  color: "#179EBD",
                },
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
