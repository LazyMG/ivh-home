import { Box, Divider, Typography } from "@mui/material";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import LangToggle from "../../common/LangToggle";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import resource from "../../data/product/humanoidPackage.json";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("product/humanoidPackage");

  const td = (key: string): string => t(key as never);
  const tOpt = (key: string): string | undefined => {
    const val = t(key as never, { defaultValue: "" });
    return val || undefined;
  };

  /** segments(ko) 또는 plain string(en) 렌더링 */
  const renderSegmentBlock = (key: string) => {
    const val = t(key as never, { returnObjects: true, defaultValue: "" });
    if (!val) return null;
    if (typeof val === "string") return val;
    if (typeof val === "object" && "segments" in (val as object)) {
      return <RenderSegments segments={(val as { segments: Segment[] }).segments} />;
    }
    return null;
  };

  const pagePx = isMobile ? "20px" : isTablet ? "40px" : "120px";
  const sectionGap = isMobile ? 12 : isTablet ? 16 : 20;
  const bodyFontSize = isMobile ? "14px" : isTablet ? "16px" : "18px";

  return (
    <>
      <SEO
        title={td("seo.title")}
        description={td("seo.description")}
        keywords={td("seo.keywords")}
        canonical={resource.seo.canonical}
      />
      <Box component="main">
        <ScrollButton threshold={100} />
        <LangToggle />

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
              src={resource.hero.imova_title_image}
              alt={resource.hero.imova_title_alt}
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
              {td("seo.title")}
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
            {td("seo.title")}
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
            {td("hero.headline")}
          </Typography>

          {/* 인용구 */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1200px",
              px: isMobile ? 4 : 6,
              py: isMobile ? 2 : 3,
              boxSizing: "border-box",
            }}
          >
            <Box
              component="img"
              src={resource.hero.effects.ldquo}
              alt=""
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: isMobile ? "16px" : "32px",
              }}
            />
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
              {renderSegmentBlock("hero.body")}
            </Typography>
            <Box
              component="img"
              src={resource.hero.effects.rdquo}
              alt=""
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: isMobile ? "16px" : "32px",
              }}
            />
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
              whiteSpace: "pre-wrap",
            }}
          >
            {td("hero.sub_body")}
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
            src={resource.hero.image}
            alt={td("hero.image_alt")}
            sx={{
              position: "absolute",
              top: isMobile ? "5%" : "3%",
              right: isMobile ? "-6%" : "2%",
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
              pt: isMobile ? 3 : "2%",
              pb: isMobile ? 3 : 0,
              boxSizing: "border-box",
            }}
          >
            {/* iMOVA 로고 */}
            <Box
              component="img"
              src={resource.hero.imova_title_image}
              alt={resource.hero.imova_title_alt}
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
              {td("hero.sub_headline")}
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
              {td("hero.description")}
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
                    src={resource.hero.humanoid_equation_image}
                    alt={td("hero.humanoid_equation_alt")}
                    sx={{
                      width: isTablet ? "380px" : "420px",
                      display: "block",
                    }}
                  />
                  <Box
                    component="img"
                    src={resource.hero.imova_title_image}
                    alt={resource.hero.imova_title_alt}
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
                  {td("hero.equation_text")}
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
                  src={resource.hero.humanoid_equation_image}
                  alt={td("hero.humanoid_equation_alt")}
                  sx={{
                    width: "60%",
                    display: "block",
                  }}
                />
                <Box
                  component="img"
                  src={resource.hero.imova_title_image}
                  alt={resource.hero.imova_title_alt}
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
            src={resource.hero.effects.white_effect}
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
            src={resource.hero.effects.gra_effect}
            alt=""
            sx={{
              position: "absolute",
              bottom: "9%",
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
            src={resource.hero.effects.blue_effect}
            alt=""
            sx={{
              position: "absolute",
              bottom: "3%",
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
                {td("business_model.title")}
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
                {renderSegmentBlock("business_model.body")}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {resource.business_model.items.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      gap: 1,
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
                      {renderSegmentBlock(`business_model.items.${item.id}`)}
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
              {resource.package_composition.cards.map((card, idx) => {
                const cardTitle = td(`package_composition.cards.${card.id}.title`);
                const cardSubtitle = tOpt(`package_composition.cards.${card.id}.subtitle`);
                const cardSubtitle2 = tOpt(`package_composition.cards.${card.id}.subtitle2`);
                const cardNote = tOpt(`package_composition.cards.${card.id}.note`);
                const hasBody = tOpt(`package_composition.cards.${card.id}.body`);

                return (
                  <Box
                    key={card.id}
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
                        {`${idx + 1}. ${cardTitle}`}
                        {cardSubtitle && (
                          <Typography
                            component="span"
                            sx={{
                              fontFamily: "Freesentation-7-Bold",
                              fontSize: isMobile ? "16px" : "18px",
                              color: "#2c2c2c",
                              ml: 1,
                            }}
                          >
                            ({cardSubtitle})
                          </Typography>
                        )}
                      </Typography>
                      {cardSubtitle2 && (
                        <Typography
                          sx={{
                            fontFamily: "Freesentation-7-Bold",
                            fontSize: isMobile ? "15px" : "17px",
                            color: "#2c2c2c",
                            wordBreak: "keep-all",
                            pl: 2.5,
                          }}
                        >
                          {cardSubtitle2}
                        </Typography>
                      )}
                    </Box>

                    {hasBody && (
                      <Typography
                        sx={{
                          fontFamily: "Freesentation-5-Medium",
                          fontSize: bodyFontSize,
                          color: "#2c2c2c",
                          wordBreak: "keep-all",
                          lineHeight: 1.8,
                          whiteSpace: "pre-wrap",
                          pl: 2.5,
                        }}
                      >
                        {renderSegmentBlock(`package_composition.cards.${card.id}.body`)}
                      </Typography>
                    )}

                    <Box component="ul" sx={{ m: 0, pl: 2, listStyle: "none" }}>
                      {card.bullets.map((bullet) => (
                        <Box
                          component="li"
                          key={bullet.id}
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
                          {td(`package_composition.cards.${card.id}.bullets.${bullet.id}`)}
                        </Box>
                      ))}
                    </Box>

                    {cardNote && (
                      <Typography
                        sx={{
                          fontFamily: "Freesentation-5-Medium",
                          fontSize: isMobile ? "12px" : "16px",
                          color: "#888",
                          textDecoration: "underline",
                          pl: 2,
                        }}
                      >
                        {cardNote}
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </Box>
          </SectionLayout>

          {/* ===== D. Why iVH ===== */}
          <SectionLayout title="Why iVH" isMobile={isMobile}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: "none" }}>
                {resource.why_ivh.items.map((item) => (
                  <Box
                    component="li"
                    key={item.id}
                    sx={{
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: bodyFontSize,
                      color: "#2c2c2c",
                      lineHeight: 1.8,
                      wordBreak: "keep-all",
                      "&::before": {
                        content: "'·'",
                        mr: 1,
                        color: "#555",
                      },
                    }}
                  >
                    {td(`why_ivh.items.${item.id}`)}
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
                {td("why_ivh.closing")}
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
                {td("cta.headline")}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: bodyFontSize,
                  color: "#555",
                  wordBreak: "keep-all",
                  lineHeight: 1.8,
                  whiteSpace: "pre-wrap",
                }}
              >
                {renderSegmentBlock("cta.body")}
              </Typography>
            </Box>
          </SectionLayout>
        </Box>
      </Box>
    </>
  );
};

export default HumanoidPackage;
