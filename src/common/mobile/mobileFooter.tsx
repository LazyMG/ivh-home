import { Box } from "@mui/material";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import FooterCompanyInfo from "../footer/FooterCompanyInfo";

// 모바일 푸터 — 정보 영역은 데스크탑과 동일한 FooterCompanyInfo를 재사용(단일 출처).
// 래퍼(배경·패딩·그림자)만 모바일용으로 유지.
const MobileFooter = () => {
  const navigate = useLocalizedNavigate();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to bottom, #ffffff 80%, #03193f49 100%)",
        px: "8%",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Box sx={{ borderTop: "1px solid #737373", pt: 7, pb: 8 }}>
        <FooterCompanyInfo navigate={navigate} />
      </Box>
    </Box>
  );
};

export default MobileFooter;
