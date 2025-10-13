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
      <MenuListItem menu="PRODUCT" path="/product" />
      <MenuListItem menu="SOLUTION" path="/solution" />
      <MenuListItem menu="SERVICE" path="/service" />
      <MenuListItem menu="COMPANY" path="/company" />
    </List>
  );
};

export default MenuList;
