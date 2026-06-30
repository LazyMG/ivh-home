import { useState } from "react";
import { Box, Typography } from "@mui/material";
import type { MainMenuItem } from "../../types/header";
import { ColumnHeaderLine } from "./ColumnHeaderLine";
import { AccordionItem } from "./AccordionItem";

interface ProductPanelProps {
  menu: MainMenuItem;
  navigate: (path: string) => void;
  onClose: () => void;
}

// PRODUCT & SERVICES : 컬럼형 메뉴 + 아코디언
export const ProductPanel = ({
  menu,
  navigate,
  onClose,
}: ProductPanelProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const isAccordionOpen = openAccordion !== null;

  const toggleAccordion = (name: string) =>
    setOpenAccordion((prev) => (prev === name ? null : name));

  const handleNavigate = (path?: string) => {
    if (path && path !== "#") {
      navigate(path);
      onClose();
    }
  };

  // 보이는 컬럼만 (숨김 컬럼 / 아이템이 전부 숨김인 컬럼 제외)
  // 헤더와 본문이 같은 목록을 쓰므로 컬럼 위치가 항상 일치
  const visibleColumns = (menu.subMenu ?? []).filter((column) => {
    if (column.state === "hide") return false;
    return column.items?.some((item) => item.state !== "hide");
  });

  return (
    <Box
      sx={{
        pt: 1,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* 컬럼 헤더 (타이틀 한 줄 + 구분선) */}
      <ColumnHeaderLine
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: isAccordionOpen ? 0 : 6,
          justifyContent: isAccordionOpen ? "space-between" : "auto",
          // 닫힘: 컬럼 폭에 맞춤 / 열림: 전체폭으로 늘려 2번째 타이틀을 오른쪽으로
          width: isAccordionOpen ? "100%" : "fit-content",
        }}
      >
        {visibleColumns.map((column) => (
          <Box key={column.name} sx={{ minWidth: "260px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Freesentation-6-SemiBold",
                color: "#000000",
                textTransform: "uppercase",
              }}
            >
              {column.name}
            </Typography>
          </Box>
        ))}
      </ColumnHeaderLine>

      {/* 컬럼 본문 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: isAccordionOpen ? 0 : 6,
          width: "100%",
        }}
      >
        {visibleColumns.map((column) => {
          // 아코디언이 열렸을 땐 Products 컬럼만 표시
          if (isAccordionOpen && column.name !== "Products") return null;

          return (
            <Box
              key={column.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                flex: isAccordionOpen ? 1 : "none",
                // 헤더 컬럼과 동일한 폭으로 정렬 (260px)
                width: isAccordionOpen ? "100%" : "260px",
              }}
            >
              {column.items
                ?.filter((item) => item.state !== "hide")
                .map((item) => (
                  <AccordionItem
                    key={item.name}
                    item={item}
                    isOpen={openAccordion === item.name}
                    onToggle={() => toggleAccordion(item.name)}
                    onNavigate={handleNavigate}
                    navigate={navigate}
                    onClose={onClose}
                  />
                ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
