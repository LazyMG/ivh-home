import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export type Lang = "ko" | "en";
const SUPPORTED: string[] = ["ko", "en"];
const LANG_PREFIX_RE = /^\/(en)(?=\/|$)/;

export const useLang = () => {
  const { lang: paramLang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  // useParams는 <Routes> 안에서만 동작하므로, pathname에서도 추출
  const pathMatch = location.pathname.match(LANG_PREFIX_RE);
  const rawLang = paramLang ?? pathMatch?.[1];

  const lang: Lang = SUPPORTED.includes(rawLang ?? "")
    ? (rawLang as Lang)
    : "ko";

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  const setLang = (next: Lang) => {
    const cleanPath =
      location.pathname.replace(
        new RegExp(`^/(${SUPPORTED.filter((l) => l !== "ko").join("|")})(?=/|$)`),
        "",
      ) || "/";
    navigate(next === "ko" ? cleanPath : `/${next}${cleanPath}`);
  };

  return { lang, setLang };
};
