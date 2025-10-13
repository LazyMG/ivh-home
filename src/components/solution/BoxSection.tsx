import { Box, List, Typography, type SxProps } from "@mui/material";
import RecursiveList, { type Title } from "./RecursiveList";

interface BoxSectionProps {
  subtitle: string;
  text: Title[];
  listSx: SxProps;
  listImgSx: SxProps;
  imgSx?: SxProps;
  img?: string[];
  color: string;
  height?: string;
}

{
  /** 색상, 텍스트 내용, 소제목, 확장하는 박스인지 여부, 이미지, 높이 */
}
const BoxSection = ({
  subtitle,
  text,
  listSx,
  listImgSx,
  imgSx,
  img,
  color,
  height = "inherit",
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
      <Box
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
          • {subtitle}
        </Typography>
        {/** 리스트와 이미지 박스 */}
        <Box sx={listImgSx}>
          <List sx={listSx}>
            {text.map((data, idx) => (
              <RecursiveList
                data={data}
                key={idx}
                listHeader={data.listHeader}
              />
            ))}
          </List>
          {img && imgSx && (
            <Box sx={imgSx}>
              {img.map((i) => (
                <img
                  src={i}
                  key={i}
                  style={{
                    height: "200px", // 수정 필요
                    width: "fit-content",
                    maxWidth: "100%",
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BoxSection;
