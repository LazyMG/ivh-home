import { Box } from "@mui/material";
import type { MainMenuItem } from "../../types/header";
import { SubMenuColumn } from "../../style/header/column.styles";
import youtubeWhite from "/images/header/youtube_white.png";
import linkedinWhite from "/images/header/linkedin_white.png";
import youtubeBlack from "/images/header/youtube_black.png";
import linkedinBlack from "/images/header/linkedin_black.png";
import { SubMenuParents } from "./SubMenuParents";
import { SubMenuChild } from "./SubMenuChild";
import { MenuPreview } from "./MenuPreview";
import { useMenuPreview } from "../../hooks/useMenuPreview";
import { previewDurations } from "./previewConstants";

interface SubMenuDrawerProps {
  allMenuItems: MainMenuItem[];
  openedMenuIndex: number;
  isHomePage: boolean;
  navigate: (path: string) => void;
  openLevel1Menu: string | null;
  onLevel1Click: (name: string) => void;
  onClose: () => void;
}

export const SubMenuDrawer = ({
  allMenuItems,
  openedMenuIndex,
  isHomePage,
  navigate,
  openLevel1Menu,
  onLevel1Click,
  onClose,
}: SubMenuDrawerProps) => {
  const openedMenu = allMenuItems[openedMenuIndex];

  // 프리뷰 상태 관리 커스텀 훅 사용
  const {
    previewItem,
    previewPosition,
    previewVisible,
    handlePreviewItemChange,
  } = useMenuPreview({
    fadeOutDuration: previewDurations.fadeOut,
  });
  // 2단계 메뉴의 배경색
  const level2BackgroundColor = "#2a2a2a";

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        width: "100%",
        minHeight: "400px",
        // maxHeight: "400px",
        zIndex: 999,
        display: "flex",
        flexDirection: "row",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
      }}
      onClick={(e) => {
        // 빈 공간 클릭 시 닫기
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onMouseLeave={() => {
        // 메뉴 영역을 벗어날 때 프리뷰 숨기기
        handlePreviewItemChange(null);
      }}
    >
      {/* 왼쪽 영역: 로고 + 1단계 메뉴 (검은색) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: isHomePage ? "#000" : "#ffffff",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        {/* 상단: 메뉴 영역 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {/* 로고 영역 빈 공간 */}
          {openedMenuIndex === 3 ? (
            <SubMenuColumn sx={{ flex: 18 }} />
          ) : (
            <SubMenuColumn sx={{ flex: 3 }} />
          )}
          {/* 1단계 서브메뉴 영역 */}
          <SubMenuColumn
            $isProductPage={openedMenu.path === "/product"}
            sx={{
              position: "relative",
              flex: 3,
            }}
          >
            <SubMenuParents
              items={openedMenu.subMenu || []}
              isHomePage={isHomePage}
              navigate={navigate}
              openLevel1Menu={openLevel1Menu}
              onLevel1Click={onLevel1Click}
              onPreviewItemChange={handlePreviewItemChange}
            />
          </SubMenuColumn>
        </Box>

        {/* 하단: 소셜 미디어 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <SubMenuColumn $isLogoColumn={true}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src={isHomePage ? youtubeWhite : youtubeBlack}
                alt="youtube"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={() => window.open("https://www.youtube.com/@ivhkorea")}
              />
              <img
                src={isHomePage ? linkedinWhite : linkedinBlack}
                alt="linkedin"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://kr.linkedin.com/company/ivhkr?trk=public_post_feed-actor-image"
                  )
                }
              />
            </Box>
          </SubMenuColumn>
          {/* 0번부터 openedMenuIndex까지의 빈 공간 */}
          {allMenuItems.slice(0, openedMenuIndex + 1).map((item, index) => (
            <SubMenuColumn
              key={`empty-left-${index}`}
              $isProductPage={item.path === "/product"}
            />
          ))}
        </Box>
      </Box>
      {/* 오른쪽 영역: 나머지 메뉴들 (2단계 메뉴 열릴 때 회색) */}
      {openedMenuIndex !== 3 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: openLevel1Menu
              ? level2BackgroundColor
              : isHomePage
              ? "#000"
              : "#ffffff",
            flex: 2,
            position: "relative",
            zIndex: 1,
            minHeight: "300px",
          }}
        >
          {/* 2단계 이상 중첩 서브메뉴 - absolute로 배치 */}
          {openLevel1Menu && (
            <Box
              sx={{
                position: "absolute",
                top: 0,

                display: "flex",
                flexDirection: "row",
                zIndex: 10,
                backgroundColor: level2BackgroundColor,
                // minHeight: "300px",
                height: "100%",
                width: "100%",
              }}
            >
              <SubMenuChild
                parentItem={openedMenu.subMenu?.find(
                  (subItem) => subItem.name === openLevel1Menu
                )}
                isHomePage={isHomePage}
                navigate={navigate}
                level={2}
                onPreviewItemChange={handlePreviewItemChange}
              />
            </Box>
          )}
          {/* 상단: 나머지 메뉴 컬럼들 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* openedMenuIndex+1부터 끝까지의 컬럼들 */}
            {allMenuItems.slice(openedMenuIndex + 1).map((item, index) => (
              <SubMenuColumn
                key={openedMenuIndex + 1 + index}
                $isProductPage={item.path === "/product"}
              />
            ))}
          </Box>

          {/* 하단: 빈 공간 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* openedMenuIndex+1부터 끝까지의 빈 공간 */}
            {allMenuItems.slice(openedMenuIndex + 1).map((item, index) => (
              <SubMenuColumn
                key={`empty-right-${index}`}
                $isProductPage={item.path === "/product"}
              />
            ))}
          </Box>
        </Box>
      )}
      {/* 메뉴 프리뷰 */}
      {previewItem && (
        <MenuPreview
          item={previewItem}
          isHomePage={isHomePage}
          position={previewPosition}
          visible={previewVisible}
        />
      )}
    </Box>
  );
};
