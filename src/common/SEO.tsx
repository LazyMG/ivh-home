import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

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
  ogImage = "https://ivh.co.kr/images/header/ivh_logo_black.png",
  ogUrl,
  canonical,
  author = "iVH",
  robots = "index, follow",
}: SEOProps) => {
  const fullTitle = title === "iVH Homepage" ? title : `${title} | iVH`;
  const currentUrl =
    ogUrl || (typeof window !== "undefined" ? window.location.href : "");

  // index.html의 canonical 태그를 직접 업데이트 (Helmet이 link 태그를 중복 추가하는 문제 방지)
  useEffect(() => {
    const canonicalUrl = canonical || currentUrl;
    const link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute("href", canonicalUrl);
    }
  }, [canonical, currentUrl]);

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />

      {/* Open Graph (페이스북, 링크드인 등) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="iVH" />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
