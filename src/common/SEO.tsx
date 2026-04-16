import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useLang } from "../i18n/useLang";

const SUPPORTED_LANGS = ["ko", "en"];

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  author?: string;
  robots?: string;
}

const SEO = ({
  title = "iVH Homepage",
  description = "iVH - 시뮬레이션 및 모빌리티 솔루션 전문 기업",
  keywords = "iVH, 시뮬레이션, Dymola, Modelica, AMR, VTD, Vissim, 모빌리티, 배터리, 자율주행, BEMS, 스마트팩토리",
  ogTitle,
  ogDescription,
  ogImage = "https://ivh.co.kr/images/opengraph.png",
  ogUrl,
  canonical,
  author = "iVH",
  robots = "index, follow",
}: SEOProps) => {
  const fullTitle = title === "iVH Homepage" ? title : `${title} | iVH`;
  const currentUrl =
    ogUrl || (typeof window !== "undefined" ? window.location.href : "");
  const { lang } = useLang();
  const location = useLocation();

  // lang prefix를 제거한 순수 경로
  const basePath =
    location.pathname.replace(
      new RegExp(`^/(${SUPPORTED_LANGS.filter((l) => l !== "ko").join("|")})(?=/|$)`),
      "",
    ) || "/";

  // canonical URL
  const canonicalUrl =
    canonical ||
    (lang === "ko"
      ? `https://ivh.co.kr${basePath}`
      : `https://ivh.co.kr/${lang}${basePath}`);

  // hreflang 링크들
  const hreflangs = [
    { hrefLang: "ko", href: `https://ivh.co.kr${basePath}` },
    { hrefLang: "en", href: `https://ivh.co.kr/en${basePath}` },
    { hrefLang: "x-default", href: `https://ivh.co.kr${basePath}` },
  ];

  // index.html의 canonical 태그를 직접 업데이트
  useEffect(() => {
    const link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute("href", canonicalUrl);
    }
  }, [canonicalUrl]);

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />

      {/* hreflang */}
      {hreflangs.map((hl) => (
        <link
          key={hl.hrefLang}
          rel="alternate"
          hrefLang={hl.hrefLang}
          href={hl.href}
        />
      ))}

      {/* Open Graph (페이스북, 링크드인 등) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="iVH" />
      <meta
        property="og:locale"
        content={lang === "ko" ? "ko_KR" : "en_US"}
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
