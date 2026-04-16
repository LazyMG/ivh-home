import { Box } from "@mui/material";
import { useLang } from "../i18n/useLang";

const LangToggle = () => {
  const { lang, setLang } = useLang();

  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        top: 128,
        right: 48,
        zIndex: 1300,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,
        width: "108px",
        height: "45px",
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        boxShadow: "1px 1px 5px 0 rgba(0,0,0,0.25)",
        [theme.breakpoints.down("tablet")]: {
          flexDirection: "column",
          width: "40px",
          height: "72px",
          gap: 1,
          top: 80,
          right: 16,
        },
      })}
    >
      <Box
        component="span"
        onClick={() => setLang("ko")}
        sx={(theme) => ({
          cursor: "pointer",
          fontFamily: "Freesentation-5-Medium",
          fontSize: lang === "ko" ? "20px" : "18px",
          color: lang === "ko" ? "#1755C2" : "#A7A7A7",
          fontWeight: lang === "ko" ? 700 : 400,
          userSelect: "none",
          [theme.breakpoints.down("tablet")]: {
            fontSize: lang === "ko" ? "14px" : "12px",
          },
        })}
      >
        KR
      </Box>
      <Box
        component="span"
        sx={(theme) => ({
          width: "2px",
          height: "14px",
          backgroundColor: "#A7A7A7",
          [theme.breakpoints.down("tablet")]: {
            width: "12px",
            height: "1px",
          },
        })}
      />
      <Box
        component="span"
        onClick={() => setLang("en")}
        sx={(theme) => ({
          cursor: "pointer",
          fontFamily: "Freesentation-5-Medium",
          fontSize: lang === "en" ? "20px" : "18px",
          color: lang === "en" ? "#1755C2" : "#A7A7A7",
          fontWeight: lang === "en" ? 700 : 400,
          userSelect: "none",
          [theme.breakpoints.down("tablet")]: {
            fontSize: lang === "en" ? "14px" : "12px",
          },
        })}
      >
        EN
      </Box>
    </Box>
  );
};

export default LangToggle;
