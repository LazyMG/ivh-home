import resource from "../../../data/product/dymola/til.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LangToggle from "../../../common/LangToggle";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const TIL = () => {
  const { t } = useTranslation("product/dymola/til" as never);
  const td = (key: string): string => t(key as never);

  const introTexts = t("til_introduction" as never, { returnObjects: true }) as string[];
  const introImgTexts = t("til_introduction_imgTexts" as never, { returnObjects: true }) as Record<string, string[]> | string;
  const introImgTextsMap = typeof introImgTexts === "object" ? introImgTexts : {};
  const introduction = introTexts.map((text, i) => {
    const resIntro = resource.til_introduction?.[i];
    const imgTextsArr = introImgTextsMap[`intro-${i}`] ?? [];
    return {
      text,
      ...(resIntro?.imgObj
        ? {
            imgObj: resIntro.imgObj.map((img, j) => ({
              ...img,
              ...(imgTextsArr[j] ? { imgText: imgTextsArr[j] } : {}),
            })),
          }
        : {}),
    };
  });

  const features = resource.til_features.map((feat) => {
    const imgTexts = t(`til_features.${feat.id}.imgTexts` as never, { returnObjects: true }) as string[] | string;
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
        title: td(`til_features.${feat.id}.title`),
        text: td(`til_features.${feat.id}.text`),
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
      <LangToggle />
      <LibraryPageTemplate
        title={td("til_title")}
        subTitle={td("til_subTitle")}
        introduction={introduction}
        pageKey={resource.til_pageKey}
        features={features}
        name={td("til_name")}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};

export default TIL;
