import { Box } from "@mui/material";
import MainGradientText from "../common/MainGradientText";
import { FONTS } from "../../theme/theme";

const LibraryHeader = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        py: 1,
        borderTop: "2px solid",
        borderBottom: "2px solid",
        borderImage: "linear-gradient(90deg, #339070 0%, #1755C2 100%) 1",
      }}
    >
      <MainGradientText
        component="h2"
        sx={(theme) => ({
          fontFamily: FONTS.freesentation.semiBold,
          fontSize: "16px",
          [theme.breakpoints.up("tablet")]: {
            fontSize: "18px",
          },
        })}
      >
        {text}
      </MainGradientText>
    </Box>
  );
};
export default LibraryHeader;
