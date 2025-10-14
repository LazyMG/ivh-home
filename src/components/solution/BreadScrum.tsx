import { Box, Typography, Button } from "@mui/material";
import breadscrum from "../../data/solution/breadscrum.json";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

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
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
    >
      <StyledButton onClick={() => navigate(commonpath.home.path)}>
        <Typography sx={{ marginRight: "10px" }}>
          {commonpath.home.title}
        </Typography>
      </StyledButton>
      <ArrowIcon />
      <StyledButton onClick={() => navigate(commonpath.solution.path)}>
        <Typography sx={{ marginRight: "10px" }}>
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
        <Typography>{title}</Typography>
      </StyledButton>
    </Box>
  );
};

export default BreadScrum;

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "Freesentation-7-Bold",
  fontSize: "13.5px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "22.2px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20.8px",
  },
  textTransform: "none",
  color: "#717171",
  padding: 0,
  minWidth: 0,
  //   marginLeft: "10px",
  //   marginRight: "10px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const ArrowIcon = () => {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "#9e9e9e",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        fontWeight: "bold",
        verticalAlign: "middle",
        mr: "10px",
      }}
    >
      &gt;
    </Box>
  );
};
