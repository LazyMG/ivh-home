import { Box, Typography, Divider, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect } from "react";
// import { newsService } from "../../service/newsService";
import dayjs from "dayjs";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export interface NewsletterItem {
  title: string;
  // content: string;
  link_url: string;
  date: string;
}

const DUMMY_DATA = [
  {
    id: 16,
    title:
      "iVH 강대오 대표이사, Modelica Association eFMI 프로젝트 부대표 선임",
    description: "",
    contentsUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7404689544186359809",
    tags: ["뉴스"],
    publishedAt: "2025-12-15T15:30:49.000Z",
  },
  {
    id: 15,
    title:
      "Highlights from ASAM Regional Meeting South Korea 2025 – Relive the moments!",
    description: null,
    contentsUrl:
      "https://www.linkedin.com/posts/ivhkr_asam-ivh-asamregionalmeetingsouthkorea2025-activity-7403945625924653056-BHGu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMhy2oB56RN_cDECvQ0b9Acno1kl23GWFA",
    tags: ["뉴스"],
    publishedAt: "2025-12-08T15:13:04.000Z",
  },
  {
    id: 13,
    title: "iMOVA - iVH의 첫 번째 하드웨어 혁신을 공개합니다.",
    description: null,
    contentsUrl:
      "https://www.linkedin.com/posts/ivhkr_ivh-imova-amr-activity-7400102926725148672-KgmD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMhy2oB56RN_cDECvQ0b9Acno1kl23GWFA",
    tags: ["뉴스"],
    publishedAt: "2025-12-01T17:08:33.000Z",
  },
  {
    id: 9,
    title:
      "ASAM Regional Meeting South Korea가 오는 11월 27~28일 #제주국제컨벤션센터 에서 열립니다. ",
    description: null,
    contentsUrl:
      "https://kr.linkedin.com/posts/ivhkr_%EC%A0%9C%EC%A3%BC%EA%B5%AD%EC%A0%9C%EC%BB%A8%EB%B2%A4%EC%85%98%EC%84%BC%ED%84%B0-standard-automotive-activity-7396830907292319744-lKFt",
    tags: ["행사"],
    publishedAt: "2025-11-19T15:00:55.000Z",
  },
  {
    id: 8,
    title: "HEXAGON VTD 2025.2 릴리즈 – 시뮬레이션의 새로운 기준",
    description: null,
    contentsUrl:
      "https://kr.linkedin.com/posts/ivhkr_vtd-adas-autonomousdriving-activity-7386643043233226752-DEvm",
    tags: ["뉴스"],
    publishedAt: "2025-10-15T15:00:42.000Z",
  },
  {
    id: 4,
    title: "산업부, 에이로봇·아이브이에이치 등 산업융합 규제샌드박스 40건 승인",
    description: null,
    contentsUrl: "https://www.ajunews.com/view/20250925140628259",
    tags: ["뉴스"],
    publishedAt: "2025-09-24T15:00:41.000Z",
  },
  {
    id: 3,
    title:
      "아이브이에이치, 한양대·헥사곤과 자율주행·스마트 모빌리티 협력 MOU 체결… 100억원 상당 소프트웨어 기부",
    description: null,
    contentsUrl: "https://www.senews.kr/29217",
    tags: ["뉴스"],
    publishedAt: "2025-07-30T15:00:40.000Z",
  },
];

const NewsletterList = () => {
  // 상위 4개만 표시
  const [newsletterItems, setNewsletterItems] = useState<NewsletterItem[]>([]);
  const { isDesktop } = useBreakpoint();

  const shouldHideNewsletter = () => {
    try {
      const storedValue = localStorage.getItem("isHide");
      if (!storedValue) return false;

      const storedHideInfo = JSON.parse(storedValue);
      const today = dayjs(new Date().toString()).format("YYYY.MM.DD");

      // 저장된 날짜와 오늘 날짜가 같으면 숨김
      if (storedHideInfo.date === today) {
        return true;
      }

      // 날짜가 다르면 localStorage 삭제하고 표시
      localStorage.removeItem("isHide");
      return false;
    } catch {
      // 파싱 에러 발생 시 localStorage 삭제
      localStorage.removeItem("isHide");
      return false;
    }
  };

  const [isHide, setIsHide] = useState(shouldHideNewsletter());

  /**
   * 뉴스레터 아이템 목록 조회
   */
  // const fetchNewsletterItems = async () => {
  //   const response = await newsService.getNews();
  //   const items = response.map((item) => ({
  //     title: item.title,
  //     content: item.content,
  //     link_url: item.contentsUrl,
  //     date: dayjs(item.publishedAt).format("YYYY.MM.DD"),
  //   }));
  //   setNewsletterItems(items.slice(0, 4));
  // };

  const items = DUMMY_DATA.map((item) => ({
    title: item.title,
    link_url: item.contentsUrl,
    date: dayjs(item.publishedAt).format("YYYY.MM.DD"),
  }));

  useEffect(() => {
    // fetchNewsletterItems();
    setNewsletterItems(items);
  }, []);

  // const hideAllDay = () => {
  //   const hideInfo = {
  //     date: dayjs(new Date().toString()).format("YYYY.MM.DD"),
  //   };
  //   localStorage.setItem("isHide", JSON.stringify(hideInfo));
  //   setIsHide(true);
  // };

  if (isHide) {
    return null;
  }

  return (
    <Box
      sx={{
        background:
          "linear-gradient(white, white) padding-box, linear-gradient(to right, #339070, #1755C2) border-box",
        border: "2px solid transparent",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        p: 3,
        borderRadius: 2,
        boxShadow: "4px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      {/* 최상단: 로고와 링크드인 아이콘 */}
      <Box
        sx={(theme) => ({
          ...theme.customStyles.newsletterLogoContainer,
        })}
      >
        {/* 로고 */}
        <Box
          sx={(theme) => ({
            ...theme.customStyles.newsletterIVHLogo,
          })}
        >
          <Typography
            sx={{
              fontStyle: "italic",
              fontSize: "20px",
              color: "#000000",
              fontFamily: "Freesentation-7-Bold",
            }}
          >
            iVH NEWs
          </Typography>
        </Box>
        <Button
          component="a"
          href="https://kr.linkedin.com/company/ivhkr?trk=public_post_feed-actor-image"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={(theme) => ({
            ...theme.customStyles.newsletterRedirectButton,
          })}
          endIcon={<PlayArrowIcon />}
        >
          뉴스 모두 보기
        </Button>
      </Box>

      {/* 구분선 */}
      <Divider
        sx={{
          borderColor: "#000000",
        }}
      />
      {/* 뉴스레터 아이템 목록 */}
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 3,
          my: 3,
          maxHeight: "160px",
          overflowY: "scroll",
          [theme.breakpoints.up("desktop")]: {
            maxHeight: "100%",
            overflowY: "hidden",
          },
        })}
      >
        {newsletterItems.map((item, index) => (
          <Box key={index}>
            {/* 제목 (2줄만 표시) */}
            <Typography
              variant="newsletterItemTitleFont"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                mb: 1,
                color: "#000000",
              }}
            >
              {item.title}
            </Typography>

            {/* 하단: 날짜와 자세히 보기 버튼 */}
            <Box
              sx={(theme) => ({
                ...theme.customStyles.newsletterDateDetailContainer,
              })}
            >
              {/* 좌측: 날짜 */}
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#737373",
                  fontStyle: "italic",
                }}
              >
                {item.date}
              </Typography>

              {/* 우측: 자세히 보기 버튼 */}
              <Button
                component="a"
                href={item.link_url}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={(theme) => ({
                  backgroundColor: "#1755C2",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontFamily: "Freesentation-7-Bold",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(23, 86, 194, 0.9)",

                    [theme.breakpoints.up("desktop")]: {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  },
                  "& .MuiButton-endIcon": {
                    marginLeft: "4px", // 기본 8px → 4px로 변경
                  },
                  [theme.breakpoints.up("desktop")]: {
                    backgroundColor: "#000000",
                  },
                })}
                endIcon={<PlayArrowIcon />}
              >
                자세히 보기
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {isDesktop && (
        <Box sx={{ display: "flex", justifyContent: "", gap: 1 }}>
          {/* <Button
            size="small"
            variant="outlined"
            sx={{
              borderColor: "#ffffff",
              color: "#ffffff",
              fontFamily: "Freesentation-5-Medium",
              fontSize: "12px",
              "&:hover": {
                borderColor: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            onClick={hideAllDay}
          >
            하루 닫기
          </Button> */}
          <Button
            size="small"
            variant="outlined"
            sx={{
              borderColor: "#1755C2",
              color: "#1755C2",
              fontFamily: "Freesentation-7-Bold",
              fontSize: "14px",
            }}
            onClick={() => setIsHide(true)}
          >
            닫기
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NewsletterList;
