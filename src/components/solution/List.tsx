import { Box, List as MuiList, ListItem, Typography } from "@mui/material";
import type { ListProps } from "../../types/solution";

const List = (listProps: ListProps) => {
  const { title, contents } = listProps;
  return (
    <Box sx={{ mt: 8 }}>
      {/* 제목 */}
      <Typography variant="solutionTextTitleFont">{title}</Typography>

      {/* Q&A 목록 */}
      <MuiList sx={{ width: "100%" }}>
        {contents.map((content, index) => (
          <ListItem
            key={index}
            sx={{
              display: "block", // 기본적으로 flex이기 때문에 block으로 변경
              py: 1.5, // 기본 패딩 제거하고 커스텀
              px: 0,
            }}
          >
            <Typography
              component="p"
              variant="solutionTextFont"
              sx={{
                mb: 0.5,
              }}
            >
              {content.title}
            </Typography>
            <Typography
              component="p"
              variant="solutionTextFont"
              sx={{
                wordBreak: "keep-all",
              }}
            >
              {content.contents}
            </Typography>
          </ListItem>
        ))}
      </MuiList>
    </Box>
  );
};

export default List;
