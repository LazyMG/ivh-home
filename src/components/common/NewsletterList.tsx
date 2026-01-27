import { Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect } from "react";
import { newsService } from "../../service/newsService";
import dayjs from "dayjs";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export interface NewsletterItem {
  title: string;
  content: string;
  link_url: string;
  date: string;
}

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
  const fetchNewsletterItems = async () => {
    const response = await newsService.getNews();
    const items = response.map((item) => ({
      title: item.title,
      content: item.content,
      link_url: item.contentsUrl,
      date: dayjs(item.publishedAt).format("YYYY.MM.DD"),
    }));
    setNewsletterItems(items.slice(0, 4));
  };

  useEffect(() => {
    fetchNewsletterItems();
  }, []);

  // const hideAllDay = () => {
  //   const hideInfo = {
  //     date: dayjs(new Date().toString()).format("YYYY.MM.DD"),
  //   };
  //   localStorage.setItem("isHide", JSON.stringify(hideInfo));
  //   setIsHide(true);
  // };

  // if (isHide) {
  //   return null;
  // }

  return (
    <Box
      sx={{
        background:
          "linear-gradient(white, white) padding-box, linear-gradient(to right, #339070, #1755C2) border-box",
        border: "2px solid transparent",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minWidth: "380px",
        minHeight: "68px",
        p: 3,
        borderRadius: "16px",
        boxShadow: "4px 4px 4px 0 rgba(0,0,0,0.25)",
        position: "relative",
      }}
    >
      {/* 최상단: 로고와 링크드인 아이콘 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "calc(100% + 4px)",
          position: "absolute",
          top: -2,
          left: -2,
          right: 0,
          boxSizing: "border-box",
          py: 2,
          px: 4,
          background: "linear-gradient(to right, #31B386 5%, #266DEA 100%)",
          borderRadius: "14px",
          boxShadow:
            "inset -4px -4px 2px 0px rgba(0,0,0,0.25), inset 4px 4px 2px 0px rgba(255,255,255,0.4)",
        }}
      >
        {/* 로고 */}
        <Box sx={{ height: "36px" }}>
          <Typography
            sx={{
              fontStyle: "italic",
              fontSize: "24px",
              color: "#fff",
              fontFamily: "Freesentation-7-Bold",
            }}
          >
            iVH NEWs
          </Typography>
        </Box>
        {isHide ? (
          <Button
            sx={{
              backgroundColor: "transparent",
              color: "#fff",
              fontSize: "16px",
              fontFamily: "Freesentation-7-Bold",
              padding: "0px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButton-endIcon": {
                marginLeft: "0px",
                transform: "rotateZ(90deg)",
              },
            }}
            onClick={() => setIsHide(false)}
            endIcon={<PlayArrowIcon />}
          >
            iVH의 최신 소식 보기
          </Button>
        ) : (
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
        )}
      </Box>

      {/* 뉴스레터 아이템 목록 */}
      {!isHide && (
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
              mt: 8,
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
      )}

      {isDesktop && !isHide && (
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
