import resource from "../../../data/product/ptv/viswalk.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LangToggle from "../../../common/LangToggle";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const Viswalk = () => {
  const { t } = useTranslation("product/ptv/viswalk" as never);
  const td = (key: string): string => t(key as never);

  const introTexts = t("viswalk_introduction" as never, { returnObjects: true }) as string[];
  const introduction = introTexts.map((text) => ({ text }));

  const features = resource.viswalk_features.map((feat) => {
    const imgTexts = t(`viswalk_features.${feat.id}.imgTexts` as never, { returnObjects: true }) as string[] | string;
    const imgTextsArr = Array.isArray(imgTexts) ? imgTexts : [];
    return {
      ...(feat.imgObj
        ? {
            imgObj: feat.imgObj.map((img, i) => ({
              ...img,
              ...(imgTextsArr[i] ? { imgText: imgTextsArr[i] } : {}),
            })),
          }
        : {}),
      textObj: {
        col: feat.textObj.col,
        title: td(`viswalk_features.${feat.id}.title`),
        text: td(`viswalk_features.${feat.id}.text`),
      },
    };
  });

  return (
    <>
      <SEO
        title={td("seo.title")}
        description={td("seo.description")}
        keywords={td("seo.keywords")}
        ogImage={resource.seo?.ogImage}
      />
      <LangToggle />
      <LibraryPageTemplate
        title={td("viswalk_title")}
        subTitle={td("viswalk_subTitle")}
        introduction={introduction}
        pageKey={resource.viswalk_pageKey}
        features={features}
        name={td("viswalk_name")}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};

export default Viswalk;
