import resource from "../../../data/product/ptv/vissim.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const Vissim = () => {
  const { t } = useTranslation("product/ptv/vissim" as never);
  const td = (key: string): string => t(key as never);

  const introTexts = t("vissim_introduction" as never, {
    returnObjects: true,
  }) as string[];
  const introduction = introTexts.map((text) => ({ text }));

  const features = resource.vissim_features.map((feat, index, arr) => {
    const imgTexts = t(`vissim_features.${feat.id}.imgTexts` as never, {
      returnObjects: true,
    }) as string[] | string;
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
        title: td(`vissim_features.${feat.id}.title`),
        text: td(`vissim_features.${feat.id}.text`),
      },
      showDivider: index !== arr.length - 1,
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
      <LibraryPageTemplate
        title={td("vissim_title")}
        subTitle={td("vissim_subTitle")}
        introduction={introduction}
        pageKey={resource.vissim_pageKey}
        features={features}
        name={td("vissim_name")}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};

export default Vissim;
