import { useNavigate, useLocation } from "react-router-dom";
import type { NavigateOptions } from "react-router-dom";

const LANG_PREFIX_RE = /^\/(en)(?=\/|$)/;

/**
 * useNavigate 래퍼 — 현재 lang prefix를 자동 유지
 *
 * URL에서 lang prefix를 직접 파싱하므로
 * <Routes> 안팎 어디서든 동작합니다. (헤더, 푸터 포함)
 */
export const useLocalizedNavigate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const match = pathname.match(LANG_PREFIX_RE);
  const langPrefix = match ? `/${match[1]}` : "";

  return (to: string | number, options?: NavigateOptions) => {
    if (typeof to === "number") {
      navigate(to);
      return;
    }
    // 실제 라우트가 아닌 placeholder(빈 값, "#", 해시 시작)는 이동하지 않음.
    // (langPrefix가 붙으면 "/en#"처럼 절대경로가 되어 홈으로 리다이렉트되는 것 방지)
    if (!to || to === "#" || to.startsWith("#")) return;
    navigate(`${langPrefix}${to}`, options);
  };
};
