import { Box, Divider, Typography } from "@mui/material";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import data from "../../data/product/humanoidPackage.json";

type Segment = { text: string; bold?: boolean };

const RenderSegments = ({ segments }: { segments: Segment[] }) => (
  <>
    {segments.map((seg, i) =>
      seg.bold ? (
        <strong key={i} style={{ fontFamily: "Freesentation-7-Bold" }}>
          {seg.text}
        </strong>
      ) : (
        <span key={i}>{seg.text}</span>
      ),
    )}
  </>
);

/** Decorative section title with drop-cap first letter */
const DecorativeTitle = ({
  text,
  isMobile,
}: {
  text: string;
  isMobile: boolean;
}) => {
  const firstChar = text[0];
  const rest = text.slice(1);
  return (
    <Typography
      component="h2"
      sx={{
        fontFamily: "Freesentation-7-Bold",
        fontSize: isMobile ? "28px" : "40px",
        color: "#1755C2",
        lineHeight: 1.2,
        wordBreak: "keep-all",
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: "Freesentation-7-Bold",
          fontSize: isMobile ? "42px" : "60px",
        }}
      >
        {firstChar}
      </Box>
      {rest}
    </Typography>
  );
};

/** Two-column section layout: decorative title left, content right */
const SectionLayout = ({
  title,
  isMobile,
  children,
  showDivider = true,
}: {
  title: string;
  isMobile: boolean;
  children: React.ReactNode;
  showDivider?: boolean;
}) => (
  <Box component="section">
    {showDivider && <Divider sx={{ borderColor: "#ccc", mb: 5 }} />}
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: isMobile ? 4 : 0,
      }}
    >
      <Box sx={{ flexShrink: 0, width: isMobile ? "100%" : "auto" }}>
        <DecorativeTitle text={title} isMobile={isMobile} />
      </Box>
      <Box sx={{ width: isMobile ? "100%" : "55%", pt: isMobile ? 0 : 5 }}>
        {children}
      </Box>
    </Box>
  </Box>
);

const HumanoidPackage = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const { seo, hero, business_model, package_composition, why_ivh, cta } = data;

  const pagePx = isMobile ? "20px" : isTablet ? "40px" : "120px";
  const sectionGap = isMobile ? 12 : isTablet ? 16 : 20;
  const bodyFontSize = isMobile ? "14px" : isTablet ? "16px" : "18px";

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <Box component="main">
        <ScrollButton threshold={100} />

        {/* ===== A. Hero (Part 1) ===== */}
        <Box
          component="section"
          sx={{
            width: "100%",
            background: "linear-gradient(180deg, #DEEFFF 0%, #FFFFFF 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: pagePx,
            pt: isMobile ? 6 : 10,
            pb: isMobile ? 8 : 14,
            boxSizing: "border-box",
          }}
        >
          {/* iMOVA 로고 + 서브텍스트 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              gap: isMobile ? 1.5 : 3,
              alignSelf: "flex-start",
              mb: isMobile ? 6 : 10,
            }}
          >
            <Box
              component="img"
              src="/images/pages/product/iMOVA/iMOVA_title.png"
              alt="iMOVA"
              sx={{
                height: isMobile ? "28px" : "40px",
                alignSelf: "flex-end",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Freesentation-7-Bold",
                fontSize: isMobile ? "13px" : "16px",
                color: "#555",
              }}
            >
              {seo.title}
            </Typography>
          </Box>

          {/* 제목 */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "Freesentation-7-Bold",
              fontSize: isMobile ? "18px" : isTablet ? "28px" : "32px",
              color: "#1755C2",
              mb: 0,
              lineHeight: 1.2,
            }}
          >
            {seo.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Freesentation-7-Bold",
              fontSize: isMobile ? "18px" : isTablet ? "28px" : "32px",
              color: "#1755C2",
              lineHeight: 1.2,
              mb: isMobile ? 4 : 6,
            }}
          >
            {hero.headline}
          </Typography>

          {/* 인용구 */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "860px",
              px: isMobile ? 4 : 6,
              py: isMobile ? 2 : 3,
              boxSizing: "border-box",
            }}
          >
            <Typography
              aria-hidden="true"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                fontFamily: "Georgia, serif",
                fontSize: isMobile ? "36px" : "64px",
                color: "#90CAF9",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              &ldquo;
            </Typography>
            <Typography
              sx={{
                fontFamily: "Freesentation-5-Medium",
                fontSize: bodyFontSize,
                color: "#2c2c2c",
                wordBreak: "keep-all",
                lineHeight: 1.8,
              }}
            >
              {hero.body[0].text}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Freesentation-5-Medium",
                fontSize: bodyFontSize,
                color: "#2c2c2c",
                wordBreak: "keep-all",
                lineHeight: 1.8,
                whiteSpace: "pre-wrap",
              }}
            >
              <RenderSegments segments={hero.body[1].segments!} />
            </Typography>
            <Typography
              aria-hidden="true"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                fontFamily: "Georgia, serif",
                fontSize: isMobile ? "36px" : "64px",
                color: "#90CAF9",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              &rdquo;
            </Typography>
          </Box>

          {/* 하단 텍스트 */}
          <Typography
            sx={{
              fontFamily: "Freesentation-5-Medium",
              fontSize: isMobile ? "13px" : "18px",
              color: "#555",
              wordBreak: "keep-all",
              textDecoration: "underline",
              mt: isMobile ? 4 : 6,
            }}
          >
            <RenderSegments segments={hero.sub_body.segments} />
          </Typography>
        </Box>

        {/* ===== B. Hero (Part 2) ===== */}
        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: isMobile ? "auto" : "16 / 11",
            overflow: "hidden",
          }}
        >
          {/* 로봇 이미지 */}
          <Box
            component="img"
            src="/images/pages/product/iMOVA/humanoid.png"
            alt="Humanoid Robot"
            sx={{
              position: "absolute",
              top: isMobile ? "5%" : "3%",
              right: isMobile ? "-3%" : "2%",
              height: isMobile ? "55%" : "60%",
              width: "auto",
              zIndex: 1,
            }}
          />

          {/* 텍스트 콘텐츠 */}
          <Box
            sx={{
              position: "relative",
              zIndex: 10,
              width: isMobile ? "65%" : "65%",
              ml: isMobile ? 0 : "8%",
              mr: "auto",
              px: pagePx,
              pt: isMobile ? 3 : 6,
              pb: isMobile ? 3 : 0,
              boxSizing: "border-box",
            }}
          >
            {/* iMOVA 로고 */}
            <Box
              component="img"
              src="/images/pages/product/iMOVA/iMOVA_title.png"
              alt="iMOVA"
              sx={{
                height: isMobile ? "28px" : isTablet ? "42px" : "52px",
                mb: 1,
                display: "block",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Freesentation-7-Bold",
                fontSize: isMobile ? "14px" : isTablet ? "22px" : "28px",
                color: "#2c2c2c",
                wordBreak: "keep-all",
                lineHeight: 1.4,
                mb: isMobile ? 1.5 : 3,
              }}
            >
              : Humanoid Robots, Delivered as a Complete Solution
            </Typography>

            <Typography
              sx={{
                fontFamily: "Freesentation-5-Medium",
                fontSize: isMobile ? "12px" : isTablet ? "18px" : "24px",
                color: "#2c2c2c",
                wordBreak: "keep-all",
                lineHeight: 1.8,
                whiteSpace: "pre-wrap",
                mb: isMobile ? 0 : 4,
              }}
            >
              {`iMOVA는 휴머노이드 로봇을 직접 개발하지 않습니다.\n대신, 검증된 글로벌 휴머노이드 로봇에 AI와 운영 시스템을 결합하여\n즉시 도입 가능한 토탈 패키지로 제공합니다.`}
            </Typography>

            {/* 수식 (PC만 여기에 표시) */}
            {!isMobile && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 1,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/pages/product/iMOVA/humanoid_equation.png"
                    alt="Robot Hardware + AI + Operation ="
                    sx={{
                      width: isTablet ? "380px" : "420px",
                      display: "block",
                    }}
                  />
                  <Box
                    component="img"
                    src="/images/pages/product/iMOVA/iMOVA_title.png"
                    alt="iMOVA"
                    sx={{
                      height: isTablet ? "34px" : "42px",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Freesentation-7-Bold",
                    fontSize: isTablet ? "22px" : "28px",
                    color: "#2c2c2c",
                    lineHeight: 1.4,
                    mb: 2,
                  }}
                >
                  Robot Hardware + AI + Operation = iVH Total Package
                </Typography>
              </>
            )}
          </Box>

          {/* 수식 (모바일만 여기에 표시 — 텍스트+로봇 하단) */}
          {isMobile && (
            <Box
              sx={{
                position: "relative",
                zIndex: 10,
                px: pagePx,
                pt: 2,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mb: 1,
                }}
              >
                <Box
                  component="img"
                  src="/images/pages/product/iMOVA/humanoid_equation.png"
                  alt="Robot Hardware + AI + Operation ="
                  sx={{
                    width: "60%",
                    display: "block",
                  }}
                />
                <Box
                  component="img"
                  src="/images/pages/product/iMOVA/iMOVA_title.png"
                  alt="iMOVA"
                  sx={{
                    height: "16px",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: "12px",
                  color: "#2c2c2c",
                  lineHeight: 1.4,
                }}
              >
                Robot Hardware + AI + Operation = iVH Total Package
              </Typography>
            </Box>
          )}

          {/* 흰빛 효과 (가장 위) */}
          <Box
            component="img"
            src="/images/pages/product/iMOVA/humanoid_white_effect.png"
            alt=""
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "-5%",
              width: "70%",
              pointerEvents: "none",
              zIndex: 5,
              display: isMobile ? "none" : "block",
            }}
          />
          {/* 녹색 곡선 (중간) */}
          <Box
            component="img"
            src="/images/pages/product/iMOVA/humanoid_gra_effect.png"
            alt=""
            sx={{
              position: "absolute",
              bottom: "12%",
              left: "20%",
              width: "95%",
              pointerEvents: "none",
              zIndex: 3,
              display: isMobile ? "none" : "block",
            }}
          />
          {/* 파란색 곡선 (가장 아래) */}
          <Box
            component="img"
            src="/images/pages/product/iMOVA/humanoid_blue_effect.png"
            alt=""
            sx={{
              position: "absolute",
              bottom: "6%",
              left: "-8%",
              width: "120%",
              pointerEvents: "none",
              zIndex: 4,
              display: isMobile ? "none" : "block",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: sectionGap,
            px: pagePx,
            pt: isMobile ? 8 : 14,
            pb: 10,
          }}
        >
          {/* ===== B. Business Model ===== */}
          <SectionLayout title="Business Model" isMobile={isMobile}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <Typography
                component="h3"
                sx={{
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: isMobile ? "18px" : "20px",
                  color: "#2c2c2c",
                }}
              >
                {business_model.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: bodyFontSize,
                  color: "#2c2c2c",
                  wordBreak: "keep-all",
                  lineHeight: 1.8,
                  whiteSpace: "pre-wrap",
                }}
              >
                <RenderSegments segments={business_model.body.segments} />
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {business_model.items.map((item) => (
                  <Box
                    key={item.number}
                    sx={{
                      display: "flex",
                      gap: isMobile ? 1 : 2,
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      aria-hidden="true"
                      sx={{
                        fontFamily: "Freesentation-7-Bold",
                        fontSize: bodyFontSize,
                        color: "#888",
                        flexShrink: 0,
                      }}
                    >
                      ·
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: bodyFontSize,
                        color: "#2c2c2c",
                        wordBreak: "keep-all",
                        lineHeight: 1.6,
                      }}
                    >
                      <RenderSegments segments={item.segments} />
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </SectionLayout>

          {/* ===== C. Package Composition ===== */}
          <SectionLayout title="Package Composition" isMobile={isMobile}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? 6 : 8,
              }}
            >
              {package_composition.cards.map((card, idx) => (
                <Box
                  key={card.title}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: "Freesentation-7-Bold",
                        fontSize: isMobile ? "16px" : "18px",
                        color: "#2c2c2c",
                        wordBreak: "keep-all",
                      }}
                    >
                      {`${idx + 1}. ${card.title}`}
                      {card.subtitle && (
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: "Freesentation-7-Bold",
                            fontSize: isMobile ? "16px" : "18px",
                            color: "#2c2c2c",
                            ml: 1,
                          }}
                        >
                          ({card.subtitle})
                        </Typography>
                      )}
                    </Typography>
                    {(card as any).subtitle2 && (
                      <Typography
                        sx={{
                          fontFamily: "Freesentation-7-Bold",
                          fontSize: isMobile ? "15px" : "17px",
                          color: "#2c2c2c",
                          wordBreak: "keep-all",
                        }}
                      >
                        {(card as any).subtitle2}
                      </Typography>
                    )}
                  </Box>

                  {(card as any).body && (
                    <Typography
                      sx={{
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: bodyFontSize,
                        color: "#2c2c2c",
                        wordBreak: "keep-all",
                        lineHeight: 1.8,
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      <RenderSegments segments={(card as any).body.segments} />
                    </Typography>
                  )}

                  <Box component="ul" sx={{ m: 0, pl: 0, listStyle: "none" }}>
                    {card.bullets.map((bullet, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          fontFamily: "Freesentation-5-Medium",
                          fontSize: bodyFontSize,
                          color: "#555",
                          lineHeight: 1.8,
                          wordBreak: "keep-all",
                          "&::before": {
                            content: "'·'",
                            mr: 1,
                            color: "#555",
                          },
                        }}
                      >
                        {bullet}
                      </Box>
                    ))}
                  </Box>

                  {card.note && (
                    <Typography
                      sx={{
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: isMobile ? "12px" : "16px",
                        color: "#888",
                        textDecoration: "underline",
                      }}
                    >
                      {card.note}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </SectionLayout>

          {/* ===== D. Why iVH ===== */}
          <SectionLayout title="Why iVH" isMobile={isMobile}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {why_ivh.items.map((item, i) => (
                  <Box
                    component="li"
                    key={i}
                    sx={{
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: bodyFontSize,
                      color: "#2c2c2c",
                      lineHeight: 1.8,
                      wordBreak: "keep-all",
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
              <Typography
                sx={{
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#2c2c2c",
                  wordBreak: "keep-all",
                  lineHeight: 1.6,
                }}
              >
                {why_ivh.closing}
              </Typography>
            </Box>
          </SectionLayout>

          {/* ===== E. CTA ===== */}
          <SectionLayout title="Call To Action" isMobile={isMobile}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                pb: isMobile ? 8 : 14,
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: isMobile ? "18px" : "20px",
                  color: "#2c2c2c",
                }}
              >
                {cta.headline}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: bodyFontSize,
                  color: "#555",
                  wordBreak: "keep-all",
                  lineHeight: 1.8,
                }}
              >
                <RenderSegments segments={cta.body.segments} />
              </Typography>
            </Box>
          </SectionLayout>
        </Box>
      </Box>
    </>
  );
};

export default HumanoidPackage;
