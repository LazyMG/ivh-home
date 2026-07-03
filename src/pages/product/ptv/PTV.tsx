import resource from "../../../data/product/ptv/ptv.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import ProductPageTemplate from "../../../components/product/ProductPageTemplate";

const PTV = () => {
  const { t } = useTranslation("product/ptv" as never);
  const td = (key: string): string => t(key as never);

  const textList = t("ptv_text" as never, { returnObjects: true }) as string[];

  const libraries = resource.ptv_libraries.map((lib) => ({
    imgUrl: lib.imgUrl,
    url: lib.url,
    text: td(`ptv_libraries.${lib.id}.text`),
    img_alt: td(`ptv_libraries.${lib.id}.img_alt`),
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
        image={resource.ptv_mainImg}
        mobileImage={resource.ptv_mobileMainImg}
        image_alt={td("ptv_mainImg_alt")}
        title={td("ptv_title")}
        textList={textList}
        libraries={libraries}
        pageKey={resource.ptv_pageKey}
        libraryLayout="center"
        contentTop="85%"
        introBottomSpaceMobile={8}
        introBottomSpace={24}
        introBottomSpaceWide={15}
      />
    </>
  );
};

export default PTV;
