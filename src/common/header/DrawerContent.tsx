import { Box, Divider, Typography } from "@mui/material";
import type { MainMenuItem, MenuItem } from "../../types/header";
import { AccordionMenu } from "./AccordionMenu";
import { useEffect, useState, useRef } from "react";
import HeaderSolution from "./HeaderSolution";

interface DrawerContentProps {
  menu: MainMenuItem | undefined;
  menuItems: MainMenuItem[];
  openMainMenu: string;
  navigate: (path: string) => void;
  onClose: () => void;
}

export const DrawerContent = ({
  menu,
  menuItems,
  openMainMenu,
  navigate,
  onClose,
}: DrawerContentProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [hoverMenu, setHoverMenu] = useState<MenuItem | null>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [previewPosition, setPreviewPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const hoverItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hoverMenu && hoverMenu.name === "iMOVA") {
      // if (hoverMenu && hoverMenu.preview_img_path && hoverMenu.description) {
      setIsPreview(true);
    }
  }, [hoverMenu]);

  if (!menu) return null;

  const handleAccordionClick = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const handleNavigate = (path?: string) => {
    if (path && path !== "#") {
      navigate(path);
      onClose();
    }
  };

  // PRODUCT & SERVICES 메뉴 (아코디언 포함)
  if (openMainMenu === "PRODUCT & SERVICES") {
    // 아코디언이 열려있는지 확인
    const isAccordionOpen = openAccordion !== null;

    return (
      <Box
        sx={{
          flex: 1,
          px: 3,
          py: 4,
          ml: "24%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: isAccordionOpen ? 0 : 10,
            justifyContent: isAccordionOpen ? "space-between" : "auto",
          }}
        >
          {menu.subMenu?.map((column, colIndex) => {
            if (column.state === "hide") return null;

            // 모든 아이템이 hide이면 컬럼 전체를 숨김
            const hasVisibleItems = column.items?.some(
              (item) => item.state !== "hide",
            );
            if (!hasVisibleItems) return null;

            return (
              <Box
                key={colIndex}
                sx={{
                  minWidth: "350px",
                }}
              >
                {/* 컬럼 타이틀 */}
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Freesentation-6-SemiBold",
                    color: "#000000",
                    mb: 2,
                    pb: 1,
                    borderBottom: `1px solid #828282`,
                  }}
                >
                  {column.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: isAccordionOpen ? 0 : 13,
            width: "100%",
          }}
        >
          {menu.subMenu?.map((column, colIndex) => {
            // 아코디언이 열렸을 때 Products가 아닌 컬럼은 렌더링하지 않음
            if (isAccordionOpen && column.name !== "Products") {
              return null;
            }

            return (
              <Box
                key={colIndex}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  flex: isAccordionOpen ? 1 : "none",
                  width: isAccordionOpen ? "100%" : "auto",
                }}
              >
                {column.items?.map((item, itemIndex) => {
                  if (item.state === "hide") return null;

                  const hasSubMenu = item.subMenu && item.subMenu.length > 0;
                  const isOpen = openAccordion === item.name;

                  return (
                    <Box
                      key={itemIndex}
                      ref={hoverMenu?.name === item.name ? hoverItemRef : null}
                      sx={{
                        position: "relative",
                        width: isOpen ? "100%" : "fit-content",
                      }}
                      onMouseOver={(e) => {
                        setHoverMenu(item);
                        const rect = e.currentTarget.getBoundingClientRect();
                        setPreviewPosition({
                          top: rect.top,
                          left: rect.right + 56,
                        });
                      }}
                      onMouseLeave={() => {
                        setHoverMenu(null);
                        setIsPreview(false);
                        setPreviewPosition(null);
                      }}
                    >
                      <Typography
                        onClick={() => {
                          if (hasSubMenu) {
                            handleAccordionClick(item.name);
                          } else {
                            handleNavigate(item.path);
                          }
                        }}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Freesentation-6-SemiBold",
                          color: "#424242",
                          cursor: "pointer",
                          py: 0.5,
                          width: "fit-content",
                          "&:hover": {
                            color: "#179EBD",
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
                      {isPreview && hoverMenu?.name === item.name && (
                        <>
                          <Box
                            sx={{
                              position: "absolute",
                              left: "calc(100% + 10px)",
                              top: 0,
                              bottom: 0,
                              my: "auto",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                width: "6px",
                                height: "6px",
                                backgroundColor: "#179EBD",
                                borderRadius: "50%",
                              }}
                            />
                            <Box
                              sx={{
                                width: "40px",
                                height: "2px",
                                backgroundColor: "#179EBD",
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              position: "fixed",
                              backgroundColor: "#ffffff",
                              left: previewPosition?.left ?? 0,
                              top: previewPosition?.top ?? 0,
                              width: "380px",
                              minHeight: "184px",
                              border: "2px solid #179EBD",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              zIndex: 9999,
                              py: 1,
                              boxSizing: "border-box",
                              boxShadow: "2px 4px 4px 0 rgba(0, 0, 0, 0.25)",
                            }}
                          >
                            <Box
                              component="img"
                              src={hoverMenu.preview_img_path}
                              sx={{ width: "auto", maxWidth: "50%" }}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                px: 4,
                                py: 1,
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#179EBD",
                                  fontSize: "20px",
                                  fontFamily: "Freesentation-6-SemiBold",
                                  lineHeight: "20px",
                                }}
                              >
                                {hoverMenu.name}
                              </Typography>
                              <Divider
                                orientation="vertical"
                                variant="middle"
                                sx={{
                                  bgcolor: "#179EBD",
                                  width: 2,
                                  height: "30px",
                                }}
                              />
                              <Typography
                                sx={{
                                  fontFamily: "Freesentation-5-Medium",
                                  fontSize: "12px",
                                  wordBreak: "keep-all",
                                }}
                              >
                                {hoverMenu.description}
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      )}

                      {/* 아코디언 하위 메뉴 - 상위 항목 바로 아래 */}
                      {hasSubMenu && isOpen && (
                        <AccordionMenu
                          items={item.subMenu || []}
                          navigate={navigate}
                          onClose={onClose}
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Box>

        {/* <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
          {menu.subMenu?.map((column, colIndex) => {
            if (column.state === "hide") return null;

            // 모든 아이템이 hide이면 컬럼 전체를 숨김
            const hasVisibleItems = column.items?.some(
              (item) => item.state !== "hide",
            );
            if (!hasVisibleItems) return null;

            // Service 컬럼인지 확인
            const isServiceColumn = column.name === "Service";

            // 아코디언이 열렸고 Service 컬럼이면 타이틀만 표시
            if (isAccordionOpen && isServiceColumn) {
              return (
                <Box key={colIndex} sx={{ minWidth: "350px" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Freesentation-6-SemiBold",
                      color: "#000000",
                      mb: 2,
                      pb: 1,
                      borderBottom: `1px solid #828282`,
                    }}
                  >
                    {column.name}
                  </Typography>
                </Box>
              );
            }

            return (
              <Box
                key={colIndex}
                sx={{
                  minWidth: "350px",
                  // 아코디언이 열리면 Products 컬럼이 확장
                  flex:
                    isAccordionOpen && column.name === "Products" ? 1 : "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Freesentation-6-SemiBold",
                    color: "#000000",
                    mb: 2,
                    pb: 1,
                    borderBottom: `1px solid #828282`,
                  }}
                >
                  {column.name}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {column.items?.map((item, itemIndex) => {
                    if (item.state === "hide") return null;

                    const hasSubMenu = item.subMenu && item.subMenu.length > 0;
                    const isOpen = openAccordion === item.name;

                    return (
                      <Box key={itemIndex}>
                        <Typography
                          onClick={() => {
                            if (hasSubMenu) {
                              handleAccordionClick(item.name);
                            } else {
                              handleNavigate(item.path);
                            }
                          }}
                          sx={{
                            fontSize: "14px",
                            fontFamily: "Freesentation-6-SemiBold",
                            color: "#424242",
                            cursor: "pointer",
                            py: 0.5,
                            width: "fit-content",
                            "&:hover": {
                              color: "#179EBD",
                            },
                          }}
                        >
                          {item.name}
                        </Typography>

                        {hasSubMenu && isOpen && (
                          <AccordionMenu
                            items={item.subMenu || []}
                            navigate={navigate}
                            onClose={onClose}
                          />
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box> */}
      </Box>
    );
  }

  if (openMainMenu === "SOLUTIONS") {
    return <HeaderSolution />;
  }

  // SUPPORT, COMPANY 메뉴 (함께 표시)
  const supportMenu = menuItems.find((item) => item.title === "SUPPORT");
  const companyMenu = menuItems.find((item) => item.title === "COMPANY");

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        gap: "40%",
        pt: 4,
        ml: "65%",
      }}
    >
      {/* SUPPORT */}
      {supportMenu && (
        <Box sx={{ pl: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {supportMenu.subMenu?.map((item, index) => {
              if (item.state === "hide") return null;
              return (
                <Typography
                  key={index}
                  onClick={() => handleNavigate(item.path)}
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Freesentation-4-Regular",
                    color: "#000000",
                    cursor: "pointer",
                    py: 0.5,
                    width: "fit-content",
                    "&:hover": {
                      color: "#179EBD",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              );
            })}
          </Box>
        </Box>
      )}

      {/* COMPANY */}
      {companyMenu && (
        <Box sx={{ pl: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {companyMenu.subMenu?.map((item, index) => {
              if (item.state === "hide") return null;
              return (
                <Typography
                  key={index}
                  onClick={() => handleNavigate(item.path)}
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Freesentation-4-Regular",
                    color: "#000000",
                    cursor: "pointer",
                    py: 0.5,
                    width: "fit-content",
                    "&:hover": {
                      color: "#179EBD",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};
