import { useState } from "react";
import { Box, Typography } from "@mui/material";
import type { MenuItem } from "../../types/header";
import solutionMenu from "../../data/header/solutionMenu.json";
import { ColumnHeaderLine } from "./ColumnHeaderLine";
import { AccordionItem } from "./AccordionItem";
import { FONTS } from "../../theme/theme";

interface SolutionsPanelProps {
  navigate: (path: string) => void;
  onClose: () => void;
}

// SOLUTIONS : 단일 컬럼 + 아코디언 (데이터는 solutionMenu.json)
export const SolutionsPanel = ({ navigate, onClose }: SolutionsPanelProps) => {
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

  const items = (solutionMenu.subMenu as MenuItem[]).filter(
    (item) => item.state !== "hide",
  );

  return (
    <Box
      sx={{
        pt: 1,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* 헤더 (Solutions 타이틀 + 구분선) */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <ColumnHeaderLine sx={{ width: "500px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: FONTS.galderglynn.regular,
              color: "#000000",
              textTransform: "uppercase",
            }}
          >
            Solutions
          </Typography>
        </ColumnHeaderLine>
      </Box>

      {/* 본문 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: isAccordionOpen ? "100%" : "auto",
        }}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.name}
            item={item}
            isOpen={openAccordion === item.name}
            onToggle={() => toggleAccordion(item.name)}
            onNavigate={handleNavigate}
            navigate={navigate}
            onClose={onClose}
            subMenuMaxWidth="500px"
          />
        ))}
      </Box>
    </Box>
  );
};
