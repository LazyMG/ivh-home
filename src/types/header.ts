// 메뉴 아이템
export interface MenuItem {
  name: string;
  path: string;
  disabled: boolean;
  deps?: number;
}

// 서브 컬럼
export interface SubColumn {
  title: string;
  items: MenuItem[];
}

// 메뉴 컬럼
export interface MenuColumn {
  title?: string;
  items?: MenuItem[];
  subColumns?: SubColumn[];
}

// 메인 메뉴
export interface MainMenuItem {
  title: string;
  path: string;
  columns?: MenuColumn[];
  items?: MenuItem[];
}

// 전체 메뉴 데이터
export interface MenuData {
  mainMenu: MainMenuItem[];
}

// === Styled Component Props ===
export interface ColumnStyleProps {
  $isProductPage?: boolean;
  $isLogoColumn?: boolean;
  $isHomePage?: boolean;
}

export interface MenuItemStyleProps {
  disabled?: boolean;
  $isHomePage?: boolean;
  $deps?: number;
}

export interface MenuTitleStyleProps {
  $isHomePage?: boolean;
}
