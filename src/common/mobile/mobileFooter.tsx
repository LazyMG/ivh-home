import { Box, Typography } from "@mui/material";
import footer from "../../data/footer/footer.json";
import logoGradient from "/images/header/iVH_logo_gra.svg";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import { FONTS } from "../../theme/theme";

const MobileFooter = () => {
  const { companyInfo } = footer;
  const { companyName, address, phone, email, socialMedia } = companyInfo;
  const { youtubeLogoBlack, linkedinLogoBlack, youtubeUrl, linkedinUrl } =
    socialMedia;
  const navigate = useLocalizedNavigate();
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
        position: "relative",
        zIndex: 10,
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
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            aria-label="iVH 홈으로 이동"
            style={{ display: "inline-flex" }}
          >
            <img
              src={logoGradient}
              alt="iVH 로고"
              style={{
                width: "56px",
                height: "22.7px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </a>
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: FONTS.freesentation.medium,
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
            fontFamily: FONTS.freesentation.medium,
            color: "#424242",
          }}
          component="p"
        >
          <Box component="span" sx={{ fontFamily: FONTS.freesentation.bold }}>
            T.
          </Box>{" "}
          {phone}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontFamily: FONTS.freesentation.medium,
            color: "#424242",
          }}
          component="p"
        >
          <Box component="span" sx={{ fontFamily: FONTS.freesentation.bold }}>
            E.
          </Box>{" "}
          {email}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: FONTS.freesentation.medium,
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
