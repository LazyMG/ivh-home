import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

type MobileSpecRowProps = {
  label: string;
  value: ReactNode;
  isLast?: boolean;
  valueFontSize?: string;
};

export const MobileSpecRow = ({
  label,
  value,
  isLast,
  valueFontSize,
}: MobileSpecRowProps) => (
  <Box
    sx={
      isLast
        ? { display: "flex", py: 1, gap: 2 }
        : {
            display: "flex",
            py: 1,
            borderBottom: "1px solid #e0e0e0",
            gap: 2,
          }
    }
  >
    <Typography
      sx={{
        flex: "0 0 180px",
        color: "#666",
        fontFamily: "Freesentation-5-Medium",
      }}
    >
      {label}
    </Typography>
    <Typography
      sx={{
        flex: 1,
        fontFamily: "Freesentation-5-Medium",
        ...(valueFontSize ? { fontSize: valueFontSize } : null),
      }}
    >
      {value}
    </Typography>
  </Box>
);

type DesktopSpecRowProps = {
  label: string;
  values: ReactNode[];
  valueFontSize?: string;
  sectionTitle?: { title: string; rowSpan: number };
};

export const DesktopSpecRow = ({
  label,
  values,
  valueFontSize,
  sectionTitle,
}: DesktopSpecRowProps) => (
  <Box component="tr">
    {sectionTitle && (
      <Box
        component="th"
        rowSpan={sectionTitle.rowSpan}
        sx={{
          width: "200px",
          backgroundColor: "#000",
          color: "#fff",
          p: 2,
          fontWeight: "bold",
          textAlign: "center",
          border: "1px solid #e0e0e0",
          verticalAlign: "middle",
        }}
      >
        <Typography
          sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "18px" }}
        >
          {sectionTitle.title}
        </Typography>
      </Box>
    )}
    <Box
      component="th"
      sx={{
        width: "150px",
        p: 2,
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography
        sx={{
          color: "#364B60",
          fontFamily: "Freesentation-5-Medium",
          fontSize: "16px",
        }}
      >
        {label}
      </Typography>
    </Box>
    {values.map((value, index) => (
      <Box
        component="td"
        key={index}
        sx={{
          p: 2,
          border: "1px solid #e0e0e0",
          textAlign: "left",
        }}
      >
        <Typography
          sx={{
            color: "#364B60",
            fontFamily: "Freesentation-5-Medium",
            fontSize: valueFontSize ?? "16px",
          }}
        >
          {value}
        </Typography>
      </Box>
    ))}
  </Box>
);
