import type { MainMenuItem } from "../../types/header";
import { ProductPanel } from "./ProductPanel";
import { SolutionsPanel } from "./SolutionsPanel";
import { SimpleMenuPanel } from "./SimpleMenuPanel";

interface DrawerContentProps {
  menu: MainMenuItem | undefined; // 현재 열린 메인 메뉴
  openMainMenu: string;
  navigate: (path: string) => void;
  onClose: () => void;
}

// 열린 메인 메뉴에 따라 알맞은 패널을 보여줌
export const DrawerContent = ({
  menu,
  openMainMenu,
  navigate,
  onClose,
}: DrawerContentProps) => {
  if (!menu) return null;

  if (openMainMenu === "PRODUCT & SERVICES") {
    return <ProductPanel menu={menu} navigate={navigate} onClose={onClose} />;
  }

  if (openMainMenu === "SOLUTIONS") {
    return <SolutionsPanel navigate={navigate} onClose={onClose} />;
  }

  // SUPPORT / COMPANY : 링크 목록만
  return <SimpleMenuPanel menu={menu} navigate={navigate} onClose={onClose} />;
};
