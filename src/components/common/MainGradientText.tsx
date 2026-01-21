import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";

interface MainGradientTextProps extends Omit<TypographyProps, "sx"> {
  children: React.ReactNode;
  sx?: TypographyProps["sx"];
}

const MainGradientText = ({ children, sx, ...props }: MainGradientTextProps) => {
  return (
    <Typography
      {...props}
      sx={[
        {
          fontFamily: "Freesentation-6-SemiBold",
          background: "linear-gradient(90deg, #339070 0%, #1755C2 100%)",
          color: "transparent",
          backgroundClip: "text",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Typography>
  );
};

export default MainGradientText;
