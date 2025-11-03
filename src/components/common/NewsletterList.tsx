import { Box, Typography } from "@mui/material";

export interface NewsletterItem {
  title: string;
  content: string;
  img_url: string;
  link_url: string;
}

interface NewsletterListProps {
  items: NewsletterItem[];
}

const NewsletterList = ({ items }: NewsletterListProps) => {
  return (
    <Box
      sx={(theme) => ({
        ...theme.customStyles.newsletterListContainer,
      })}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          component="a"
          href={item.link_url}
          target="_blank"
          rel="noopener noreferrer"
          sx={(theme) => ({
            ...theme.customStyles.newsletterItem,
          })}
        >
          {/* 이미지 영역 */}
          <Box
            component="img"
            src={item.img_url}
            alt={item.title}
            sx={(theme) => ({
              ...theme.customStyles.newsletterItemImage,
            })}
          />

          {/* 텍스트 영역 */}
          <Box
            sx={(theme) => ({
              ...theme.customStyles.newsletterItemContent,
            })}
          >
            <Typography
              variant="newsletterItemTitleFont"
              component="h3"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="newsletterItemContentFont"
              component="p"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.content}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default NewsletterList;
