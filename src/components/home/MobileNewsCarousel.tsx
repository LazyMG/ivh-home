import { Box } from "@mui/material";
import { Children, useRef, useState, type ReactNode } from "react";

// 카드 그림자(최대 ~10px)가 슬라이드 안에서 온전히 보이도록 하는 좌우/상하 여백.
const SHADOW_ROOM = 12; // px
// 스크롤 양끝 판정 시 소수점 오차 여유.
const EDGE = 2; // px

// 좌우 이동 화살표(에셋 line_arrow.png = 19×34, ">" 모양). 카드 좌우 바로 바깥에 배치.
// mask 방식으로 색상(currentColor)을 따르게 하고, prev는 180도 회전.
const NavArrow = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) => (
  <Box
    component="button"
    onClick={onClick}
    aria-label={direction === "prev" ? "이전 뉴스" : "다음 뉴스"}
    sx={{
      position: "absolute",
      top: "50%", // 카드 세로 중앙
      transform: "translateY(-50%)",
      // 카드는 SHADOW_ROOM 만큼 안쪽에 있으므로 루트 가장자리에서 +2px 더 밀어 간격을 둔다
      [direction === "prev" ? "right" : "left"]: "calc(100% + 2px)",
      width: 19, // 에셋 원본 비율(19×34) 유지 → 왜곡 없이 높이 34px
      height: 34,
      p: 0,
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "#03193F",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box
      component="span"
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        WebkitMaskImage: "url(/images/utils/line_arrow.png)",
        maskImage: "url(/images/utils/line_arrow.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        transform: direction === "prev" ? "rotate(180deg)" : "none",
      }}
    />
  </Box>
);

// Latest News 모바일 캐러셀 — 라이브러리 없이 CSS scroll-snap 사용.
// - 카드(NewsCard)는 호출부(home.tsx)에서 만들어 넘겨준다.
// - 카드를 처음에 전부 DOM에 깔아두고, 네이티브 가로 스크롤 + snap으로 한 장씩 넘긴다.
// - 모든 카드 높이는 가장 높은 형제에 맞춰 균일: 가로 flex의 align-items:stretch(기본)가
//   슬라이드를 가장 높은 것에 맞춰 늘리고, 카드(height:100%)가 그 높이를 채운다.
const MobileNewsCarousel = ({ children }: { children: ReactNode }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const hasMultiple = Children.count(children) > 1;

  // 스크롤 위치로 양끝 여부 갱신 (첫 카드에선 prev, 마지막 카드에선 next 숨김)
  const syncEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > EDGE);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - EDGE);
  };

  // 한 장(= 컨테이너 폭)만큼 부드럽게 스크롤
  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        ref={trackRef}
        onScroll={syncEdges}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          overscrollBehaviorX: "contain", // 가로 스와이프가 페이지/뒤로가기로 새지 않게
          WebkitOverflowScrolling: "touch",
          // 스크롤바 숨김
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {Children.map(children, (child) => (
          // 슬라이드: 한 장이 컨테이너 폭 가득(flex 0 0 100%), 안쪽 패딩으로 그림자 담기.
          // 카드(child, height:100%)는 이 슬라이드 높이를 채워 형제 최대 높이에 맞춰짐.
          <Box
            sx={{
              flex: "0 0 100%",
              boxSizing: "border-box",
              p: `${SHADOW_ROOM}px`,
              scrollSnapAlign: "start",
            }}
          >
            {child}
          </Box>
        ))}
      </Box>

      {hasMultiple && canPrev && (
        <NavArrow direction="prev" onClick={() => scrollByCard(-1)} />
      )}
      {hasMultiple && canNext && (
        <NavArrow direction="next" onClick={() => scrollByCard(1)} />
      )}
    </Box>
  );
};

export default MobileNewsCarousel;
