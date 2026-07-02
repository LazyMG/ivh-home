import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import { FONTS } from "../../theme/theme";

interface HumanoidHeroMobileProps {
  /** 모바일 전용 히어로 이미지 (데스크탑과 다른 에셋) */
  image: string;
  imageAlt: string;
  /** 제품 타이틀(로고) 이미지 */
  titleImage: string;
  titleImageAlt?: string;
  /** 좌측 badge 텍스트 (예: Package) */
  badge: string;
  /** 로고 아래 캡션 (이미지 위 오버레이) */
  caption: ReactNode;
  /** 이미지 아래 흰 배경 영역의 설명문 */
  description: ReactNode;
  /** description 색상·폰트 override */
  descriptionSx?: SxProps<Theme>;
}

// 이미지 가독성용 어두운 마스크: 하단으로 갈수록 진하게 → 좌하단 텍스트 대비 확보
const READABILITY_MASK =
  "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)";

/**
 * Humanoid Package 모바일 전용 히어로 (신규 디자인).
 * 이미지(어두운 마스크) 위 좌하단에 badge·로고·caption을 세로 스택으로 오버레이하고,
 * 구분선과 description은 이미지 아래로 분리한다.
 * 데스크탑은 공용 ProductHero를 그대로 사용하고, 모바일에서만 이 컴포넌트로 교체.
 */
const HumanoidHeroMobile = ({
  image,
  imageAlt,
  titleImage,
  titleImageAlt = "",
  badge,
  caption,
  description,
  descriptionSx,
}: HumanoidHeroMobileProps) => {
  return (
    <Box component="section" sx={{ width: "100%" }}>
      {/* 이미지 + 어두운 마스크 + 좌하단 오버레이(badge·로고·caption) */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt={imageAlt}
          sx={{ width: "100%", height: "auto", display: "block" }}
        />
        {/* 가독성 마스크 */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background: READABILITY_MASK,
            pointerEvents: "none",
          }}
        />
        {/* badge → 로고 → caption 세로 스택 */}
        <Box
          sx={{
            position: "absolute",
            left: "6%",
            right: "6%",
            bottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#03193F",
              px: 2,
              py: "2px",
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
          <Box
            component="img"
            src={titleImage}
            alt={titleImageAlt}
            sx={{ width: "180px", height: "auto" }}
          />
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              fontFamily: FONTS.freesentation.semiBold,
              lineHeight: 1.5,
              wordBreak: "keep-all",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
            }}
          >
            {caption}
          </Typography>
        </Box>
      </Box>

      {/* 이미지 아래: description */}
      <Box sx={{ backgroundColor: "#ffffff", px: "6%", pt: 3, pb: 2 }}>
        <Typography
          component="h1"
          sx={[
            {
              color: "#424242",
              fontSize: "16px",
              fontFamily: FONTS.freesentation.regular,
              lineHeight: 1.7,
              wordBreak: "keep-all",
              whiteSpace: "pre-line",
            },
            ...(Array.isArray(descriptionSx) ? descriptionSx : [descriptionSx]),
          ]}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default HumanoidHeroMobile;
