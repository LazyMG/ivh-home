import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { newsService } from "../../service/newsService";
import type { NewsResponse } from "../../service/newsService";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import SectionTitle from "../common/SectionTitle";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";
import NewsStatusMessage from "./NewsStatusMessage";
import ViewAllNewsButton from "./ViewAllNewsButton";
import MobileNewsCarousel from "./MobileNewsCarousel";

// 표시용 임시 데이터 (DB 응답 형식과 동일한 형태로 작성)
const TEMP_NEWS_ITEMS: NewsResponse[] = [
  {
    id: -1,
    title: "Post-Hannover Messe 2026: iMOVA's Journey to the Global Stage",
    content: "",
    image: "/images/home/temp_news_1.png",
    contentsUrl:
      "https://www.linkedin.com/posts/ivhkr_ivh-imova-isuite34-activity-7454488189186080768-nd_K?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFMhy2oB56RN_cDECvQ0b9Acno1kl23GWFA",
    author: "iVH",
    status: "PUBLISHED",
    tags: [],
    viewCount: 0,
    publishedAt: "2026-04-30T00:00:00.000Z",
    createdAt: "2026-04-30T00:00:00.000Z",
    updatedAt: "2026-04-30T00:00:00.000Z",
  },
  {
    id: -2,
    title: "울릉도 전력망의 미래, 가상 공간에서 먼저 검증하다",
    content: "",
    image: "/images/home/temp_news_2.png",
    contentsUrl:
      "https://www.linkedin.com/pulse/%EC%9A%B8%EB%A6%89%EB%8F%84-%EC%A0%84%EB%A0%A5%EB%A7%9D%EC%9D%98-%EB%AF%B8%EB%9E%98-%EA%B0%80%EC%83%81-%EA%B3%B5%EA%B0%84%EC%97%90%EC%84%9C-%EB%A8%BC%EC%A0%80-%EA%B2%80%EC%A6%9D%ED%95%98%EB%8B%A4-ivhkr-foicc/?trackingId=hEuvF3kWincppATk8eFZCQ%3D%3D",
    author: "iVH",
    status: "PUBLISHED",
    tags: [],
    viewCount: 0,
    publishedAt: "2026-03-31T00:00:00.000Z",
    createdAt: "2026-03-31T00:00:00.000Z",
    updatedAt: "2026-03-31T00:00:00.000Z",
  },
  {
    id: -3,
    title: "URDF의 한계 - Modelica로 완성하는 로봇 디지털 트윈",
    content: "",
    image: "/images/home/temp_news_3.png",
    contentsUrl:
      "https://www.linkedin.com/pulse/urdf%EC%9D%98-%ED%95%9C%EA%B3%84-modelica%EB%A1%9C-%EC%99%84%EC%84%B1%ED%95%98%EB%8A%94-%EB%A1%9C%EB%B4%87-%EB%94%94%EC%A7%80%ED%84%B8-%ED%8A%B8%EC%9C%88-ivhkr-yhxoc/?trackingId=euqAs%2FdY6BxyLqEsQ%2BBhoQ%3D%3D",
    author: "iVH",
    status: "PUBLISHED",
    tags: [],
    viewCount: 0,
    publishedAt: "2026-02-20T00:00:00.000Z",
    createdAt: "2026-02-20T00:00:00.000Z",
    updatedAt: "2026-02-20T00:00:00.000Z",
  },
  {
    id: -4,
    title:
      "Modelica 기반 생산라인 디지털 트윈 사례 연구 - Part 2: 로봇 설계 최적화와 AI 기반 제어기 자동 생성",
    content: "",
    image: "/images/home/temp_news_4.png",
    contentsUrl:
      "https://www.linkedin.com/pulse/modelica-%EA%B8%B0%EB%B0%98-%EC%83%9D%EC%82%B0%EB%9D%BC%EC%9D%B8-%EB%94%94%EC%A7%80%ED%84%B8-%ED%8A%B8%EC%9C%88-%EC%82%AC%EB%A1%80-%EC%97%B0%EA%B5%AC-part-2-%EB%A1%9C%EB%B4%87-%EC%84%A4%EA%B3%84-%EC%B5%9C%EC%A0%81%ED%99%94%EC%99%80-ai-%EC%A0%9C%EC%96%B4%EA%B8%B0-%EC%9E%90%EB%8F%99-%EC%83%9D%EC%84%B1-x9gzc/?trackingId=gPcHjzzW8cuIZp0Xik7%2FhQ%3D%3D",
    author: "iVH",
    status: "PUBLISHED",
    tags: [],
    viewCount: 0,
    publishedAt: "2026-01-21T00:00:00.000Z",
    createdAt: "2026-01-21T00:00:00.000Z",
    updatedAt: "2026-01-21T00:00:00.000Z",
  },
];

// 홈 하단 Latest News 섹션 — 뉴스 조회/상태 관리 + 반응형 렌더(모바일 캐러셀 / 데스크탑 그리드)
const LatestNewsSection = () => {
  const { isMobile } = useBreakpoint();

  // Latest News 카드 (DB 응답 형식 그대로 보관 — 상위 4개만 표시)
  const [newsItems, setNewsItems] = useState<NewsResponse[]>([]);
  // 뉴스 로딩 상태: 로딩 중 / 에러 / 완료
  const [newsStatus, setNewsStatus] = useState<"loading" | "error" | "success">(
    "loading",
  );

  const fetchNews = async () => {
    setNewsStatus("loading");
    try {
      const response = await newsService.getNews();
      // 임시 데이터를 DB 데이터 앞에 끼운 뒤, 앞에서 4개만 잘라서 표시
      setNewsItems([...TEMP_NEWS_ITEMS, ...response].slice(0, 4));
      setNewsStatus("success");
    } catch {
      setNewsItems([]);
      setNewsStatus("error");
    }
  };

  useEffect(() => {
    // 마운트 시 1회 조회
    fetchNews();
  }, []);

  // 카드 목록 (데스크탑 그리드 / 모바일 캐러셀 공용 — 매핑 로직 중복 방지)
  const newsCards = newsItems.map((item) => (
    <NewsCard
      key={item.id}
      image={item.image}
      title={item.title}
      date={dayjs(item.publishedAt).format("YYYY. MM. DD")}
      onClick={
        item.contentsUrl
          ? () => window.open(item.contentsUrl, "_blank", "noopener,noreferrer")
          : undefined
      }
    />
  ));

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: 3,
        [theme.breakpoints.up("desktop")]: {
          gap: 8,
        },
      })}
    >
      <SectionTitle text="Latest News" />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 2,
          [theme.breakpoints.up("desktop")]: {
            gap: 6,
          },
        })}
      >
        {newsStatus === "error" ? (
          // 데이터 조회 실패 — 재시도 버튼 포함
          <NewsStatusMessage
            message="뉴스를 불러오지 못했습니다."
            onRetry={fetchNews}
          />
        ) : newsStatus === "success" && newsItems.length === 0 ? (
          // 조회는 성공했으나 표시할 뉴스가 없는 경우
          <NewsStatusMessage message="등록된 뉴스가 없습니다." />
        ) : newsStatus === "loading" ? (
          // 로딩 중 — 실제 콘텐츠와 동일한 형태: 모바일은 한 장, 데스크탑은 4열 그리드
          isMobile ? (
            <NewsCardSkeleton />
          ) : (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 3,
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))}
            </Box>
          )
        ) : isMobile ? (
          // 모바일 — 스와이프로 한 장씩 (CSS scroll-snap, 라이브러리 없음)
          <MobileNewsCarousel>{newsCards}</MobileNewsCarousel>
        ) : (
          // 데스크탑 — 4열 그리드
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 3,
            }}
          >
            {newsCards}
          </Box>
        )}
        <ViewAllNewsButton />
      </Box>
    </Box>
  );
};

export default LatestNewsSection;
