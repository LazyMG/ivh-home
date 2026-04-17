import resource from "../../../data/product/dymola/battery.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const Battery = () => {
  const { t } = useTranslation("product/dymola/battery" as never);
  const td = (key: string): string => t(key as never);

  const introTexts = t("battery_introduction" as never, { returnObjects: true }) as string[];
  const introduction = introTexts.map((text) => ({ text }));

  const features = resource.battery_features.map((feat) => {
    const imgTexts = t(`battery_features.${feat.id}.imgTexts` as never, { returnObjects: true }) as string[] | string;
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
        title: td(`battery_features.${feat.id}.title`),
        text: td(`battery_features.${feat.id}.text`),
      },
      ...(feat.imageLayoutStyle ? { imageLayoutStyle: feat.imageLayoutStyle } : {}),
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
        title={td("battery_title")}
        subTitle={td("battery_subTitle")}
        introduction={introduction}
        pageKey={resource.battery_pageKey}
        features={features}
        name={td("battery_name")}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};

export default Battery;
