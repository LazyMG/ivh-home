import { List } from "@mui/material";
import MenuListItem from "./MenuListItem";

const MenuList = () => {
  return (
    <List
      sx={{
        color: "white",
        listStyle: "none",
        p: {
          lg: "0 3rem",
          xs: "0 2rem",
        },
        m: "0",
        mt: "1rem",
      }}
    >
      <MenuListItem menu="PRODUCT" />
      <MenuListItem menu="SOLUTION" />
      <MenuListItem menu="SERVICE" />
      <MenuListItem menu="COMPANY" />
    </List>
  );
};

export default MenuList;
