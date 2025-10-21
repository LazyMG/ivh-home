import { Box } from "@mui/material";
import { SubMenuColumn } from "../../style/header/column.styles";
import { SubMenuContent } from "./SubMenuContent";
import type { MainMenuItem } from "../../types/header";

interface SubMenuDrawerProps {
  menuItems: MainMenuItem[];
  isHomePage: boolean;
  navigate: (path: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const SubMenuDrawer = ({
  menuItems,
  isHomePage,
  navigate,
  onMouseEnter,
  onMouseLeave,
}: SubMenuDrawerProps) => {
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        backgroundColor: isHomePage ? "#000" : "#ffffff",
        zIndex: 999,
      }}
    >
      {/* 로고 영역 빈 공간 */}
      <SubMenuColumn $isLogoColumn={true} />

      {/* 각 메뉴의 서브메뉴들 */}
      {menuItems.map((item, index) => (
        <SubMenuColumn key={index} $isProductPage={item.path === "/product"}>
          <SubMenuContent
            item={item}
            isHomePage={isHomePage}
            navigate={navigate}
          />
        </SubMenuColumn>
      ))}
    </Box>
  );
};
