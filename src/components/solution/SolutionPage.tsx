import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageGroup } from "./NewSolutionSection";
import { renderTopBlock, type TopBlock } from "./renderBlocks";
import { FONTS } from "../../theme/theme";

type Closing = { heading: string; line1: string; line2: string };

interface SolutionPageProps {
  namespace: string;
}

export const SolutionPage = ({ namespace }: SolutionPageProps) => {
  const { t } = useTranslation(namespace as never);

  const pageTitle = t("pageTitle" as never, { defaultValue: "" }) as string;
  const color = t("color" as never, { defaultValue: "" }) as string;
  const image = t("image" as never, { defaultValue: "" }) as string;
  const blocks = t("blocks" as never, {
    returnObjects: true,
    defaultValue: [],
  }) as unknown as TopBlock[];
  const closing = t("closing" as never, {
    returnObjects: true,
    defaultValue: null,
  }) as unknown as Closing | null;

  return (
    <PageGroup
      title={pageTitle}
      color={color || undefined}
      image={image || undefined}
    >
      {blocks.map((b, i) => renderTopBlock(b, i))}
      {closing && (
        <Box
          sx={{
            mt: 4,
            mb: 10,
            display: "flex",
            gap: 1,
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontSize: "20px", fontFamily: FONTS.freesentation.bold }}
          >
            {closing.heading}
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontFamily: FONTS.freesentation.medium }}
          >
            {closing.line1}
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontFamily: FONTS.freesentation.bold }}
          >
            {closing.line2}
          </Typography>
        </Box>
      )}
    </PageGroup>
  );
};
