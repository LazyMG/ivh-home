import { Box, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

const SectionTitle = ({
  children,
  fontSize,
}: {
  children: React.ReactNode;
  fontSize: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box
      sx={{
        height: "18px",
        width: "10px",
        backgroundColor: "#2c2c2c",
        flexShrink: 0,
      }}
    />
    <Typography
      component="h2"
      sx={{
        fontFamily: "Freesentation-7-Bold",
        fontSize,
        color: "#2c2c2c",
      }}
    >
      {children}
    </Typography>
  </Box>
);

const HumanoidPackage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useBreakpoint();
  const { seo, hero, business_model, package_composition, why_ivh, cta } = data;

  const pagePx = isMobile ? "20px" : isTablet ? "40px" : "120px";
  const sectionGap = isMobile ? 12 : isTablet ? 16 : 20;
  const headlineFontSize = isMobile ? "22px" : isTablet ? "28px" : "36px";
  const sectionTitleFontSize = isMobile ? "20px" : isTablet ? "24px" : "28px";
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

        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: sectionGap,
            px: pagePx,
            pt: isMobile ? 6 : 10,
            pb: 10,
          }}
        >
          {/* ===== A. Hero ===== */}
          <Box
            component="section"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: headlineFontSize,
                  color: "#2c2c2c",
                }}
              >
                {seo.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: isMobile ? "16px" : "20px",
                  color: "#555",
                  mt: 1,
                }}
              >
                {hero.headline}
              </Typography>
            </Box>

            <Box>
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
                }}
              >
                <RenderSegments segments={hero.body[1].segments!} />
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={hero.image}
                alt={hero.image_alt}
                sx={{
                  width: isMobile ? "100%" : isTablet ? "60%" : "42%",
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: "Freesentation-5-Medium",
                fontSize: bodyFontSize,
                color: "#2c2c2c",
                wordBreak: "keep-all",
                lineHeight: 1.8,
              }}
            >
              <RenderSegments segments={hero.sub_body.segments} />
            </Typography>
          </Box>

          {/* ===== B. Business Model ===== */}
          <Box
            component="section"
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <SectionTitle fontSize={sectionTitleFontSize}>
              {business_model.title}
            </SectionTitle>

            <Typography
              sx={{
                fontFamily: "Freesentation-5-Medium",
                fontSize: bodyFontSize,
                color: "#2c2c2c",
                wordBreak: "keep-all",
                lineHeight: 1.8,
              }}
            >
              <RenderSegments segments={business_model.body.segments} />
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {business_model.items.map((item) => (
                <Box
                  key={item.number}
                  sx={{
                    display: "flex",
                    gap: 2,
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
                    —
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

          {/* ===== C. Package Composition ===== */}
          <Box
            component="section"
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <SectionTitle fontSize={sectionTitleFontSize}>
              {package_composition.title}
            </SectionTitle>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? 4 : 5,
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
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Freesentation-7-Bold",
                        fontSize: "18px",
                        color: "#888",
                        flexShrink: 0,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: "Freesentation-7-Bold",
                        fontSize: isMobile ? "16px" : "18px",
                        color: "#2c2c2c",
                        wordBreak: "keep-all",
                      }}
                    >
                      {card.title}
                      {card.subtitle && (
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: "Freesentation-5-Medium",
                            fontSize: isMobile ? "13px" : "14px",
                            color: "#888",
                            ml: 1,
                          }}
                        >
                          ({card.subtitle})
                        </Typography>
                      )}
                    </Typography>
                  </Box>
                  <Box component="ul" sx={{ m: 0, pl: isMobile ? 2.5 : 5.5 }}>
                    {card.bullets.map((bullet, i) => (
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
                        {bullet}
                      </Box>
                    ))}
                  </Box>
                  {card.note && (
                    <Typography
                      sx={{
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                        color: "#888",
                        pl: isMobile ? 0 : 5.5,
                      }}
                    >
                      {card.note}
                    </Typography>
                  )}
                  {idx < package_composition.cards.length - 1 && (
                    <Divider sx={{ mt: 1 }} />
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ===== D. Why iVH Total Package ===== */}
          <Box
            component="section"
            sx={{ display: "flex", flexDirection: "column", gap: 4, mb: isMobile ? -2 : -4 }}
          >
            <SectionTitle fontSize={sectionTitleFontSize}>
              Why iVH Total Package
            </SectionTitle>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: isMobile ? 4 : 5,
              }}
            >
              {/* Left — Why Not Just Buy a Robot? */}
              <Box
                sx={{
                  borderLeft: "4px solid #c0c0c0",
                  pl: 2.5,
                  py: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
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
                  {why_ivh.left.title}
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
                  <RenderSegments segments={why_ivh.left.body.segments} />
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {why_ivh.left.items.map((item, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: bodyFontSize,
                        color: "#555",
                        lineHeight: 1.8,
                        wordBreak: "keep-all",
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Right — Why iVH */}
              <Box
                sx={{
                  borderLeft: "4px solid #2c2c2c",
                  pl: 2.5,
                  py: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
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
                  {why_ivh.right.title}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {why_ivh.right.items.map((item, i) => (
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
              </Box>
            </Box>

            {/* Closing message */}
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                py: isMobile ? 3 : 4,
                px: isMobile ? 2.5 : 4,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: isMobile ? "18px" : isTablet ? "22px" : "24px",
                  color: "#2c2c2c",
                  wordBreak: "keep-all",
                  lineHeight: 1.6,
                }}
              >
                {why_ivh.closing}
              </Typography>
            </Box>
          </Box>

          {/* ===== E. CTA ===== */}
          <Box
            component="section"
            sx={{
              borderTop: "2px solid #2c2c2c",
              pt: isMobile ? 5 : 7,
              pb: isMobile ? 4 : 6,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Freesentation-5-Medium",
                fontSize: bodyFontSize,
                color: "#2c2c2c",
                wordBreak: "keep-all",
                lineHeight: 1.8,
              }}
            >
              <RenderSegments segments={cta.body.segments} />
            </Typography>
            <Box
              component="button"
              type="button"
              aria-label={cta.button_text}
              onClick={() => navigate(cta.button_url)}
              sx={(theme) => ({
                cursor: "pointer",
                flexShrink: 0,
                border: "none",
                fontSize: "16px",
                fontFamily: "Freesentation-6-SemiBold",
                color: "#fff",
                backgroundColor: "#2c2c2c",
                px: 4,
                py: 1.5,
                textAlign: "center",
                width: isMobile ? "100%" : "auto",
                "&:hover": {
                  backgroundColor: "#444",
                },
                "&:focus-visible": {
                  outline: "2px solid #2c2c2c",
                  outlineOffset: "2px",
                },
                [theme.breakpoints.up("tablet")]: {
                  width: "auto",
                },
              })}
            >
              {cta.button_text}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HumanoidPackage;
