import { Box, Divider, Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

interface MainProductCardProps {
  category?: string; // 상단 헤더 (예: HARDWARE)
  image: string;
  title?: string; // 강조 타이틀 (예: iMOVA)
  subtitle?: string; // 보조 타이틀 (예: SERIES)
  description?: string;
  onClick?: () => void;
}

// 메인 제품 소개 카드
// - 모바일: 헤더 + 이미지 + 텍스트가 하나의 라운드 카드(구분선 없음, 화살표 없음)
// - 데스크탑: 헤더/이미지 블록 + 화살표 버튼 + 하단 타이틀/설명(풀폭 구분선)
const MainProductCard = ({
  category = "HARDWARE",
  image,
  title,
  subtitle = "SERIES",
  description = "iMOVA 시리즈는 스마트 제조 환경을 실현하기 위해 개발된 고중량 자율주행 로봇 플랫폼입니다.",
  onClick,
}: MainProductCardProps) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        // 모바일: 전체를 하나의 라운드 카드로 (테두리 + 상단 헤더 라운드 클리핑, 그림자 없음)
        border: "1px solid #03193F",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.up("tablet")]: {
          // 데스크탑: 카드 테두리 없이 헤더/이미지 + 하단 텍스트 분리, 화살표가 모서리 밖으로 걸침
          border: "none",
          borderRadius: 0,
          overflow: "visible",
          gap: 6,
        },
      })}
    >
      {/* 카드 프레임 (데스크탑에서 버튼이 모서리 밖으로 걸칠 수 있도록) */}
      <Box sx={{ position: "relative" }}>
        {/* 헤더 + 이미지 블록
            모바일: 상단 모서리를 카드와 같은 라운드로 맞춰 모서리 슬리버(삐져나옴) 방지
            데스크탑: 우측 상단만 라운드 */}
        <Box
          sx={(theme) => ({
            borderRadius: "20px 20px 0 0",
            overflow: "hidden",
            [theme.breakpoints.up("tablet")]: {
              borderRadius: "0 24px 0 0",
            },
          })}
        >
          {/* 헤더 */}
          <Box
            sx={(theme) => ({
              backgroundColor: "#03193F",
              px: 3,
              py: 1,
              [theme.breakpoints.up("desktop")]: { px: 5 },
            })}
          >
            <Typography
              sx={(theme) => ({
                color: "#FFFFFF",
                fontFamily: FONTS.galderglynn.book,
                fontSize: "16px",
                letterSpacing: "0.25em",
                [theme.breakpoints.up("desktop")]: {
                  fontSize: "24px",
                },
              })}
            >
              {category}
            </Typography>
          </Box>

          {/* 본문 (제품 이미지) - 카드 폭 가득 */}
          <Box
            component="img"
            src={image}
            alt={description}
            sx={{ width: "100%", display: "block" }}
          />
        </Box>

        {/* 화살표 버튼 - 우하단 모서리에 걸침 (모바일은 숨김, 상세 디자인 추후) */}
        <Box
          component="button"
          onClick={onClick}
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.up("tablet")]: { display: "flex" },
            position: "absolute",
            right: 0,
            bottom: 0,
            transform: "translate(40%, 40%)", // 모서리 밖으로 더 이동
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#03193F",
            border: "14px solid #FFFFFF", // 이미지와 분리되는 흰 여백(링)
            backgroundClip: "padding-box", // 테두리(흰 여백) 안쪽만 남색
            color: "#FFFFFF",
            fontSize: 28,
            cursor: "pointer",
            // 표시 여부는 위 브레이크포인트에서 제어 (모바일 none / tablet+ flex)
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s",
            "&:hover": { transform: "translate(40%, 40%) scale(1.05)" },
          })}
        >
          →
        </Box>
      </Box>

      {/* 하단 타이틀 + 설명
          모바일: 카드 내부 패딩, 구분선 없음 / 데스크탑: 풀폭 구분선 + 텍스트만 들여쓰기 */}
      <Box
        sx={(theme) => ({
          px: 3,
          py: 3,
          [theme.breakpoints.up("desktop")]: { p: 0 },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "baseline",
            gap: 1,
            [theme.breakpoints.up("tablet")]: { pl: 3 },
          })}
        >
          <Box
            component="img"
            src={title}
            // 폭 고정이 아니라 높이 고정 → 로고 비율이 달라도 타이틀 행 높이가 같아
            // 아래 구분선이 카드마다 어긋나지 않음(폭은 비율대로 자동)
            sx={(theme) => ({
              height: "24px",
              width: "auto",
              [theme.breakpoints.up("desktop")]: { height: "30px" },
            })}
          />
          <Typography
            sx={(theme) => ({
              fontFamily: FONTS.galderglynn.regular,
              fontSize: "16px",
              color: "#737373",
              [theme.breakpoints.up("desktop")]: {
                fontFamily: FONTS.galderglynn.bold,
                fontSize: "24px",
              },
            })}
          >
            {subtitle}
          </Typography>
        </Box>
        {/* 구분선은 데스크탑 전용 */}
        <Divider
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.up("tablet")]: {
              display: "block",
              my: 1,
              borderColor: "#D0D0D0",
            },
          })}
        />
        <Typography
          sx={(theme) => ({
            mt: 2,
            fontFamily: FONTS.freesentation.medium,
            fontSize: "16px",
            color: "#424242",
            [theme.breakpoints.up("tablet")]: { pl: 3, mt: 0 },
          })}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainProductCard;
