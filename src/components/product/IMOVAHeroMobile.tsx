import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { FONTS } from "../../theme/theme";

interface IMOVAHeroMobileProps {
  /** 모바일 전용 제품 사진 (데스크탑과 다른 에셋) */
  image: string;
  imageAlt: string;
  /** 제품 타이틀(로고) 이미지 */
  titleImage: string;
  titleImageAlt?: string;
  /** 좌측 badge 텍스트 (예: AMR) */
  badge: string;
  /** 파란 그라데이션 밴드의 캡션 */
  caption: ReactNode;
  /** 흰 배경 영역의 설명문 */
  description: ReactNode;
}

// caption 밴드 그라데이션: 좌 #005AD5 → 우 #00235F
const CAPTION_GRADIENT = "linear-gradient(90deg, #005AD5 0%, #00235F 100%)";

/**
 * IMOVA 모바일 전용 히어로 (신규 디자인).
 * 위→아래: 제품사진 / (로고 + badge) / 파란 그라데이션 caption / 흰 배경 description.
 * 데스크탑은 공용 ProductHero를 그대로 사용하고, 모바일에서만 이 컴포넌트로 교체.
 */
const IMOVAHeroMobile = ({
  image,
  imageAlt,
  titleImage,
  titleImageAlt = "",
  badge,
  caption,
  description,
}: IMOVAHeroMobileProps) => {
  return (
    <Box component="section" sx={{ width: "100%" }}>
      {/* 제품 사진 (모바일 전용, 402x254) + 로고·badge 오버레이 */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt={imageAlt}
          sx={{ width: "100%", height: "auto", display: "block" }}
        />
        {/* 로고 + badge: 이미지 위 좌하단에 겹침 */}
        <Box
          sx={{
            position: "absolute",
            left: "6%",
            bottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            component="img"
            src={titleImage}
            alt={titleImageAlt}
            sx={{ width: "180px", height: "auto" }}
          />
          <Box
            sx={{
              backgroundColor: "#03193F",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              py: "4px",
              px: 2,
            }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "18px",
                fontFamily: FONTS.freesentation.semiBold,
              }}
            >
              {badge}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* caption (파란 그라데이션 밴드) */}
      <Box sx={{ background: CAPTION_GRADIENT, px: "6%", py: 2 }}>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "18px",
            fontFamily: FONTS.freesentation.semiBold,
            lineHeight: 1.5,
            wordBreak: "keep-all",
          }}
        >
          {caption}
        </Typography>
      </Box>

      {/* description (흰 배경) */}
      <Box sx={{ backgroundColor: "#ffffff", px: "6%", py: 2 }}>
        <Typography
          sx={{
            color: "#424242",
            fontSize: "16px",
            fontFamily: FONTS.freesentation.medium,
            lineHeight: 1.7,
            wordBreak: "keep-all",
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default IMOVAHeroMobile;
