import { useSearchParams } from "react-router-dom";

export type Lang = "ko" | "en";

export const useLang = () => {
  const [params, setParams] = useSearchParams();
  const raw = params.get("lang");
  const lang: Lang = raw === "en" ? "en" : "ko";

  const setLang = (next: Lang) => {
    const newParams = new URLSearchParams(params);
    if (next === "ko") {
      newParams.delete("lang");
    } else {
      newParams.set("lang", next);
    }
    setParams(newParams);
  };

  return { lang, setLang };
};
