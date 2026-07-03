import resource from "../../../data/product/vtd/vtd.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import ProductPageTemplate from "../../../components/product/ProductPageTemplate";

const VTD = () => {
  const { t } = useTranslation("product/vtd" as never);
  const td = (key: string): string => t(key as never);

  const textList = t("vtd_text" as never, { returnObjects: true }) as string[];

  const libraries = resource.vtd_libraries.map((lib) => ({
    imgUrl: lib.imgUrl,
    url: lib.url,
    text: td(`vtd_libraries.${lib.id}.text`),
    img_alt: td(`vtd_libraries.${lib.id}.img_alt`),
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
        image={resource.vtd_mainImg}
        mobileImage={resource.vtd_mobileMainImg}
        image_alt={td("vtd_mainImg_alt")}
        title={td("vtd_title")}
        subTitle={td("vtd_subTitle")}
        textList={textList}
        libraries={libraries}
        pageKey={resource.vtd_pageKey}
        libraryLayout="center"
        introBottomSpaceMobile={10}
        introBottomSpace={24}
        introBottomSpaceWide={15}
      />
    </>
  );
};

export default VTD;
