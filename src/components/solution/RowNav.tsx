import { Box, AppBar, Toolbar, Typography } from "@mui/material";
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
          {/** 네비게이션 메뉴 컨테이너 (3개씩 묶음) */}
          <Box
            sx={(theme) => ({
              ...theme.customStyles.solutionMainRowNavItemContainer,
            })}
          >
            {/** 네비게이션 메뉴 */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledTypo
                underlineColor="#cc5268"
                onClick={() => navigate("/solution/mobility")}
                variant="solutionMainNavFont"
              >
                Mobility
              </StyledTypo>
            </Box>
            {/** 네비게이션 메뉴 */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledTypo
                underlineColor="#0095d7"
                onClick={() => navigate("/solution/aIinnovationhub")}
                variant="solutionMainNavFont"
              >
                Al Innovation Hub
              </StyledTypo>
            </Box>
            {/** 네비게이션 메뉴 */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledTypo
                underlineColor="#279576"
                onClick={() => navigate("/solution/energy")}
                variant="solutionMainNavFont"
              >
                Energy
              </StyledTypo>
            </Box>
          </Box>
          {/** 네비게이션 메뉴 컨테이너 (3개씩 묶음) */}
          <Box
            sx={(theme) => ({
              ...theme.customStyles.solutionMainRowNavItemContainer,
            })}
          >
            {/** 네비게이션 메뉴 */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledTypo
                underlineColor="#0c307b"
                onClick={() => navigate("/solution/smartfactory")}
                variant="solutionMainNavFont"
              >
                Smart factory
              </StyledTypo>
            </Box>
            {/** 네비게이션 메뉴 */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledTypo
                underlineColor="#f99818"
                onClick={() => navigate("/solution/bems")}
                variant="solutionMainNavFont"
              >
                BEMS
              </StyledTypo>
            </Box>
            {/** 네비게이션 메뉴 */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.solutionMainRowNavItem,
              })}
            >
              <StyledTypo
                underlineColor="#92b843"
                onClick={() => navigate("/solution/homeappliance")}
                variant="solutionMainNavFont"
              >
                Home appliance
              </StyledTypo>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// const StyledButton = styled(Button)<StyledButtonProps>(
//   ({ theme, underlineColor }) => ({
//     ...theme.typography.solutionMainNavFont,
//     width: "fit-content",
//     textTransform: "none",
//     color: "black",
//     borderBottom: `2px solid ${underlineColor}`,
//     borderRadius: 0,
//     padding: "0",

//     [theme.breakpoints.up("laptop")]: {
//       padding: "0 0 0 32px",
//       width: "100%",
//     },
//     "&:hover": {
//       color: `${underlineColor}`,
//       backgroundColor: "transparent",
//     },
//   })
// );

const StyledTypo = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "theme" && prop !== "underlineColor",
})<StyledButtonProps>(({ theme, underlineColor }) => ({
  borderBottom: `2px solid ${underlineColor}`,
  textTransform: "none",
  borderRadius: 0,
  color: "black",

  padding: "0",
  width: "fit-content",

  [theme.breakpoints.up("desktop")]: {
    padding: "0 0 0 16px",
    width: "100%",

    display: "flex",
    justifyContent: "flex-end",
  },
  "&:hover": {
    color: `${underlineColor}`,
    backgroundColor: "transparent",
    cursor: "pointer",
  },
}));

export default RowNav;
