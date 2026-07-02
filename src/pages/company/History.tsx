import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import resource from "../../data/company/history.json";
import CompanyPageHeader from "../../components/company/CompanyPageHeader";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import { FONTS } from "../../theme/theme";

const ACCENT = resource.color;

// 점선 화살표의 화살촉 (CSS border 삼각형)
const ArrowHead = ({
  dir,
  color = ACCENT,
}: {
  dir: "left" | "right" | "up";
  color?: string;
}) => {
  const s = 6;
  const transparent = `${s}px solid transparent`;
  const filled = `${s + 2}px solid ${color}`;
  const map = {
    left: {
      borderTop: transparent,
      borderBottom: transparent,
      borderRight: filled,
    },
    right: {
      borderTop: transparent,
      borderBottom: transparent,
      borderLeft: filled,
    },
    up: {
      borderLeft: transparent,
      borderRight: transparent,
      borderBottom: filled,
    },
  } as const;
  return <Box sx={{ width: 0, height: 0, flexShrink: 0, ...map[dir] }} />;
};

// 연도 사이를 잇는 가로 점선 화살표
const HArrow = ({ dir }: { dir: "left" | "right" }) => (
  <Box sx={{ flex: 1, display: "flex", alignItems: "center", mx: 6 }}>
    {dir === "left" && <ArrowHead dir="left" />}
    <Box sx={{ flex: 1, borderTop: `2px dotted ${ACCENT}` }} />
    {dir === "right" && <ArrowHead dir="right" />}
  </Box>
);

// 하단 → 상단을 잇는 세로 점선 화살표
const VArrow = () => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <ArrowHead dir="up" />
    <Box
      sx={{
        width: 0,
        flex: 1,
        minHeight: "150px",
        borderLeft: `2px dotted ${ACCENT}`,
      }}
    />
  </Box>
);

const History = () => {
  const { t } = useTranslation("company/history");

  const list = resource.list;
  const getContents = (id: string) =>
    t(`list.${id}` as never, {
      returnObjects: true,
    }) as unknown as string[];

  // 시각적 배치 순서 (좌 → 우)
  const topRow = [list[0], list[1], list[2]]; // 2024 ← 2021 ← 2018
  const bottomRow = [list[5], list[4], list[3]]; // 2013 → 2014 → 2015

  // 연도 + 내용 블록 (데스크톱 셀)
  const TimelineCell = ({
    item,
    arrow,
  }: {
    item: { id: string; year: string };
    arrow: "left" | "right" | null;
  }) => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        sx={{ display: "flex", alignItems: "center", height: "44px", pl: 3 }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontFamily: FONTS.galderglynn.regular,
            color: ACCENT,
            whiteSpace: "nowrap",
          }}
        >
          {item.year}
        </Typography>
        {arrow && <HArrow dir={arrow} />}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {getContents(item.id).map((content, idx) => (
          <Box key={idx} sx={{ display: "flex", gap: 1.5 }}>
            <Box
              component="span"
              sx={{ color: "#000000", fontSize: "18px", lineHeight: "26px" }}
            >
              ·
            </Box>
            <Typography
              sx={{
                flex: 1,
                color: "#000000",
                fontFamily: FONTS.freesentation.regular,
                whiteSpace: "pre-line",
                wordBreak: "keep-all",
                fontSize: "18px",
                lineHeight: "26px",
              }}
            >
              {content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical="https://ivh.co.kr/company/history"
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          mb: 6,
          [theme.breakpoints.up("desktop")]: { mb: 12 },
        })}
      >
        <ScrollButton />
        <CompanyPageHeader
          imgUrl={resource.image}
          mobileImgUrl={resource.mobile_image}
          imgPosition={resource.image_position}
          pageKey="history"
          overlayGradient="linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)"
        />

        <Box
          component="main"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 4,
            my: 5,
            px: "6%",
            pt: 0,
            [theme.breakpoints.up("tablet")]: {
              my: 10,
              px: 10,
              gap: 6,
              pt: "20px",
            },
            [theme.breakpoints.up("desktop")]: {
              pt: 3,
              px: 28,
            },
          })}
        >
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
            <Typography
              component="h1"
              sx={(theme) => ({
                whiteSpace: "pre-line",
                fontFamily: FONTS.freesentation.bold,
                color: "#003B8D",
                fontSize: "24px",
                textTransform: "uppercase",
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "28px",
                  color: "#000000",
                },
                [theme.breakpoints.up("desktop")]: {
                  fontSize: "40px",
                  textTransform: "none",
                },
              })}
            >
              {t("title")}
            </Typography>
            {t("subtitle") && (
              <Typography
                sx={(theme) => ({
                  fontFamily: FONTS.freesentation.regular,
                  color: "#000000",
                  fontSize: "14px",
                  [theme.breakpoints.up("desktop")]: {
                    fontFamily: FONTS.freesentation.medium,
                    fontSize: "20px",
                  },
                })}
              >
                {t("subtitle")}
              </Typography>
            )}
          </Box>

          {/* 모바일·태블릿: 세로 리스트 (연도 사이마다 아래 → 위 화살표) */}
          <Stack
            sx={(theme) => ({
              gap: 2,
              mt: 2,
              [theme.breakpoints.up("desktop")]: { display: "none" },
            })}
          >
            {list.map((item, i) => (
              <Box
                key={item.id}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    sx={{
                      pl: 3,
                      fontSize: "20px",
                      fontFamily: FONTS.galderglynn.regular,
                      color: "#00235F",
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {getContents(item.id).map((content, idx) => (
                      <Box key={idx} sx={{ display: "flex", gap: 1.5 }}>
                        <Box
                          component="span"
                          sx={{
                            color: "#000000",
                            fontSize: "18px",
                            lineHeight: "26px",
                          }}
                        >
                          ·
                        </Box>
                        <Typography
                          sx={{
                            flex: 1,
                            color: "#000000",
                            fontFamily: FONTS.freesentation.regular,
                            whiteSpace: "pre-line",
                            wordBreak: "keep-all",
                            fontSize: "18px",
                            lineHeight: "26px",
                          }}
                        >
                          {content}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* 다음(위) 연도로 잇는 화살표 — 마지막 항목 뒤엔 없음 (총 5개) */}
                {i < list.length - 1 && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "fit-content",
                      pl: 8,
                      my: 2,
                    }}
                  >
                    <ArrowHead dir="up" color="#00235F" />
                    <Box
                      sx={{
                        width: 0,
                        height: "48px",
                        borderLeft: "2px dotted #00235F",
                      }}
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Stack>

          {/* 데스크톱: 뱀형(부스트로페돈) 타임라인 */}
          <Box
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.up("desktop")]: {
                display: "flex",
                flexDirection: "column",
                gap: 5,
                mx: -20,
                pl: 28,
              },
            })}
          >
            {/* 상단: 2024 ← 2021 ← 2018 */}
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {topRow.map((item, i) => (
                <TimelineCell
                  key={item.id}
                  item={item}
                  arrow={i < 2 ? "left" : null}
                />
              ))}
            </Box>

            {/* 우측 끝 세로 연결 (2015 → 2018) */}
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              <Box />
              <Box />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  pl: 6,
                }}
              >
                <VArrow />
              </Box>
            </Box>

            {/* 하단: 2013 → 2014 → 2015 */}
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {bottomRow.map((item, i) => (
                <TimelineCell
                  key={item.id}
                  item={item}
                  arrow={i < 2 ? "right" : null}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default History;
