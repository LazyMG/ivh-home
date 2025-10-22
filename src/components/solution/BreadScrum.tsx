import { Box, Typography, Button } from "@mui/material";
import breadscrum from "../../data/solution/breadscrum.json";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
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
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "flex-start" : "flex-end",
        mb: isMobile ? 0 : 2,
      }}
    >
      <StyledButton
        onClick={() => navigate(commonpath.home.path)}
        isMobile={isMobile}
      >
        <Typography
          variant="breadScrumFont"
          sx={{
            mr: "10px",
          }}
        >
          {commonpath.home.title}
        </Typography>
      </StyledButton>
      <ArrowIcon isMobile={isMobile} />
      <StyledButton
        onClick={() => navigate(commonpath.solution.path)}
        isMobile={isMobile}
      >
        <Typography
          variant="breadScrumFont"
          sx={{
            mr: "10px",
          }}
        >
          {commonpath.solution.title}
        </Typography>
      </StyledButton>
      <ArrowIcon isMobile={isMobile} />
      <StyledButton
        isMobile={isMobile}
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

const StyledButton = styled(Button)(({ isMobile }: { isMobile: boolean }) => ({
  textTransform: "none",
  color: "#717171",
  padding: 0,
  minWidth: 0,
  fontSize: isMobile ? "8px" : "16px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const ArrowIcon = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Box
      component="span"
      sx={(theme) => ({
        display: "inline-flex",
        width: isMobile ? 10 : 16,
        height: isMobile ? 10 : 16,
        borderRadius: "50%",
        backgroundColor: "#9e9e9e",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        verticalAlign: "middle",
        mr: isMobile ? "5px" : "10px",
        fontSize: isMobile ? 10 : 16,
        [theme.breakpoints.up("tablet")]: {
          fontSize: 24,
        },
      })}
    >
      <KeyboardArrowRightIcon fontSize="inherit" />
    </Box>
  );
};
