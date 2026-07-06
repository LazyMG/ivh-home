import { Box, Typography } from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import resource from "../../data/product/iMOVA.json";
import SectionTitle from "../common/SectionTitle";
import ImageLightbox from "../common/ImageLightbox";
import { FONTS } from "../../theme/theme";

// 반응형 구간 (오버레이=이미지 위 글래스 박스):
//   ~1365      card    오버레이 미표시, 이미지 + 카드 1열 (좁은 폭에선 박스가 겹치므로)
//   1366~1679  laptop  오버레이 표시, JSON overlay.laptop 시안 적용
//   1680~      monitor 오버레이 표시, JSON overlay.monitor 시안 적용
const MQ = {
  card: "@media (max-width:1365.98px)",
  overlay: "@media (min-width:1366px)",
  laptop: "@media (min-width:1366px) and (max-width:1679.98px)",
  monitor: "@media (min-width:1680px)",
};

/**
 * IMOVA use case(생산라인) 섹션.
 * - 1366px↑: 배경 이미지 위에 글래스 텍스트 박스(위치는 이미지 기준 %, 크기는 고정 px).
 * - 1366px↓: 이미지 + 카드 1열 나열.
 * - 이미지 클릭 → 전체 화면 확대(라이트박스).
 */
const IMOVAProductionLine = () => {
  const { t, i18n } = useTranslation("product/iMOVA");
  const td = (key: string): string => t(key as never);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  // 국문이면 라틴 전용 Galderglynn 대신 국문 지원 Freesentation으로 폰트 전환
  const isKorean = i18n.language.startsWith("ko");

  const imageUrl = resource.production_line.production_line_image_url;
  const title = td("production_line.production_line_title");

  // 구간별 시안(laptop/monitor)은 JS 분기 없이 CSS 미디어쿼리로 동시에 적용한다.
  // 값은 전부 JSON(overlay)에서: 그룹 기본값(width/px/py) 뒤에 박스별 설정(top/left/right)을 병합.
  const overlay = resource.production_line.overlay;
  const boxOverlaySx = (item: {
    group: string;
    overlay: { laptop: object; monitor: object };
  }) => {
    const group = item.group as "side" | "bottom";
    return {
      [MQ.laptop]: { ...overlay.laptop.box[group], ...item.overlay.laptop },
      [MQ.monitor]: { ...overlay.monitor.box[group], ...item.overlay.monitor },
    };
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 5,
        }}
      >
        {/* 타이틀 + 부제목 */}
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("desktop")]: {
              gap: 1.5,
              flexDirection: "row",
              alignItems: "center",
            },
          })}
        >
          <SectionTitle text={td("section_titles.use_case")} />
          <Typography
            sx={(theme) => ({
              // 모바일: freesentation.medium / 16px
              fontFamily: FONTS.freesentation.medium,
              fontSize: "16px",
              color: "#737373",
              // 제목 텍스트 시작 위치에 정렬 = SectionTitle pill 너비 + gap
              // (pill 32 + gap 16) / 태블릿(pill 88 + gap 16) / 데스크탑(pill 88 + gap 32)
              pl: "48px",
              [theme.breakpoints.up("tablet")]: {
                // 태블릿↑: galderglynn.book / 18px
                fontFamily: FONTS.galderglynn.book,
                fontSize: "18px",
                pl: "104px",
              },
              [theme.breakpoints.up("desktop")]: { pl: 0 },
            })}
          >
            {title}
          </Typography>
        </Box>

        {/* 콘텐츠: 1366px↑ 이미지(글래스 박스) + 그 이하 카드 */}
        <Box sx={{ width: "100%" }}>
          {/* 배경 이미지 컨테이너. 클릭 시 전체 화면 확대 */}
          <Box
            role="button"
            tabIndex={0}
            aria-label={`${title} 이미지 확대 보기`}
            onClick={() => setIsImageZoomed(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsImageZoomed(true);
              }
            }}
            sx={{
              position: "relative",
              cursor: "pointer",
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              aspectRatio: "1398/992",
              mx: "auto",
              borderRadius: "24px",
              border: "1px solid #03193f4b",
              boxShadow: "4px 4px 5px 3px rgba(0,0,0,0.25)",
              // 이미지 폭은 구간별 JSON(overlay.*.image_width). 박스 아웃셋까지
              // 콘텐츠 폭 안에 들어오도록 한 값.
              [MQ.laptop]: { width: overlay.laptop.image_width },
              [MQ.monitor]: { width: overlay.monitor.image_width },
              // 오버레이 구간: 이미지 hover 시에만 확대 힌트 아이콘 표시
              [MQ.overlay]: {
                "&:hover .imova-zoom-hint": { opacity: 1 },
              },
              [MQ.card]: {
                aspectRatio: "4/3",
                width: "100%",
              },
            }}
          >
            {/* 확대 힌트 아이콘 — 클릭은 컨테이너로 통과.
                1366px↓ 항상 표시, 1366px↑은 hover 시에만(글래스 박스와 겹침 방지) */}
            <Box
              className="imova-zoom-hint"
              sx={{
                position: "absolute",
                top: "12px",
                right: "12px",
                zIndex: 2,
                display: "flex",
                p: "6px",
                borderRadius: "50%",
                color: "#ffffff",
                backgroundColor: "rgba(3,25,63,0.55)",
                pointerEvents: "none",
                [MQ.overlay]: {
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                },
              }}
            >
              <ZoomOutMapIcon sx={{ fontSize: "20px" }} />
            </Box>

            {/* 오버레이 구간 전용: 텍스트 글래스 박스. 위치·폭·여백은 구간별 JSON에서 */}
            {resource.production_line.production_line_list.map((item) => (
              <Box
                key={item.id}
                sx={{
                  position: "absolute",
                  border: `2px solid ${item.production_line_color}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  boxSizing: "border-box",
                  // width/top/left/right/px/py: 구간별 JSON을 CSS 미디어쿼리로 적용.
                  ...boxOverlaySx(item),
                  // 반투명 + blur 글래스 (이미지와 겹친 부분이 흐려짐)
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  [MQ.card]: { display: "none" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: item.production_line_color,
                    // 국문은 라틴 전용 폰트가 깨지므로 Freesentation으로 전환
                    fontFamily: isKorean
                      ? FONTS.freesentation.semiBold
                      : FONTS.galderglynn.regular,
                    fontSize: "16px",
                    wordBreak: "keep-all",
                    textTransform: "uppercase",
                    width: "80%",
                    mx: "auto",
                  }}
                >
                  {td(
                    `production_line.production_line_list.${item.id}.production_line_topic`,
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: FONTS.freesentation.medium,
                    color: "#737373",
                  }}
                >
                  {td(
                    `production_line.production_line_list.${item.id}.production_line_description`,
                  )}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 카드 구간(~1365): 카드 1열 나열(너비 100%) */}
          <Box
            sx={{
              display: "none",
              [MQ.card]: {
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                mt: 3,
              },
            }}
          >
            {resource.production_line.production_line_list.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  border: `2px solid ${item.production_line_color}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  px: 3,
                  py: "22px",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: item.production_line_color,
                    // 국문은 라틴 전용 폰트가 깨지므로 Freesentation으로 전환
                    fontFamily: isKorean
                      ? FONTS.freesentation.semiBold
                      : FONTS.galderglynn.regular,
                    fontSize: "16px",
                    wordBreak: "keep-all",
                    width: "90%",
                    mx: "auto",
                  }}
                >
                  {td(
                    `production_line.production_line_list.${item.id}.production_line_topic`,
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: FONTS.freesentation.medium,
                    color: "#737373",
                    textAlign: "center",
                  }}
                >
                  {td(
                    `production_line.production_line_list.${item.id}.production_line_description`,
                  )}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <ImageLightbox
        open={isImageZoomed}
        onClose={() => setIsImageZoomed(false)}
        src={imageUrl}
        alt={title}
      />
    </>
  );
};

export default IMOVAProductionLine;
