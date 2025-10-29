import { Box, Typography } from "@mui/material";
import type { MenuItem } from "../../types/header";
import { useState } from "react";
import { SubMenuChild } from "./SubMenuChild";

interface SubMenuItem2DProps {
  item: MenuItem;
  isHomePage: boolean;
  navigate: (path: string) => void;
}

export const SubMenuItem2D = ({
  item,
  isHomePage,
  navigate,
}: SubMenuItem2DProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSubMenu = item.items && item.items.length > 0;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        minHeight: "48px",
        alignItems: "stretch",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} // 🔥 전체 영역을 벗어날 때만!
    >
      {/* 2단계 메뉴 아이템 */}
      <Box
        sx={{
          minWidth: "250px",
          padding: "8px 24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          onClick={() => navigate(item.path)}
          sx={{
            color: "#fff",
            fontSize: "14px",
            cursor: "pointer",
            padding: "8px 12px",
            borderRadius: "4px",
            width: "100%",
            backgroundColor: isHovered
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            transition: "all 0.2s ease",

            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              textDecoration: "underline",
              transform: "translateX(4px)",
            },
          }}
        >
          {item.name}
          {hasSubMenu && " →"}
        </Typography>
      </Box>

      {/* 3단계 자식 메뉴 (hover 시 표시) */}
      {isHovered && hasSubMenu && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <SubMenuChild
            parentItem={item}
            isHomePage={isHomePage}
            navigate={navigate}
            level={2}
          />
        </Box>
      )}
    </Box>
  );
};
