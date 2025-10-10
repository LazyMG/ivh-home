import { ListItem } from "@mui/material";

const MenuListItem = ({ menu }: { menu: string }) => {
  return (
    <ListItem
      sx={{
        fontSize: {
          lg: "1.4rem",
          md: "1.2rem",
        },
        fontWeight: "700",
        mb: "4.5rem",
        fontFamily: "Presentation",
      }}
    >
      {menu}
    </ListItem>
  );
};

export default MenuListItem;
