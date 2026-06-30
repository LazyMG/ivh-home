import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { FONTS } from "../../theme/theme";

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
          fontFamily: FONTS.freesentation.semiBold,
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
