import { Box, List } from "@mui/material";
import type { SxProps } from "@mui/material/styles";
import RecursiveList, { type Title } from "./RecursiveList";
import SubTitle from "./SubTitle";

interface ListSectionProps {
  subtitle: string;
  text: Title[];
  img?: string[];
  sx: SxProps;
}

const ListSection = ({ text, img, sx, subtitle }: ListSectionProps) => {
  return (
    <>
      <SubTitle subTitle={subtitle} />
      <List
        sx={{
          p: "0",
          display: "flex",
          flexDirection: "column",
          ...sx,
        }}
      >
        {text.map((data, idx) => (
          <RecursiveList data={data} key={idx} listHeader={data.listHeader} />
        ))}
        {img && (
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
            {img.map((i) => (
              <img src={i} />
            ))}
          </Box>
        )}
      </List>
    </>
  );
};

export default ListSection;
