import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import section from "../../data/home/section.json";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import { FONTS } from "../../theme/theme";

// Contact Us — 모바일 전용 레이아웃.
// 배경/라운드 없이 세로 중앙 정렬: 이미지 → 제목 → 본문 → 평범한 원형 버튼.
const ContactTrainingInfoMobile = () => {
  const navigate = useLocalizedNavigate();
  const { t } = useTranslation("home");
  const { contact_us } = section;

  return (
    <Box
      sx={{
        px: 4,
        pt: 2,
        pb: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        component="img"
        src="/images/home/contract_mobile_image.png"
        alt="Contact Us"
        loading="lazy"
        sx={{
          width: "60%",
          maxWidth: "260px",
          height: "auto",
          display: "block",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          width: "80%",
          pt: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            color: "#03193F",
            fontFamily: FONTS.galderglynn.regular,
          }}
        >
          {t("contact_us.title")}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#656565",
            fontFamily: FONTS.freesentation.medium,
            textAlign: "center",
            lineHeight: 1.5,
            wordBreak: "break-all",
          }}
        >
          {t("contact_us.text")}
        </Typography>
      </Box>

      {/* 평범한 원형 버튼 (glassy 아님). 화살표는 mask로 남색 렌더 */}
      <Box
        component="button"
        onClick={() => navigate(contact_us.url)}
        aria-label="Contact Us"
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "#E8E8E8",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="span"
          sx={{
            width: "16px",
            height: "22px",
            backgroundColor: "#03193F",
            WebkitMaskImage: "url(/images/utils/line_arrow.png)",
            maskImage: "url(/images/utils/line_arrow.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactTrainingInfoMobile;
