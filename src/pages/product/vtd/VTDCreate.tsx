import resource from "../../../data/product/vtd/vtd-create.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VTDCreate = () => {
  const { t } = useTranslation("product/vtd/vtdcreate" as never);
  const td = (key: string): string => t(key as never);

  const introTexts = t("vtd_create_introduction" as never, {
    returnObjects: true,
  }) as string[];
  const introduction = introTexts.map((text, i) => {
    const resIntro = resource.vtd_create_introduction?.[i];
    return {
      text,
      ...(resIntro && "imgObj" in resIntro && resIntro.imgObj
        ? { imgObj: resIntro.imgObj }
        : {}),
    };
  });

  const features = resource.vtd_create_features.map((feat, index, arr) => ({
    ...(feat.imgObj ? { imgObj: feat.imgObj } : {}),
    textObj: {
      col: feat.textObj.col,
      title: td(`vtd_create_features.${feat.id}.title`),
      text: td(`vtd_create_features.${feat.id}.text`),
    },
    showDivider: index !== arr.length - 1,
  }));

  return (
    <>
      <SEO
        title={td("seo.title")}
        description={td("seo.description")}
        keywords={td("seo.keywords")}
        ogImage={resource.seo?.ogImage}
      />
      <LibraryPageTemplate
        title={td("vtd_create_title")}
        subTitle={td("vtd_create_subTitle")}
        introduction={introduction}
        pageKey={resource.vtd_create_pageKey}
        features={features}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};

export default VTDCreate;
