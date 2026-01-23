import { Box } from "@mui/material";
import MainGradientText from "../common/MainGradientText";

const LibraryHeader = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        py: 1,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderImage: "linear-gradient(90deg, #339070 0%, #1755C2 100%) 1",
      }}
    >
      <MainGradientText
        sx={(theme) => ({
          fontFamily: "Freesentation-6-SemiBold",
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
