import { Box, Typography, Button } from "@mui/material";
import breadcrumbs from "../data/common/breadscrum.json";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface BreadcrumbItem {
  title: string;
  url: string;
}

interface BreadScrumProps {
  pageKey: string;
}

const BreadScrum = ({ pageKey }: BreadScrumProps) => {
  const navigate = useNavigate();
  const { isMobile } = useBreakpoint();

  const pageData = breadcrumbs.pages[pageKey as keyof typeof breadcrumbs.pages];

  if (!pageData) return null;

  // 템플릿들을 합쳐서 전체 경로 생성
  const breadcrumbPath: BreadcrumbItem[] = [];

  if (pageData.extends) {
    pageData.extends.forEach((templateKey: string) => {
      const template =
        breadcrumbs.templates[
          templateKey as keyof typeof breadcrumbs.templates
        ];
      if (template) {
        breadcrumbPath.push(...(template as BreadcrumbItem[]));
      }
    });
  }

  // 현재 페이지 추가
  if (pageData.current) {
    breadcrumbPath.push(pageData.current);
  }

  return (
    <Box
      component="nav"
      aria-label="breadcrumb"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "flex-start" : "flex-end",
        mb: isMobile ? 0 : 2,
        flexWrap: "wrap",
      }}
    >
      {breadcrumbPath.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
          <StyledButton
            onClick={() => navigate(item.url)}
            $isLast={index === breadcrumbPath.length - 1}
          >
            <Typography
              variant="breadScrumFont"
              sx={{
                mr: index === breadcrumbPath.length - 1 ? 0 : "10px",
              }}
            >
              {item.title}
            </Typography>
          </StyledButton>
          {index < breadcrumbPath.length - 1 && (
            <ArrowIcon isMobile={isMobile} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default BreadScrum;

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "$isLast",
})<{ $isLast?: boolean }>(({ $isLast = false }) => ({
  textTransform: "none",
  // color: $isLast ? "#333" : "#717171", // 마지막 항목은 더 진한 색상
  color: "#737373",
  padding: 0,
  minWidth: 0,
  // fontWeight: $isLast ? 600 : 400, // 마지막 항목은 더 굵게
  fontFamily: $isLast ? "Freesentation-7-Bold" : "Freesentation-5-Medium",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const ArrowIcon = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Box
      component="span"
      sx={(theme) => ({
        display: "inline-flex",
        width: isMobile ? 8 : 16,
        height: isMobile ? 8 : 16,
        color: "#737373",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Freesentation-5-Medium",
        verticalAlign: "middle",
        mr: isMobile ? "5px" : "10px",
        fontSize: isMobile ? 10 : 16,
        [theme.breakpoints.up("tablet")]: {
          fontSize: 24,
        },
      })}
    >
      {/* <KeyboardArrowRightIcon fontSize="inherit" /> */}
      {">"}
    </Box>
  );
};
