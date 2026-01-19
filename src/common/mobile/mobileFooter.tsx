import { Box, Typography } from "@mui/material";
import footer from "../../data/footer/footer.json";
import logoGradient from "/images/header/ivh_logo_gradient.png";
import { useNavigate } from "react-router-dom";

const MobileFooter = () => {
  const { compantInfo } = footer;
  const { companyName, address, phone, email, socialMedia } = compantInfo;
  const { youtubeLogoBlack, linkedinLogoBlack, youtubeUrl, linkedinUrl } =
    socialMedia;
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(to bottom,  #FFFFFF 0%, #E5EFF2 100%)",
        py: 5,
        px: 7,
        boxSizing: "border-box",
        gap: 3,
        boxShadow: "0 -3px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/** 로고 영역 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={logoGradient}
            alt="logo"
            style={{
              width: "56px",
              height: "22.7px",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Freesentation-5-Medium",
              color: "#424242",
              height: "24px",
              lineHeight: "34px",
            }}
            component="p"
          >
            {companyName}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/** 소셜 미디어 영역 */}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <img
              onClick={() => window.open(youtubeUrl)}
              src={youtubeLogoBlack}
              alt="youtube"
              style={{ width: "35px", height: "35px", cursor: "pointer" }}
            />
            <img
              onClick={() => window.open(linkedinUrl)}
              src={linkedinLogoBlack}
              alt="linkedin"
              style={{ width: "35px", height: "35px", cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
      {/** 주소 및 부가 정보 영역 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontFamily: "Freesentation-5-Medium",
            color: "#424242",
          }}
          component="p"
        >
          {phone}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontFamily: "Freesentation-5-Medium",
            color: "#424242",
          }}
          component="p"
        >
          {email}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "Freesentation-5-Medium",
          color: "#424242",
        }}
        component="p"
      >
        {address}
      </Typography>
    </Box>
  );
};

export default MobileFooter;
