import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import type { MainMenuItem } from "../../types/header";
import { Logo } from "./Logo";
import LangToggle from "../LangToggle";

interface MainMenuBarProps {
  menuItems: MainMenuItem[];
  isHomePage: boolean;
  navigate: (path: string) => void;
  onMenuClick: (title: string, anchorLeft: number) => void;
  openMainMenu: string | null;
  onClose: () => void;
}

export const MainMenuBar = ({
  menuItems,
  navigate,
  onMenuClick,
  openMainMenu,
  onClose,
}: MainMenuBarProps) => {
  // 첫 메뉴(목록 시작) 위치 측정용
  const firstItemRef = useRef<HTMLDivElement>(null);
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "100vw",
        overflowX: "hidden",
        borderBottom: "6px solid transparent",
        borderImage: "linear-gradient(90deg, #296EE5 0%, #8BB0F1 100%) 1",
        px: "6%",
        justifyContent: "space-between",
      }}
    >
      {/* 로고 */}
      <Box
        sx={{
          py: "20px",
        }}
      >
        <Logo
          onClick={() => {
            onClose(); // 홈에서는 경로가 안 바뀌어 드로어가 안 닫히므로 직접 닫음
            navigate("/");
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {/* 메뉴 타이틀들 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {menuItems.map((item, index) => (
            <Box
              key={index}
              ref={index === 0 ? firstItemRef : undefined}
              sx={{
                position: "relative",
                py: 3,
                pr: 24,
              }}
            >
              <Typography
                onClick={(e) => {
                  if (openMainMenu === item.title) {
                    onClose();
                  } else {
                    const selfLeft =
                      e.currentTarget.getBoundingClientRect().left;
                    const startLeft =
                      firstItemRef.current?.getBoundingClientRect().left ??
                      selfLeft;
                    // 앞 2개: 메뉴 목록 시작 위치 / 뒤 2개: 자기 위치
                    onMenuClick(item.title, index < 2 ? startLeft : selfLeft);
                  }
                }}
                sx={{
                  fontSize: "16px",
                  fontFamily: "Freesentation-7-Bold",
                  color: openMainMenu === item.title ? "#66BAFF" : "#ffffff",
                  whiteSpace: "nowrap",
                  ":hover": {
                    color: "#66BAFF",
                  },
                  cursor: "pointer",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            alignSelf: "center",
            height: "16px",
            width: "1px",
            backgroundColor: "#ffffff",
            mx: 6,
          }}
        />
        <LangToggle />
      </Box>
    </Box>
  );
};
