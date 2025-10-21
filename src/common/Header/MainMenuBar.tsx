import { Box } from "@mui/material";
import { MenuColumn } from "../../style/header/column.styles";
import { MenuTitle } from "../../style/header/title.styles";
import { Logo } from "./Logo";
import type { MainMenuItem } from "../../types/header";

interface MainMenuBarProps {
  menuItems: MainMenuItem[];
  isHomePage: boolean;
  navigate: (path: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MainMenuBar = ({
  menuItems,
  isHomePage,
  navigate,
  onMouseEnter,
  onMouseLeave,
}: MainMenuBarProps) => {
  return (
    <Box
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
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <MenuTitle
            $isHomePage={isHomePage}
            onClick={() => navigate(item.path)}
          >
            {item.title}
          </MenuTitle>
        </MenuColumn>
      ))}
    </Box>
  );
};
