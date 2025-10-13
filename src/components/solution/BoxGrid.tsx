import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BoxSection from "./BoxSection";
import type { Title } from "./RecursiveList";

interface BoxGridProps {
  contents: {
    col: number;
    currentRow: number;
    subtitle: string;
    text: Title[];
    listSx: {
      [key: string]: string | number | undefined;
    };
    img?: string[];
    listImgSx: {
      [key: string]: string | number | undefined;
    };
    imgSx?: {
      [key: string]: string | number | undefined | { [key: string]: string };
    };
  }[];
  total: number;
  height: string;
}

const BoxGrid = ({ contents, total, height }: BoxGridProps) => {
  const theme = useTheme();
  const matchLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <ImageList variant="quilted" cols={matchLg ? 1 : total} gap={16}>
      {contents.map((content, idx) => {
        const col = (total / content.currentRow) * content.col;
        return (
          <ImageListItem cols={matchLg ? 1 : col} key={idx}>
            <BoxSection color="#92b843" height={height} {...content} />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default BoxGrid;
