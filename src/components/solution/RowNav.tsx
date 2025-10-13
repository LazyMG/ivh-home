import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

interface StyledButtonProps {
  underlineColor: string;
}

const RowNav = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="nav"
      //   sx={{
      //     width: {
      //       xs: "200px",
      //       md: "500px",
      //       lg: "800px",
      //       xl: "1450px",
      //     },
      //     m: "auto auto",
      //   }}
    >
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
          <StyledButton underlineColor="#f99818">BEMS</StyledButton>
          <StyledButton underlineColor="#cc5268">Mobility</StyledButton>
          <StyledButton underlineColor="#0c307b">Smart factory</StyledButton>
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
  ({ underlineColor }) => ({
    fontFamily: "Freesentation-6-SemiBold",
    fontSize: "18px",
    textTransform: "none",
    color: "black",
    borderBottom: `2px solid ${underlineColor}`,
    borderRadius: 0,
    paddingLeft: "32px",
    paddingRight: "0",
    paddingTop: "0",
    paddingBottom: "0",
  })
);

export default RowNav;
