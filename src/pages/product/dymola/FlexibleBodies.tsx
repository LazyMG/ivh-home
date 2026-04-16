import resource from "../../../data/product/dymola/flexible-bodies.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LangToggle from "../../../common/LangToggle";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const FlexibleBodies = () => {
  const { t } = useTranslation("product/dymola/flexible" as never);
  const introTexts = t("introduction" as never, { returnObjects: true }) as string[];
  const introduction = introTexts.map((text) => ({ text }));

  return (
    <>
      <SEO
        title={t("seo.title" as never)}
        description={t("seo.description" as never)}
        keywords={t("seo.keywords" as never)}
        ogImage={resource.seo?.ogImage}
      />
      <LangToggle />
      <LibraryPageTemplate
        title={t("title" as never)}
        subTitle={t("subTitle" as never)}
        introduction={introduction}
        pageKey={resource.pageKey}
        name={t("name" as never)}
      />
    </>
  );
};

export default FlexibleBodies;
