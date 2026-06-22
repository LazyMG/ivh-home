import { Box } from "@mui/material";
import { useLocalizedNavigate } from "../i18n/useLocalizedNavigate";
import FooterCompanyInfo from "./footer/FooterCompanyInfo";
import FooterMenu from "./footer/FooterMenu";

const Footer = () => {
  const navigate = useLocalizedNavigate();

  return (
    // 정렬을 위한 부모 컨테이너
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "10px",
        background: "linear-gradient(to bottom, #ffffff 80%, #03193f49 100%)",
        py: 8,
        px: "6%",
        boxShadow: "0 -6px 15px 0 rgba(0,0,0,0.25)",
        position: "relative",
        zIndex: 10,
        minHeight: "400px",
        boxSizing: "border-box",
      }}
    >
      {/** 왼쪽(회사정보) · 오른쪽(메뉴) 정렬 컨테이너 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <FooterCompanyInfo navigate={navigate} />
        <FooterMenu navigate={navigate} />
      </Box>
    </Box>
  );
};

export default Footer;
