import { ListItem } from "@mui/material";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import { FONTS } from "../../theme/theme";

const MenuListItem = ({ menu, path }: { menu: string; path: string }) => {
  const navigate = useLocalizedNavigate();

  return (
    <ListItem
      sx={{
        fontSize: {
          lg: "1.4rem",
          md: "1.2rem",
        },
        fontWeight: "700",
        mb: "4.5rem",
        fontFamily: FONTS.freesentation.bold,
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
