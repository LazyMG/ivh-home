import { Box, ListItem } from "@mui/material";
import ListText from "./ListText";

export type Text = {
  type: string;
  inner: string;
};

export type Title = {
  type: string;
  inner: string;
  listHeader: string;
  children: Array<Title | string>;
};

const RecursiveList = ({
  data,
  listHeader,
}: {
  data: Title | string;
  listHeader: string;
}) => {
  const isTitle = typeof data !== "string";
  const text = isTitle ? data.inner : data;

  return (
    <Box>
      {text && (
        <ListItem
          sx={{
            p: 0,
            gap: listHeader ? 1 : 0,
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {!isTitle && listHeader && <ListText text={listHeader} />}
          <ListText text={text} />
        </ListItem>
      )}
      {isTitle &&
        (data as Title).children.length > 0 &&
        (data as Title).children.map((v, index) => {
          return (
            <RecursiveList
              listHeader={listHeader}
              data={v}
              key={`${typeof data}-${text}-${index}`}
            />
          );
        })}
    </Box>
  );
};

export default RecursiveList;
