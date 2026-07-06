import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import BreadScrum from "../../common/BreadScrum";
import { FONTS } from "../../theme/theme";

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
  /** 캡션 텍스트 색상 (기본 #003B8D) — 페이지별 override */
  captionColor?: string;
  /** 배지 배경색 (기본 #03193F) — 페이지별 override */
  badgeColor?: string;
  /** 배지 글자색 (기본 #ffffff) — 페이지별 override */
  badgeTextColor?: string;
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
  captionColor = "#003B8D",
  badgeColor = "#03193F",
  badgeTextColor = "#ffffff",
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
          // 태블릿(세로가 긴 iPad Pro 등): 콘텐츠를 이미지 하단 가까이
          [theme.breakpoints.up("tablet")]: {
            bottom: "6%",
            left: "8%",
          },
          // 데스크탑: 기존 위치 유지
          [theme.breakpoints.up("desktop")]: {
            bottom: "16%",
            left: "5%",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            gap: 1,
            flexDirection: "column",
            [theme.breakpoints.up("desktop")]: {
              gap: 3,
            },
          })}
        >
          <Box sx={{ width: "fit-content", backgroundColor: badgeColor, px: 2 }}>
            <Typography
              sx={{
                color: badgeTextColor,
                fontSize: "18px",
                fontFamily: FONTS.freesentation.semiBold,
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
              color: captionColor,
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: FONTS.freesentation.semiBold,
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
              // 태블릿부터 이미지 위 오버레이로 표시(데스크탑과 동일 위치)
              [theme.breakpoints.up("tablet")]: {
                display: "block",
                fontSize: "18px",
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
