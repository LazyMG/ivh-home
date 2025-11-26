import { Box, Typography, Divider, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import newsLogo from "/images/home/newsletter_ivh_logo.png";
import linkedinLogo from "/images/home/newsletter_linkedin_logo.png";
import { useState, useEffect } from "react";
import { newsService } from "../../service/newsService";
import dayjs from "dayjs";

export interface NewsletterItem {
  title: string;
  content: string;
  link_url: string;
  date: string;
}

const NewsletterList = () => {
  // 상위 4개만 표시
  const [newsletterItems, setNewsletterItems] = useState<NewsletterItem[]>([]);

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

  return (
    <Box
      sx={(theme) => ({
        ...theme.customStyles.newsletterListContainer,
      })}
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
          <img
            src={newsLogo}
            alt="IVH Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* 링크드인 아이콘 */}
        <Box
          component="a"
          href="https://kr.linkedin.com/company/ivhkr?trk=public_post_feed-actor-image"
          target="_blank"
          rel="noopener noreferrer"
          sx={(theme) => ({
            ...theme.customStyles.newsletterLinkedinIcon,
          })}
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>

      {/* 구분선 */}
      <Divider
        sx={{
          borderColor: "#ffffff",
        }}
      />

      {/* 뉴스레터 아이템 목록 */}
      {newsletterItems.map((item, index) => (
        <Box key={index}>
          {/* 제목 (2줄만 표시) */}
          <Typography
            variant="newsletterItemTitleFont"
            component="h3"
            sx={(theme) => ({
              ...theme.customStyles.newsletterContentContainer,
            })}
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
              sx={(theme) => ({
                ...theme.customStyles.newsletterDateFont,
              })}
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
                ...theme.customStyles.newsletterDetailButton,
              })}
              endIcon={<PlayArrowIcon />}
            >
              자세히 보기
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default NewsletterList;
