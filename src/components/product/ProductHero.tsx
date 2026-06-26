import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import BreadScrum from "../../common/BreadScrum";

interface ProductHeroProps {
  /** 메인 배경 이미지 */
  image: string;
  imageAlt: string;
  /** 좌측 상단 배지 텍스트 (예: AMR, Package) */
  badge: string;
  /** 제품 타이틀 이미지 */
  titleImage: string;
  titleImageAlt?: string;
  /** 파란색 캡션 (page_name / headline) */
  caption: string;
  /** h1 설명문 */
  description: ReactNode;
  /** 캡션 아래 밑줄 너비 (예: "56%", "80%") */
  underlineWidth?: string;
  /** 페이지별 h1 색상·폰트·maxWidth 등 override */
  descriptionSx?: SxProps<Theme>;
  /** breadscrum.json의 pageKey. 지정 시 우측 상단에 breadcrumb 노출(태블릿↑) */
  breadcrumbKey?: string;
}

/** 제품 상세 페이지 공통 히어로(상단 비주얼 + 오버레이) */
const ProductHero = ({
  image,
  imageAlt,
  badge,
  titleImage,
  titleImageAlt = "",
  caption,
  description,
  underlineWidth = "80%",
  descriptionSx,
  breadcrumbKey,
}: ProductHeroProps) => {
  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <Box
        component="img"
        src={image}
        alt={imageAlt}
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
      {breadcrumbKey && (
        <BreadScrum
          pageKey={breadcrumbKey}
          sx={(theme) => ({
            position: "absolute",
            top: 0,
            right: "8%",
            mt: 5,
            zIndex: 1,
            display: "none",
            [theme.breakpoints.up("tablet")]: {
              display: "flex",
            },
          })}
        />
      )}
      <Box
        sx={(theme) => ({
          position: "absolute",
          bottom: "2%",
          left: "5%",
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("tablet")]: {
            bottom: "20%",
            left: "2%",
          },
          [theme.breakpoints.up("desktop")]: {
            left: "5%",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "fit-content", backgroundColor: "#03193F", px: 2 }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "18px",
                fontFamily: "Freesentation-6-SemiBold",
              }}
            >
              {badge}
            </Typography>
          </Box>
          <Box
            component="img"
            src={titleImage}
            alt={titleImageAlt}
            sx={(theme) => ({
              width: "256px",
              [theme.breakpoints.down("tablet")]: {
                width: "100px",
              },
              [theme.breakpoints.down("mobilePortrait")]: {
                width: "100px",
              },
            })}
          />
          <Typography
            sx={(theme) => ({
              color: "#003B8D",
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: "Freesentation-6-SemiBold",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "20px",
              },
            })}
          >
            {caption}
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: underlineWidth,
              borderBottom: "1px solid #003B8D",
            }}
          >
            {/* 선 끝의 작은 원 (중심이 선 끝과 일치) */}
            <Box
              sx={{
                position: "absolute",
                right: 0,
                bottom: 0,
                transform: "translate(50%, 50%)",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#003B8D",
              }}
            />
          </Box>
        </Box>
        <Typography
          component="h1"
          sx={[
            (theme) => ({
              fontSize: "12px",
              wordBreak: "keep-all",
              display: "none",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "18px",
              },
              [theme.breakpoints.up("desktop")]: {
                display: "block",
                mt: 2,
                whiteSpace: "pre-line",
              },
            }),
            ...(Array.isArray(descriptionSx) ? descriptionSx : [descriptionSx]),
          ]}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductHero;
