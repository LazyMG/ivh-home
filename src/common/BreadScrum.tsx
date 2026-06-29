import { Box, Typography, Button } from "@mui/material";
import { styled, type SxProps, type Theme } from "@mui/material/styles";
import breadcrumbs from "../data/common/breadscrum.json";
import { useLocalizedNavigate } from "../i18n/useLocalizedNavigate";
import { useBreakpoint } from "../hooks/useBreakpoint";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface BreadcrumbItem {
  title: string;
  url?: string;
}

interface BreadScrumProps {
  pageKey: string;
  /** 페이지마다 위치/여백이 다를 수 있어 외부에서 스타일을 덮어쓸 수 있도록 함 */
  sx?: SxProps<Theme>;
  /** 텍스트·화살표 색상 (기본 #737373). 어두운 배경 위에선 #ffffff 등으로 지정 */
  color?: string;
}

const BreadScrum = ({ pageKey, sx, color = "#737373" }: BreadScrumProps) => {
  const navigate = useLocalizedNavigate();
  const { isMobile } = useBreakpoint();

  const pageData = breadcrumbs.pages[pageKey as keyof typeof breadcrumbs.pages];

  if (!pageData) return null;

  // 템플릿 경로들 + 현재 페이지를 합쳐 전체 경로 생성
  const breadcrumbPath: BreadcrumbItem[] = [
    ...(pageData.extends ?? []).flatMap(
      (key) =>
        (breadcrumbs.templates[
          key as keyof typeof breadcrumbs.templates
        ] as BreadcrumbItem[]) ?? [],
    ),
    ...(pageData.current ? [pageData.current] : []),
  ];

  return (
    <Box
      component="nav"
      aria-label="breadcrumb"
      sx={[
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {breadcrumbPath.map((item, index) => {
        const isLast = index === breadcrumbPath.length - 1;
        return (
          <Box
            key={`${item.title}-${index}`}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <StyledButton
              onClick={() => item.url && navigate(item.url)}
              disableRipple={!item.url}
              aria-current={isLast ? "page" : undefined}
              $clickable={!!item.url}
              $isLast={isLast}
              $color={color}
            >
              <Typography
                sx={{
                  mr: isLast ? 0 : "10px",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  fontFamily: "Galderglynn-Titling-Book",
                }}
              >
                {item.title}
              </Typography>
            </StyledButton>
            {!isLast && <ArrowIcon isMobile={isMobile} color={color} />}
          </Box>
        );
      })}
    </Box>
  );
};

export default BreadScrum;

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "$isLast" && prop !== "$clickable" && prop !== "$color",
})<{ $isLast?: boolean; $clickable?: boolean; $color?: string }>(
  ({ $isLast = false, $clickable = true, $color = "#737373" }) => ({
    textTransform: "none",
    color: $color,
    padding: 0,
    minWidth: 0,
    cursor: $clickable ? "pointer" : "default",
    fontFamily: $isLast ? "Freesentation-7-Bold" : "Freesentation-5-Medium",
    "&:hover": {
      backgroundColor: "transparent",
    },
  }),
);

const ArrowIcon = ({
  isMobile,
  color = "#737373",
}: {
  isMobile: boolean;
  color?: string;
}) => {
  return (
    <Box
      component="span"
      sx={(theme) => ({
        display: "inline-flex",
        width: isMobile ? 8 : 16,
        height: isMobile ? 8 : 16,
        color,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Freesentation-5-Medium",
        verticalAlign: "middle",
        mr: isMobile ? "5px" : "10px",
        fontSize: isMobile ? 14 : 16,
        [theme.breakpoints.up("tablet")]: {
          fontSize: 24,
        },
      })}
    >
      <KeyboardArrowRightIcon fontSize="inherit" />
    </Box>
  );
};
