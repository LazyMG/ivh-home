import resource from "../../../data/product/vtd/vtd-fullstack.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VTDFullstack = () => {
  const { t } = useTranslation("product/vtd/vtdfullstack" as never);
  const td = (key: string): string => t(key as never);

  const introTexts = t("vtd_fullstack_introduction" as never, {
    returnObjects: true,
  }) as string[];
  const introduction = introTexts.map((text, i) => {
    const resIntro = resource.vtd_fullstack_introduction?.[i];
    return {
      text,
      ...(resIntro && "imgObj" in resIntro && resIntro.imgObj
        ? { imgObj: resIntro.imgObj }
        : {}),
    };
  });

  const features = resource.vtd_fullstack_features.map((feat, index, arr) => ({
    ...(feat.imgObj ? { imgObj: feat.imgObj } : {}),
    textObj: {
      col: feat.textObj.col,
      title: td(`vtd_fullstack_features.${feat.id}.title`),
      text: td(`vtd_fullstack_features.${feat.id}.text`),
    },
    showDivider: index !== arr.length - 1,
  }));

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO
        title={td("seo.title")}
        description={td("seo.description")}
        keywords={td("seo.keywords")}
        ogImage={resource.seo?.ogImage}
      />
      <LibraryPageTemplate
        title={td("vtd_fullstack_title")}
        subTitle={td("vtd_fullstack_subTitle")}
        introduction={introduction}
        pageKey={resource.vtd_fullstack_pageKey}
        features={features}
        name={td("vtd_fullstack_name")}
        featuresSectionTitle={td("features_section_title")}
      />
    </>
  );
};

export default VTDFullstack;
