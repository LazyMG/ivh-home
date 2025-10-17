import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

interface StyledButtonProps {
  underlineColor: string;
}

const RowNav = () => {
  const navigate = useNavigate();

  return (
    <Box component="nav">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ gap: 16 }} disableGutters>
          <StyledButton
            underlineColor="#279576"
            onClick={() => navigate("/solution/energy")}
          >
            Energy
          </StyledButton>
          <StyledButton
            underlineColor="#f99818"
            onClick={() => navigate("/solution/bems")}
          >
            BEMS
          </StyledButton>
          <StyledButton underlineColor="#cc5268">Mobility</StyledButton>
          <StyledButton
            underlineColor="#0c307b"
            onClick={() => navigate("/solution/smartfactory")}
          >
            Smart factory
          </StyledButton>
          <StyledButton underlineColor="#0095d7">
            Al Innovation Hub
          </StyledButton>
          <StyledButton
            underlineColor="#92b843"
            onClick={() => navigate("/solution/home-appliance")}
          >
            Home appliance
          </StyledButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, underlineColor }) => ({
    fontFamily: "Freesentation-6-SemiBold",
    fontSize: "18.9px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "31.06px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "29.2px",
    },
    textTransform: "none",
    color: "black",
    borderBottom: `2px solid ${underlineColor}`,
    borderRadius: 0,
    paddingLeft: "32px",
    paddingRight: "0",
    paddingTop: "0",
    paddingBottom: "0",
    "&:hover": {
      backgroundColor: "transparent",
      color: underlineColor,
    },
  })
);

export default RowNav;
