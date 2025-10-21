import { Box, Typography, Button } from "@mui/material";
import breadscrum from "../../data/solution/breadscrum.json";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const BreadScrum = ({ title }: { title: string }) => {
  const {
    commonpath,
    energy,
    bems,
    mobility,
    smartfactory,
    alinnovationhub,
    homeappliance,
  } = breadscrum.breadscrum;
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        mb: 2,
      }}
    >
      <StyledButton onClick={() => navigate(commonpath.home.path)}>
        <Typography
          variant="breadScrumFont"
          sx={{
            mr: "10px",
          }}
        >
          {commonpath.home.title}
        </Typography>
      </StyledButton>
      <ArrowIcon />
      <StyledButton onClick={() => navigate(commonpath.solution.path)}>
        <Typography
          variant="breadScrumFont"
          sx={{
            mr: "10px",
          }}
        >
          {commonpath.solution.title}
        </Typography>
      </StyledButton>
      <ArrowIcon />
      <StyledButton
        onClick={() => {
          switch (title) {
            case energy.title:
              navigate(energy.path);
              break;
            case bems.title:
              navigate(bems.path);
              break;
            case mobility.title:
              navigate(mobility.path);
              break;
            case smartfactory.title:
              navigate(smartfactory.path);
              break;
            case alinnovationhub.title:
              navigate(alinnovationhub.path);
              break;
            case homeappliance.title:
              navigate(homeappliance.path);
              break;
            default:
              break;
          }
        }}
      >
        <Typography variant="breadScrumFont">{title}</Typography>
      </StyledButton>
    </Box>
  );
};

export default BreadScrum;

const StyledButton = styled(Button)(() => ({
  textTransform: "none",
  color: "#717171",
  padding: 0,
  minWidth: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const ArrowIcon = () => {
  return (
    <Box
      component="span"
      sx={(theme) => ({
        display: "inline-flex",
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "#9e9e9e",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        verticalAlign: "middle",
        mr: "10px",
        fontSize: 16,
        [theme.breakpoints.up("tablet")]: {
          fontSize: 24,
        },
      })}
    >
      <KeyboardArrowRightIcon fontSize="inherit" />
    </Box>
  );
};
