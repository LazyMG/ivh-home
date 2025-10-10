import { Box, List, ListItem } from "@mui/material";
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

interface ListSectionProps {
  listData: Title[];
  img: string[];
  sx: SxProps;
}

const ListSection = ({ listData, img, sx }: ListSectionProps) => {
  return (
    <List sx={sx}>
      {listData.map((data, idx) => (
        <RecursiveComp data={data} key={idx} />
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          gap: 2,
        }}
      >
        {img.map((i) => {
          return i ? <img src={i} /> : null;
        })}
      </Box>
    </List>
  );
};

export default ListSection;
