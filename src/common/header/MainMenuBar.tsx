import { Box } from "@mui/material";
import { MenuColumn } from "../../style/header/column.styles";
import { MenuTitle } from "../../style/header/title.styles";
import type { MainMenuItem } from "../../types/header";
import { Logo } from "./Logo";

interface MainMenuBarProps {
  menuItems: MainMenuItem[];
  isHomePage: boolean;
  navigate: (path: string) => void;
  onMenuClick: (title: string) => void;
  openMainMenu: string | null;
}

export const MainMenuBar = ({
  menuItems,
  isHomePage,
  navigate,
  onMenuClick,
  openMainMenu,
}: MainMenuBarProps) => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        borderBottom: isHomePage ? "2px solid #312f2f" : "2px solid #e0e0e0",
      }}
    >
      {/* 로고 컬럼 */}
      <MenuColumn $isLogoColumn={true}>
        <Logo isHomePage={isHomePage} onClick={() => navigate("/")} />
      </MenuColumn>

      {/* 메뉴 타이틀들 */}
      {menuItems.map((item, index) => (
        <MenuColumn
          key={index}
          $isProductPage={item.path === "/product"}
          $isHomePage={isHomePage}
          $isActive={openMainMenu === item.title}
        >
          <MenuTitle
            $isHomePage={isHomePage}
            onClick={() => onMenuClick(item.title)}
            sx={{
              fontWeight: openMainMenu === item.title ? "900" : "bold",
            }}
          >
            {item.title}
          </MenuTitle>
        </MenuColumn>
      ))}
    </Box>
  );
};
