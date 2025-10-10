import { Box, List, ListItem, Typography } from "@mui/material";
import ListText from "./ListText";
import type { SxProps } from "@mui/material/styles";

type Text = {
  id: number;
  type: string;
  inner: string;
};

type Title = {
  id: number;
  type: string;
  inner: string;
  children: Array<Title | Text>;
};

const RecursiveComp = ({ data }: { data: Title | Text }) => {
  return (
    <Box>
      <ListItem sx={{ p: 0, gap: 1 }}>
        <ListText text={data.inner} />
      </ListItem>
      {data.type === "title" &&
        (data as Title).children.length > 0 &&
        (data as Title).children.map((v) => {
          return <RecursiveComp data={v} key={v.id} />;
        })}
    </Box>
  );
};

interface BoxSectionProps {
  color: string;
  height?: string;
  listData: Title[];
  title: string;
  img: string[];
  listSx: SxProps;
  listImgSx: SxProps;
  imgSx: SxProps;
}

{
  /** 색상, 텍스트 내용, 소제목, 확장하는 박스인지 여부, 이미지, 높이 */
}
const BoxSection = ({
  color,
  listData,
  title,
  img,
  height = "inherit",
  listSx,
  listImgSx,
  imgSx,
}: BoxSectionProps) => {
  return (
    <Box
      sx={{
        border: `2px solid ${color}`,
        borderRadius: "16px",
        boxSizing: "border-box", // reset css
        p: 4,
        display: "flex",
        justifyContent: "space-between",
        height,
      }}
    >
      <Box // display:flex인 박스 컴포넌트 따로 만들기
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "100%",
        }}
      >
        {/** 소제목 */}
        <Typography
          sx={{
            fontFamily: "Freesentation-7-Bold",
            fontWeight: "700",
            fontSize: "20px",
            color,
          }}
        >
          • {title}
        </Typography>
        {/** 리스트와 이미지 박스 */}
        <Box sx={listImgSx}>
          <List sx={listSx}>
            {listData.map((data, idx) => (
              <RecursiveComp data={data} key={idx} />
            ))}
          </List>
          <Box sx={imgSx}>
            {img.map((i) => {
              return i ? (
                <img
                  src={i}
                  style={{
                    height: "200px", // 수정 필요
                    width: "fit-content",
                    maxWidth: "100%",
                  }}
                />
              ) : null;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxSection;
