import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

const GradientBox = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "24px",
        display: "flex",
        position: "relative",
        background:
          "linear-gradient(white, white) padding-box, linear-gradient(to right, #339070, #1755C2) border-box",
        border: "2px solid transparent",
        justifyContent: "space-between",
        boxSizing: "border-box",
        gap: 3,
        flexDirection: "row",
      }}
    >
      <>
        <Typography
          sx={{
            fontFamily: "Freesentation-7-Bold",
            color: "#fff",
            py: 0.5,
            borderRadius: "8px",
            textAlign: "center",
            position: "absolute",
            top: -16,
            left: 48,
            width: "216px",
            fontSize: "24px",
            background: `linear-gradient(to right, #339070, #1755C2 100%)`,
          }}
        >
          {title}
        </Typography>
        {children}
      </>
    </Box>
  );
};

export default GradientBox;
