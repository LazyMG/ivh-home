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
      spacing={12}
      sx={{
        width: "100%",
        mt: 6,
        mb: 20,
      }}
    >
      {items.map((item, index) => {
        const needsDivider = calculateContentDivider(items, index);
        return (
          <Grid
            key={index}
            size={isMobile ? 12 : item.size}
            sx={{
              position: "relative",
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
