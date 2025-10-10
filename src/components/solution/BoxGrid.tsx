import { ImageList, ImageListItem } from "@mui/material";
import BoxSection from "./BoxSection";

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

interface BoxGridProps {
  contents: {
    col: number;
    currentRow: number;
    subtitle: string;
    text: Title[];
    listSx: {
      [key: string]: string | number | undefined;
    };
    img: string[];
    listImgSx: {
      [key: string]: string | number | undefined;
    };
    imgSx: {
      [key: string]:
        | string
        | number
        | { [key: string]: string | number | undefined };
    };
  }[];
  total: number;
  height: string;
}

const BoxGrid = ({ contents, total, height }: BoxGridProps) => {
  return (
    <ImageList variant="quilted" cols={total} gap={16}>
      {contents.map((content, idx) => {
        const col = (total / content.currentRow) * content.col;
        return (
          <ImageListItem cols={col} key={idx}>
            <BoxSection
              color="#92b843"
              height={height}
              listData={content["text"]}
              title={content["subtitle"]}
              listSx={content["listSx"]}
              img={content["img"]}
              listImgSx={content["listImgSx"]}
              imgSx={content["imgSx"]}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default BoxGrid;
