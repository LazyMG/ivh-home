// 재귀적 메뉴 아이템
export interface MenuItem {
  name: string;
  path?: string;
  description?: string; // 메뉴 설명 (프리뷰에 표시)
  preview_img_path?: string; // 프리뷰 이미지 경로
  items?: MenuItem[]; // 2단계 메뉴 (클릭 시 표시)
  subMenu?: MenuItem[]; // 3단계+ 메뉴 (호버 시 표시)
}

// 메인 메뉴
export interface MainMenuItem {
  title: string;
  path?: string;
  subMenu?: MenuItem[]; // 1단계 서브메뉴
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
  $isActive?: boolean;
}

export interface MenuItemStyleProps {
  disabled?: boolean;
  $isHomePage?: boolean;
  $deps?: number;
}

export interface MenuTitleStyleProps {
  $isHomePage?: boolean;
}
