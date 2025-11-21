import { Box } from "@mui/material";

import solutionBlankImage from "/images/pages/solution/solution main_blank.png";

const SolutionIslandImage = () => {
  return (
    <Box
      component="img"
      src={solutionBlankImage}
      alt="solution"
      sx={{
        maxHeight: "88vh",
        objectFit: "contain",
        width: "100%",
        display: "block",
        marginTop: "-4%",
        marginBottom: "-4%",
      }}
    />
  );
};

export default SolutionIslandImage;
