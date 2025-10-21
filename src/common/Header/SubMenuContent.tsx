import { Box } from "@mui/material";
import type { MainMenuItem } from "../../types/header";
import { SubMenuTitle } from "../../style/header/title.styles";
import { SubMenuItem } from "../../style/header/item.styles";

interface SubMenuContentProps {
  item: MainMenuItem;
  isHomePage: boolean;
  navigate: (path: string) => void;
}

export const SubMenuContent = ({
  item,
  isHomePage,
  navigate,
}: SubMenuContentProps) => {
  // columns가 있는 경우 (PRODUCT & SERVICES)
  if (item?.columns) {
    return (
      <Box sx={{ display: "flex", gap: 4 }}>
        {item.columns.map((column, colIndex) => (
          <Box key={colIndex}>
            {column.title && (
              <>
                <SubMenuTitle $isHomePage={isHomePage}>
                  {column.title}
                </SubMenuTitle>
                {column.items?.map((subItem) => (
                  <SubMenuItem
                    key={subItem.name}
                    onClick={() => navigate(subItem.path)}
                    disabled={subItem.disabled}
                    $isHomePage={isHomePage}
                  >
                    {subItem.name}
                  </SubMenuItem>
                ))}
              </>
            )}
            {column.subColumns?.map((subCol) => (
              <Box key={subCol.title}>
                <SubMenuTitle $isHomePage={isHomePage}>
                  {subCol.title}
                </SubMenuTitle>
                {subCol.items?.map((subItem) => (
                  <SubMenuItem
                    key={subItem.name}
                    onClick={() => navigate(subItem.path)}
                    disabled={subItem.disabled}
                    $isHomePage={isHomePage}
                  >
                    {subItem.name}
                  </SubMenuItem>
                ))}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    );
  }

  // items만 있는 경우 (SOLUTIONS, SUPPORT, COMPANY)
  return (
    <Box>
      {item?.items?.map((subItem) => (
        <SubMenuItem
          key={subItem.name}
          onClick={() => navigate(subItem.path)}
          disabled={subItem.disabled}
          $isHomePage={isHomePage}
        >
          {subItem.name}
        </SubMenuItem>
      ))}
    </Box>
  );
};
