import { Box } from "@mui/material";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

interface ColumnHeaderLineProps {
  children: ReactNode;
  // 선 길이/정렬 등은 사용하는 쪽에서 sx로 지정
  sx?: SxProps<Theme>;
}

// 컬럼 헤더 아래 구분선 + 선 끝의 작은 원
export const ColumnHeaderLine = ({ children, sx }: ColumnHeaderLineProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        pb: 1,
        mb: 2,
        borderBottom: "1px solid #828282",
        ...sx,
      }}
    >
      {children}

      {/* 선 끝의 작은 원 (중심이 선과 일치) */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          transform: "translate(50%, 50%)",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#828282",
        }}
      />
    </Box>
  );
};
