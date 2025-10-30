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
  title = "IVH Homepage",
  description = "IVH - 시뮬레이션 및 모빌리티 솔루션 전문 기업",
  keywords = "IVH, 시뮬레이션, Dymola, VTD, Vissim, 모빌리티, 배터리, 자율주행, BEMS, 스마트팩토리",
  ogTitle,
  ogDescription,
  ogImage = "https://ivh.co.kr/images/ivh_logo_black.png",
  ogUrl,
  canonical,
  author = "IVH",
  robots = "index, follow",
}: SEOProps) => {
  const fullTitle = title === "IVH Homepage" ? title : `${title} | IVH`;
  const currentUrl =
    ogUrl || (typeof window !== "undefined" ? window.location.href : "");

  // SEO.tsx 안에
  console.log("SEO Component Props:", {
    title,
    description,
    keywords,
    ogImage,
    canonical,
  });

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph (페이스북, 링크드인 등) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="IVH Homepage" />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* 추가 메타 태그 */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* 네이버 검색 최적화 */}
      {/* <meta
        name="naver-site-verification"
        content="YOUR_NAVER_VERIFICATION_CODE"
      /> */}

      {/* 구글 검색 최적화 */}
      {/* <meta
        name="google-site-verification"
        content="YOUR_GOOGLE_VERIFICATION_CODE"
      /> */}
    </Helmet>
  );
};

export default SEO;
