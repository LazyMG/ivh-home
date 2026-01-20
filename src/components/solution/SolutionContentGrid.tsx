import { Grid } from "@mui/material";
import SolutionContent, { type SolutionContentItem } from "./SolutionContent";
import { calculateContentDivider } from "../../utils/solutionUtils";

interface SolutionContentGridProps {
  items: SolutionContentItem[];
  color: string;
  isMobile?: boolean;
}

const SolutionContentGrid = ({
  items,
  color,
  isMobile = false,
}: SolutionContentGridProps) => {
  return (
    <Grid
      container
      columnSpacing={12}
      sx={{
        width: "100%",
        mt: 6,
        mb: 20,
        overflow: "hidden",
      }}
    >
      {items.map((item, index) => {
        const autoCalculatedDivider = calculateContentDivider(items, index);
        const needsDivider =
          item.divider !== undefined ? item.divider : autoCalculatedDivider;
        const prevItem = items[index - 1];
        const spacing =
          prevItem?.spacingAfter !== undefined ? prevItem.spacingAfter : 12;

        return (
          <Grid
            key={index}
            size={isMobile ? 12 : item.size}
            sx={{
              position: "relative",
              ...(index > 0 && {
                mt: `${spacing * 8}px`,
              }),
              ...(needsDivider && {
                "&::after": {
                  content: '""',
                  position: "absolute",
                  right: "-48px",
                  top: 0,
                  height: "100%",
                  width: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                },
              }),
            }}
          >
            <SolutionContent {...item} color={color} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SolutionContentGrid;
