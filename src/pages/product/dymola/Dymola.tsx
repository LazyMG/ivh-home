import resource from "../../../data/product/dymola/dymola.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import ProductPageTemplate from "../../../components/product/ProductPageTemplate";

const Dymola = () => {
  const { t } = useTranslation("product/dymola" as never);
  const td = (key: string): string => t(key as never);

  const textList = t("dymola_text" as never, {
    returnObjects: true,
  }) as string[];

  const features = resource.dymola_features.map((feat) => {
    const imgTexts = t(`dymola_features.${feat.id}.imgTexts` as never, {
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
        title: td(`dymola_features.${feat.id}.title`),
        text: td(`dymola_features.${feat.id}.text`),
      },
      ...("imageLayoutStyle" in feat && feat.imageLayoutStyle
        ? { imageLayoutStyle: feat.imageLayoutStyle }
        : {}),
    };
  });

  const libraries = resource.dymola_libraries.map((lib) => ({
    imgUrl: lib.imgUrl,
    url: lib.url,
    text: td(`dymola_libraries.${lib.id}.text`),
    img_alt: td(`dymola_libraries.${lib.id}.img_alt`),
  }));

  return (
    <>
      <SEO
        title={td("seo.title")}
        description={td("seo.description")}
        keywords={td("seo.keywords")}
        ogImage={resource.seo?.ogImage}
      />
      <ProductPageTemplate
        image={resource.dymola_mainImg}
        mobileImage={resource.dymola_mobileMainImg}
        image_alt={td("dymola_mainImg_alt")}
        title={td("dymola_title")}
        subTitle={td("dymola_subTitle")}
        textList={textList}
        features={features}
        libraries={libraries}
        pageKey={resource.dymola_pageKey}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};

export default Dymola;
