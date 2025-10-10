import { Box } from "@mui/material";

interface BoxContainerProps {
  maxColumn: number;
  children: React.ReactNode;
}

{
  /** 열 개수 적용 */
}
const BoxContainer = ({ maxColumn, children }: BoxContainerProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          md: `repeat(${maxColumn},1fr)`,
          sm: `repeat(1,1fr)`,
        },
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
