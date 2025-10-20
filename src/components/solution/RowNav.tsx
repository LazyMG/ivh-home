import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
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
      sx={(theme) => ({
        ...theme.customStyles.solutionMainRowNavContainer,
      })}
    >
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar
          sx={(theme) => ({
            ...theme.customStyles.solutionMainRowNav,
          })}
          disableGutters
        >
          <Box
            sx={(theme) => ({
              ...theme.customStyles.solutionMainRowNavItemContainer,
            })}
          >
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <Typography
                onClick={() => navigate("/solution/mobility")}
                sx={(theme) => ({
                  ...theme.typography.solutionMainNavFont,
                  width: "fit-content",
                  textTransform: "none",
                  color: "black",
                  borderBottom: `2px solid #cc5268`,
                  borderRadius: 0,
                  padding: "0",

                  [theme.breakpoints.up("laptop")]: {
                    padding: "0 0 0 16px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  },
                  "&:hover": {
                    color: `#cc5268`,
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  },
                })}
              >
                Mobility
              </Typography>
            </Box>
            {/* <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledButton
                underlineColor="#279576"
                onClick={() => navigate("/solution/energy")}
              >
                Energy
              </StyledButton>
            </Box> */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledButton
                underlineColor="#0095d7"
                onClick={() => navigate("/solution/aIinnovationhub")}
              >
                Al Innovation Hub
              </StyledButton>
            </Box>
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <Typography
                onClick={() => navigate("/solution/energy")}
                sx={(theme) => ({
                  ...theme.typography.solutionMainNavFont,
                  width: "fit-content",
                  textTransform: "none",
                  color: "black",
                  borderBottom: `2px solid #279576`,
                  borderRadius: 0,
                  padding: "0",

                  [theme.breakpoints.up("laptop")]: {
                    padding: "0 0 0 16px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  },
                  "&:hover": {
                    color: `#279576`,
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  },
                })}
              >
                Energy
              </Typography>
            </Box>
          </Box>
          <Box
            sx={(theme) => ({
              ...theme.customStyles.solutionMainRowNavItemContainer,
            })}
          >
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledButton
                underlineColor="#0c307b"
                onClick={() => navigate("/solution/smartfactory")}
              >
                Smart factory
              </StyledButton>
            </Box>
            {/* <Box
            sx={(theme) => ({
              ...theme.customStyles.solutionMainRowNavItem,
            })}
          >
            <StyledButton
              underlineColor="#f99818"
              onClick={() => navigate("/solution/bems")}
            >
              BEMS
            </StyledButton>
          </Box> */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <Typography
                onClick={() => navigate("/solution/bems")}
                sx={(theme) => ({
                  ...theme.typography.solutionMainNavFont,
                  width: "fit-content",
                  textTransform: "none",
                  color: "black",
                  borderBottom: `2px solid #f99818`,
                  borderRadius: 0,
                  padding: "0",

                  [theme.breakpoints.up("laptop")]: {
                    padding: "0 0 0 16px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  },
                  "&:hover": {
                    color: `#f99818`,
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  },
                })}
              >
                BEMS
              </Typography>
            </Box>
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledButton
                underlineColor="#92b843"
                onClick={() => navigate("/solution/homeappliance")}
              >
                Home appliance
              </StyledButton>
            </Box>
            {/* <Box
            sx={(theme) => ({
              ...theme.customStyles.solutionMainRowNavItem,
            })}
          >
            <StyledButton
              underlineColor="#cc5268"
              onClick={() => navigate("/solution/mobility")}
            >
              Mobility
            </StyledButton>
          </Box> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, underlineColor }) => ({
    ...theme.typography.solutionMainNavFont,
    // fontFamily: "Freesentation-6-SemiBold",
    // fontSize: "18.9px",
    // [theme.breakpoints.up("sm")]: {
    //   fontSize: "31.06px",
    // },
    // [theme.breakpoints.up("md")]: {
    //   // fontSize: "29.2px",
    //   fontSize: "24px",
    // },
    width: "fit-content",
    textTransform: "none",
    color: "black",
    borderBottom: `2px solid ${underlineColor}`,
    borderRadius: 0,
    padding: "0",

    [theme.breakpoints.up("laptop")]: {
      padding: "0 0 0 32px",
      width: "100%",
    },
    "&:hover": {
      color: `${underlineColor}`,
      backgroundColor: "transparent",
    },
  })
);

export default RowNav;
