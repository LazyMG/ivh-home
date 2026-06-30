import resource from "../../../data/product/modelon/vehicle-dynamics-library.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VehicleDynamicsLibrary = () => {
  const { t } = useTranslation("product/modelon/vehicle" as never);
  const td = (key: string): string => t(key as never);
  const introTexts = t("vehicle_introduction" as never, {
    returnObjects: true,
  }) as string[];
  const introduction = introTexts.map((text, i) => {
    const resIntro = resource.vehicle_introduction?.[i];
    return {
      text,
      ...(resIntro?.imgObj ? { imgObj: resIntro.imgObj } : {}),
    };
  });
  const features = resource.vehicle_features.map((feat, index, arr) => {
    const imgTexts = t(`vehicle_features.${feat.id}.imgTexts` as never, {
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
        title: td(`vehicle_features.${feat.id}.title`),
        text: td(`vehicle_features.${feat.id}.text`),
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
        title={td("vehicle_title")}
        subTitle={td("vehicle_subTitle")}
        introduction={introduction}
        pageKey={resource.vehicle_pageKey}
        features={features}
        name={td("vehicle_name")}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};
export default VehicleDynamicsLibrary;
