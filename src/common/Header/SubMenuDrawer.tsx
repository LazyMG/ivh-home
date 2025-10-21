import { Box } from "@mui/material";
import { SubMenuColumn } from "../../style/header/column.styles";
import { SubMenuContent } from "./SubMenuContent";
import type { MainMenuItem } from "../../types/header";
import youtube from "/images/header/youtube_white.png";
import linkedin from "/images/header/linkedin_white.png";

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
        flexDirection: "column", // row에서 column으로 변경
        width: "100%",
        backgroundColor: isHomePage ? "#000" : "#ffffff",
        zIndex: 999,
      }}
    >
      {/* 상단: 서브메뉴들 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
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

      {/* 하단: 소셜 미디어 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {/* 로고 영역에 소셜 미디어 배치 */}
        <SubMenuColumn $isLogoColumn={true}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <img
              src={youtube}
              alt="youtube"
              style={{ width: "40px", height: "40px" }}
            />
            <img
              src={linkedin}
              alt="linkedin"
              style={{ width: "40px", height: "40px" }}
            />
          </Box>
        </SubMenuColumn>

        {/* 나머지 빈 공간 */}
        {menuItems.map((_, index) => (
          <SubMenuColumn
            key={`empty-${index}`}
            $isProductPage={menuItems[index].path === "/product"}
          />
        ))}
      </Box>
    </Box>
  );
};
