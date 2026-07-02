import { Box, Typography } from "@mui/material";
import type { MainMenuItem } from "../../types/header";
import { FONTS } from "../../theme/theme";

interface SimpleMenuPanelProps {
  menu: MainMenuItem;
  navigate: (path: string) => void;
  onClose: () => void;
}

// SUPPORT / COMPANY : 링크 목록만 보여주는 단순 패널
export const SimpleMenuPanel = ({
  menu,
  navigate,
  onClose,
}: SimpleMenuPanelProps) => {
  const handleNavigate = (path?: string) => {
    if (path && path !== "#") {
      navigate(path);
      onClose();
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {menu.subMenu?.map((item) => {
        if (item.state === "hide") return null;
        return (
          <Typography
            key={item.name}
            onClick={() => handleNavigate(item.path)}
            sx={{
              fontSize: "16px",
              fontFamily: FONTS.freesentation.regular,
              color: "#000000",
              cursor: "pointer",
              py: 0.5,
              width: "fit-content",
              "&:hover": { color: "#005AD5" },
              textTransform: "uppercase",
            }}
          >
            {item.name}
          </Typography>
        );
      })}
    </Box>
  );
};
