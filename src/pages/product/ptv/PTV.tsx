import resource from "../../../data/product/ptv/ptv.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LangToggle from "../../../common/LangToggle";
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
      <LangToggle />
      <ProductPageTemplate
        image={resource.ptv_mainImg}
        image_alt={td("ptv_mainImg_alt")}
        title={td("ptv_title")}
        textList={textList}
        name={td("ptv_name")}
        libraries={libraries}
        pageKey={resource.ptv_pageKey}
      />
    </>
  );
};

export default PTV;
