import { Box, Divider, Typography } from "@mui/material";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import resource from "../../data/product/humanoidPackage.json";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/common/SectionTitle";
import ContactTrainingInfoSection from "../../components/home/ContactTrainingInfoSection";
import ProductHero from "../../components/product/ProductHero";
import HumanoidHeroMobile from "../../components/product/HumanoidHeroMobile";
import { FONTS } from "../../theme/theme";

type Segment = { text: string; bold?: boolean };

const RenderSegments = ({ segments }: { segments: Segment[] }) => (
  <>
    {segments.map((seg, i) =>
      seg.bold ? (
        <strong key={i} style={{ fontFamily: FONTS.freesentation.bold }}>
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
  children,
  showDivider = true,
}: {
  title: string;
  children: React.ReactNode;
  showDivider?: boolean;
}) => (
  <Box component="section">
    {showDivider && (
      <Divider
        sx={(theme) => ({
          borderColor: "#424242",
          mb: 10,
          borderStyle: "dashed",
          width: "90%",
          mx: "auto",
          display: "none",
          [theme.breakpoints.up("desktop")]: {
            display: "block",
          },
        })}
      />
    )}
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 4,
        [theme.breakpoints.up("desktop")]: {
          gap: 0,
        },
      })}
    >
      <SectionTitle text={title} />
      <Box
        sx={(theme) => ({
          // 제목 텍스트 시작 위치(구분 디자인 너비 + gap)와 동일하게 정렬
          // pr: "8%",
          [theme.breakpoints.up("desktop")]: {
            pl: `calc(88px + ${theme.spacing(4)})`,
            pt: 8,
          },
        })}
      >
        {children}
      </Box>
    </Box>
  </Box>
);

const HumanoidPackage = () => {
  const { isMobile } = useBreakpoint();
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
        {isMobile ? (
          <HumanoidHeroMobile
            image={resource.hero.mobile_image}
            imageAlt={t("hero.image_alt")}
            badge="Package"
            titleImage={resource.hero.imova_title_image}
            caption={t("hero.headline")}
            description={t("hero.description")}
          />
        ) : (
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
              fontFamily: FONTS.freesentation.regular,
            }}
          />
        )}

        <Box
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            backgroundColor: "#073272",
            boxSizing: "border-box",
            // 모바일: 여백 없이 100% 폭 (세부 조정 예정)
            px: 3,
            py: 2,
            [theme.breakpoints.up("desktop")]: {
              px: "24%",
              py: 10,
              gap: 4,
            },
          })}
        >
          <Box
            role="img"
            aria-label={t("hero.humanoid_equation_alt")}
            sx={(theme) => ({
              display: "flex",
              // justifyContent: "space-between",
              justifyContent: "center",
              alignItems: "center",
              // 모바일 base → 태블릿↑에서 간격 확대
              gap: 2,
              [theme.breakpoints.up("desktop")]: {
                px: 5,
                gap: 10,
                justifyContent: "center",
              },
            })}
          >
            <Box
              component="img"
              alt=""
              src={resource.hero.equation.robot}
              sx={(theme) => ({
                width: "10%",
                height: "auto",
                [theme.breakpoints.up("tablet")]: {
                  width: "5%",
                },
                [theme.breakpoints.up("desktop")]: { width: "auto" },
              })}
            />
            <Box
              component="img"
              alt=""
              src={resource.hero.equation.plus}
              sx={(theme) => ({
                width: "5%",
                height: "auto",
                [theme.breakpoints.up("tablet")]: {
                  width: "2%",
                },
                [theme.breakpoints.up("desktop")]: { width: "auto" },
              })}
            />
            <Box
              component="img"
              alt=""
              src={resource.hero.equation.brain}
              sx={(theme) => ({
                width: "12%",
                height: "auto",
                [theme.breakpoints.up("tablet")]: {
                  width: "5%",
                },
                [theme.breakpoints.up("desktop")]: { width: "auto" },
              })}
            />
            <Box
              component="img"
              alt=""
              src={resource.hero.equation.plus}
              sx={(theme) => ({
                width: "5%",
                height: "auto",
                [theme.breakpoints.up("tablet")]: {
                  width: "2%",
                },
                [theme.breakpoints.up("desktop")]: { width: "auto" },
              })}
            />
            <Box
              component="img"
              alt=""
              src={resource.hero.equation.ai}
              sx={(theme) => ({
                width: "12%",
                height: "auto",
                [theme.breakpoints.up("tablet")]: {
                  width: "5%",
                },
                [theme.breakpoints.up("desktop")]: { width: "auto" },
              })}
            />
            <Box
              component="img"
              alt=""
              src={resource.hero.equation.equals}
              sx={(theme) => ({
                width: "5%",
                height: "auto",
                [theme.breakpoints.up("tablet")]: {
                  width: "2%",
                },
                [theme.breakpoints.up("desktop")]: { width: "auto" },
              })}
            />
            <Box
              component="img"
              alt=""
              src={resource.hero.equation.result}
              sx={(theme) => ({
                // 마지막 이미지는 나머지보다 크게
                width: "24%",
                height: "auto",
                [theme.breakpoints.up("tablet")]: {
                  width: "15%",
                },
                [theme.breakpoints.up("desktop")]: { width: "16%" },
              })}
            />
          </Box>
          <Box>
            <Typography
              sx={(theme) => ({
                color: "#ffffff",
                fontSize: "10px",
                letterSpacing: "2%",
                fontFamily: FONTS.galderglynn.book,
                textAlign: "center",
                [theme.breakpoints.up("desktop")]: {
                  fontSize: "20px",
                },
              })}
            >
              {t("hero.equation_text")}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={(theme) => ({
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            // 모바일 base → 태블릿 → 데스크탑 단계별 확대
            gap: 12,
            px: 3,
            pt: 8,
            [theme.breakpoints.up("mobileLandscape")]: {
              px: "8%",
            },
            [theme.breakpoints.up("desktop")]: {
              gap: 20,
              px: "6%",
            },
          })}
        >
          {/* ===== B. Business Model ===== */}
          <SectionLayout title="Business Model" showDivider={false}>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 3,
                [theme.breakpoints.up("desktop")]: {
                  gap: 5,
                },
              })}
            >
              <Typography
                component="h3"
                sx={(theme) => ({
                  fontFamily: FONTS.galderglynn.regular,
                  fontSize: "18px",
                  color: "#003B8D",
                  [theme.breakpoints.up("desktop")]: {
                    color: "#03193F",
                    fontSize: "20px",
                  },
                })}
              >
                {td("business_model.title")}
              </Typography>

              <Typography
                sx={(theme) => ({
                  fontFamily: FONTS.freesentation.medium,
                  fontSize: "18px",
                  color: "#003B8D",
                  wordBreak: "keep-all",
                  lineHeight: 1.4,
                  whiteSpace: "pre-wrap",
                  [theme.breakpoints.up("desktop")]: {
                    color: "#03193F",
                    fontSize: "16px",
                    lineHeight: 1.8,
                  },
                })}
              >
                {renderSegmentBlock("business_model.body")}
              </Typography>

              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: "none" }}>
                {resource.business_model.items.map((item) => (
                  <Box
                    component="li"
                    key={item.id}
                    sx={{
                      fontFamily: FONTS.freesentation.medium,
                      fontSize: "16px",
                      color: "#656565",
                      lineHeight: 1.6,
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
          <SectionLayout title="Package Composition">
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 6,
                [theme.breakpoints.up("desktop")]: {
                  gap: 8,
                },
              })}
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
                      sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        gap: 0,
                        [theme.breakpoints.up("desktop")]: {
                          gap: 1,
                        },
                      })}
                    >
                      <Typography
                        component="h3"
                        sx={(theme) => ({
                          fontFamily: FONTS.galderglynn.regular,
                          fontSize: "16px",
                          color: "#003B8D",
                          wordBreak: "keep-all",
                          textTransform: "uppercase",
                          [theme.breakpoints.up("desktop")]: {
                            fontSize: "18px",
                            color: "#03193F",
                          },
                        })}
                      >
                        {`${idx + 1}. ${cardTitle}`}
                        {cardSubtitle && (
                          <Typography
                            component="span"
                            sx={(theme) => ({
                              fontFamily: FONTS.galderglynn.regular,
                              fontSize: "16px",
                              color: "#003B8D",
                              ml: 1,
                              [theme.breakpoints.up("desktop")]: {
                                fontSize: "18px",
                                color: "#2c2c2c",
                              },
                            })}
                          >
                            ({cardSubtitle})
                          </Typography>
                        )}
                      </Typography>
                      {cardSubtitle2 && (
                        <Typography
                          sx={(theme) => ({
                            fontFamily: FONTS.galderglynn.regular,
                            fontSize: "15px",
                            color: "#003B8D",
                            wordBreak: "keep-all",
                            pl: 2.5,
                            textTransform: "uppercase",
                            [theme.breakpoints.up("desktop")]: {
                              fontSize: "17px",
                              color: "#03193F",
                            },
                          })}
                        >
                          {cardSubtitle2}
                        </Typography>
                      )}
                    </Box>

                    {hasBody && (
                      <Typography
                        sx={(theme) => ({
                          fontFamily: FONTS.freesentation.medium,
                          fontSize: "18px",
                          color: "#656565",
                          wordBreak: "keep-all",
                          lineHeight: 1.4,
                          whiteSpace: "pre-wrap",
                          [theme.breakpoints.up("desktop")]: {
                            fontSize: "16px",
                            lineHeight: 1.8,
                          },
                        })}
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
                            fontFamily: FONTS.freesentation.medium,
                            fontSize: "16px",
                            color: "#656565",
                            lineHeight: 1.6,
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
                          fontFamily: FONTS.freesentation.medium,
                          fontSize: "16px",
                          color: "#656565",
                          textDecoration: "underline",
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
          <SectionLayout title="Why iVH">
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                // 모바일: closing이 불릿 목록 바로 아래 붙는 note 형태
                gap: 1,
                [theme.breakpoints.up("desktop")]: {
                  gap: 3,
                },
              })}
            >
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: "none" }}>
                {resource.why_ivh.items.map((item) => (
                  <Box
                    component="li"
                    key={item.id}
                    sx={{
                      fontFamily: FONTS.freesentation.medium,
                      fontSize: "16px",
                      color: "#656565",
                      lineHeight: 1.6,
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
                sx={(theme) => ({
                  // 모바일: 카드 note와 동일한 형태 (※·16px·#888·밑줄)
                  fontFamily: FONTS.freesentation.medium,
                  fontSize: "16px",
                  color: "#888",
                  textDecoration: "underline",
                  wordBreak: "keep-all",
                  lineHeight: 1.6,
                  "&::before": {
                    content: "'※ '",
                  },
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "16px",
                    color: "#03193F",
                    textDecoration: "none",
                    lineHeight: 1.8,
                    "&::before": {
                      content: "none",
                    },
                  },
                })}
              >
                {renderSegmentBlock("why_ivh.closing")}
              </Typography>
            </Box>
          </SectionLayout>

          {/* ===== E. CTA ===== */}
          <SectionLayout title="Call To Action">
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 3,
                pb: 8,
                [theme.breakpoints.up("desktop")]: {
                  pb: 14,
                },
              })}
            >
              <Typography
                component="h3"
                sx={(theme) => ({
                  fontFamily: FONTS.freesentation.bold,
                  fontSize: "18px",
                  color: "#656565",
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "20px",
                    color: "#03193F",
                  },
                })}
              >
                {td("cta.headline")}
              </Typography>
              <Typography
                sx={(theme) => ({
                  fontFamily: FONTS.freesentation.medium,
                  fontSize: "18px",
                  color: "#555",
                  wordBreak: "keep-all",
                  lineHeight: 1.4,
                  whiteSpace: "pre-wrap",
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "16px",
                    lineHeight: 1.8,
                  },
                })}
              >
                {renderSegmentBlock("cta.body")}
              </Typography>
            </Box>
          </SectionLayout>
        </Box>
        {!isMobile && <ContactTrainingInfoSection />}
      </Box>
    </>
  );
};

export default HumanoidPackage;
