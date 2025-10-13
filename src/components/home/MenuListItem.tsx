import { ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MenuListItem = ({ menu, path }: { menu: string; path: string }) => {
  const navigate = useNavigate();

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
        cursor: "pointer",
      }}
      onClick={() => {
        navigate(path);
      }}
    >
      {menu}
    </ListItem>
  );
};

export default MenuListItem;
