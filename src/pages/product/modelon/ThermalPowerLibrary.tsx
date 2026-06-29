import resource from "../../../data/product/modelon/thermal-power-library.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const ThermalPowerLibrary = () => {
  const { t } = useTranslation("product/modelon/thermal" as never);
  const td = (key: string): string => t(key as never);
  const introTexts = t("introduction" as never, {
    returnObjects: true,
  }) as string[];
  const introduction = introTexts.map((text, i) => {
    const resIntro = resource.introduction?.[i];
    return {
      text,
      ...(resIntro?.imgObj ? { imgObj: resIntro.imgObj } : {}),
    };
  });
  const features = resource.features.map((feat, index, arr) => {
    const imgTexts = t(`features.${feat.id}.imgTexts` as never, {
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
        title: td(`features.${feat.id}.title`),
        text: td(`features.${feat.id}.text`),
      },
      showDivider: index !== arr.length - 1,
    };
  });

  return (
    <>
      <SEO
        title={t("seo.title" as never)}
        description={t("seo.description" as never)}
        keywords={t("seo.keywords" as never)}
        ogImage={resource.seo?.ogImage}
      />
      <LibraryPageTemplate
        title={t("title" as never)}
        subTitle={t("subTitle" as never)}
        introduction={introduction}
        pageKey={resource.pageKey}
        name={t("name" as never)}
        features={features}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};

export default ThermalPowerLibrary;
