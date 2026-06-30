import { Box, Divider, Typography } from "@mui/material";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import resource from "../../data/product/humanoidPackage.json";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/common/SectionTitle";
import ContactTrainingInfoSection from "../../components/home/ContactTrainingInfoSection";
import ProductHero from "../../components/product/ProductHero";

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
    {showDivider && (
      <Divider
        sx={{
          borderColor: "#424242",
          mb: 10,
          borderStyle: "dashed",
          width: "90%",
          mx: "auto",
        }}
      />
    )}
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: isMobile ? 4 : 0,
      }}
    >
      <SectionTitle text={title} />
      <Box
        sx={(theme) => ({
          // 제목 텍스트 시작 위치(구분 디자인 너비 + gap)와 동일하게 정렬
          pl: `calc(8px + ${theme.spacing(4)})`,
          pr: "8%",
          pt: 8,
          [theme.breakpoints.up("tablet")]: {
            pl: `calc(88px + ${theme.spacing(4)})`,
          },
        })}
      >
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
      return (
        <RenderSegments segments={(val as { segments: Segment[] }).segments} />
      );
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
        <ProductHero
          image={resource.hero.image}
          imageAlt={t("hero.image_alt")}
          badge="Package"
          titleImage={resource.hero.imova_title_image}
          caption={t("hero.headline")}
          description={t("hero.description")}
          underlineWidth="80%"
          breadcrumbKey="humanoidPackage"
          descriptionSx={{
            color: "#424242",
            fontFamily: "Freesentation-4-Regular",
          }}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            backgroundColor: "#073272",
            boxSizing: "border-box",
            px: "24%",
            py: 10,
          }}
        >
          <Box
            role="img"
            aria-label={t("hero.humanoid_equation_alt")}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 5,
            }}
          >
            <Box component="img" alt="" src={resource.hero.equation.robot} />
            <Box component="img" alt="" src={resource.hero.equation.plus} />
            <Box component="img" alt="" src={resource.hero.equation.brain} />
            <Box component="img" alt="" src={resource.hero.equation.plus} />
            <Box component="img" alt="" src={resource.hero.equation.ai} />
            <Box component="img" alt="" src={resource.hero.equation.equals} />
            <Box
              component="img"
              alt=""
              src={resource.hero.equation.result}
              sx={{ width: "16%" }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                color: "#ffffff",
                fontSize: "20px",
                letterSpacing: "5%",
                fontFamily: "Galderglynn-Titling-Book",
              }}
            >
              {t("hero.equation_text")}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: sectionGap,
            px: pagePx,
            pt: 8,
          }}
        >
          {/* ===== B. Business Model ===== */}
          <SectionLayout
            title="Business Model"
            isMobile={isMobile}
            showDivider={false}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <Typography
                component="h3"
                sx={{
                  fontFamily: "Galderglynn-Titling-Regular",
                  fontSize: isMobile ? "18px" : "20px",
                  color: "#03193F",
                  textTransform: "uppercase",
                }}
              >
                {td("business_model.title")}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: bodyFontSize,
                  color: "#03193F",
                  wordBreak: "keep-all",
                  lineHeight: 1.8,
                  whiteSpace: "pre-wrap",
                }}
              >
                {renderSegmentBlock("business_model.body")}
              </Typography>

              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: "none" }}>
                {resource.business_model.items.map((item) => (
                  <Box
                    component="li"
                    key={item.id}
                    sx={{
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: bodyFontSize,
                      color: "#656565",
                      lineHeight: 1.8,
                      wordBreak: "keep-all",
                      "&::before": {
                        content: "'·'",
                        mr: 1,
                        color: "#555",
                      },
                    }}
                  >
                    {renderSegmentBlock(`business_model.items.${item.id}`)}
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
                const cardTitle = td(
                  `package_composition.cards.${card.id}.title`,
                );
                const cardSubtitle = tOpt(
                  `package_composition.cards.${card.id}.subtitle`,
                );
                const cardSubtitle2 = tOpt(
                  `package_composition.cards.${card.id}.subtitle2`,
                );
                const cardNote = tOpt(
                  `package_composition.cards.${card.id}.note`,
                );
                const hasBody = tOpt(
                  `package_composition.cards.${card.id}.body`,
                );

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
                          fontFamily: "Galderglynn-Titling-Regular",
                          fontSize: isMobile ? "16px" : "18px",
                          color: "#03193F",
                          wordBreak: "keep-all",
                          textTransform: "uppercase",
                        }}
                      >
                        {`${idx + 1}. ${cardTitle}`}
                        {cardSubtitle && (
                          <Typography
                            component="span"
                            sx={{
                              fontFamily: "Galderglynn-Titling-Regular",
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
                            fontFamily: "Galderglynn-Titling-Regular",
                            fontSize: isMobile ? "15px" : "17px",
                            color: "#03193F",
                            wordBreak: "keep-all",
                            pl: 2.5,
                            textTransform: "uppercase",
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
                        }}
                      >
                        {renderSegmentBlock(
                          `package_composition.cards.${card.id}.body`,
                        )}
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
                          {td(
                            `package_composition.cards.${card.id}.bullets.${bullet.id}`,
                          )}
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
                      color: "#656565",
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
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#03193F",
                  wordBreak: "keep-all",
                  lineHeight: 1.6,
                }}
              >
                {renderSegmentBlock("why_ivh.closing")}
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
                  color: "#03193F",
                  textTransform: "uppercase",
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
        <ContactTrainingInfoSection />
      </Box>
    </>
  );
};

export default HumanoidPackage;
