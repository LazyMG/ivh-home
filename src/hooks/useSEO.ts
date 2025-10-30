import { useMemo } from "react";

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
}

interface PageData {
  seo?: Partial<SEOData>;
  // Product 페이지 타입
  battery_title?: string;
  battery_subtitle?: string;
  dymola_title?: string;
  dymola_subtitle?: string;
  // Solution 페이지 타입
  headerTitle?: string;
  subtitle?: string;
  // 기타
  title?: string;
}

/**
 * SEO 데이터를 추출하는 커스텀 훅
 * @param pageKey - 페이지 키 (예: 'battery', 'energy', 'home')
 * @param jsonData - JSON 데이터 객체
 * @param baseUrl - 사이트 기본 URL (기본값: 'https://ivh.co.kr')
 * @returns SEO 데이터 객체
 */
export const useSEO = (
  pageKey: string,
  jsonData?: PageData,
  baseUrl: string = "https://ivh.co.kr"
): SEOData => {
  return useMemo(() => {
    // JSON 데이터에 seo 필드가 있으면 우선 사용
    if (jsonData?.seo) {
      return {
        title: jsonData.seo.title || "IVH Homepage",
        description: jsonData.seo.description || "",
        keywords: jsonData.seo.keywords || "",
        ogImage: jsonData.seo.ogImage || `${baseUrl}/images/ivh_logo_black.png`,
        canonical: jsonData.seo.canonical || `${baseUrl}/${pageKey}`,
      };
    }

    // Product 페이지용 fallback
    if (jsonData?.battery_title || jsonData?.dymola_title) {
      const title = jsonData.battery_title || jsonData.dymola_title || "";
      const subtitle =
        jsonData.battery_subtitle || jsonData.dymola_subtitle || "";

      return {
        title,
        description: subtitle,
        keywords: `${title}, IVH, 시뮬레이션`,
        ogImage: `${baseUrl}/images/ivh_logo_black.png`,
        canonical: `${baseUrl}/product/${pageKey}`,
      };
    }

    // Solution 페이지용 fallback
    if (jsonData?.headerTitle) {
      return {
        title: jsonData.headerTitle,
        description: jsonData.subtitle || "",
        keywords: `${jsonData.headerTitle}, IVH, 솔루션`,
        ogImage: `${baseUrl}/images/ivh_logo_black.png`,
        canonical: `${baseUrl}/solution/${pageKey}`,
      };
    }

    // 기본값
    return {
      title: "IVH Homepage",
      description: "IVH - 시뮬레이션 및 모빌리티 솔루션",
      keywords: "IVH, 시뮬레이션",
      ogImage: `${baseUrl}/images/ivh_logo_black.png`,
      canonical: `${baseUrl}`,
    };
  }, [pageKey, jsonData, baseUrl]);
};
