import { Box, Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

interface AccordionMenuItem {
  name: string;
  path?: string;
  state?: string;
}

interface AccordionMenuProps {
  items: AccordionMenuItem[];
  navigate: (path: string) => void;
  onClose: () => void;
  itemMaxWidth?: string;
}

export const AccordionMenu = ({
  items,
  navigate,
  onClose,
  itemMaxWidth = "280px",
}: AccordionMenuProps) => {
  const handleNavigate = (path?: string) => {
    if (path && path !== "#") {
      navigate(path);
      onClose();
    }
  };

  // hide 상태가 아닌 아이템만 필터링
  const visibleItems = items.filter((item) => item.state !== "hide");

  // 10행씩 열로 나누기 (세로 우선 배치)
  const rowsPerColumn = 10;
  const columns: AccordionMenuItem[][] = [];

  for (let i = 0; i < visibleItems.length; i += rowsPerColumn) {
    columns.push(visibleItems.slice(i, i + rowsPerColumn));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        my: 1,
        width: "100%",
      }}
    >
      {columns.map((columnItems, colIndex) => (
        <Box
          key={colIndex}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            // 첫 번째 열 제외하고 왼쪽에 구분선
            ...(colIndex > 0 && {
              borderLeft: "1px solid #e0e0e0",
              pl: 3,
            }),
            // 마지막 열 제외하고 오른쪽 패딩
            ...(colIndex < columns.length - 1 && {
              pr: 3,
            }),
            // width: "100%",
            boxSizing: "border-box",
          }}
        >
          {columnItems.map((item, itemIndex) => (
            <Typography
              key={itemIndex}
              onClick={() => handleNavigate(item.path)}
              sx={{
                fontSize: "14px",
                fontFamily: FONTS.galderglynn.book,
                color: "#B2B2B2",
                cursor: "pointer",
                pl: 1.5,
                py: 0.5,
                maxWidth: itemMaxWidth,
                wordBreak: "keep-all",
                "&:hover": {
                  color: "#005AD5",
                },
                textTransform: "uppercase",
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};
