import resource from "../../../data/product/modelon/modelon.json";
import { useTranslation } from "react-i18next";
import SEO from "../../../common/SEO";
import LangToggle from "../../../common/LangToggle";
import ProductPageTemplate from "../../../components/product/ProductPageTemplate";

const Modelon = () => {
  const { t } = useTranslation("product/modelon" as never);
  const td = (key: string): string => t(key as never);
  const textList = t("modelon_text" as never, { returnObjects: true }) as string[];
  const libraries = resource.modelon_libraries.map((lib) => ({
    imgUrl: lib.imgUrl,
    url: lib.url,
    text: td(`modelon_libraries.${lib.id}.text`),
    img_alt: td(`modelon_libraries.${lib.id}.img_alt`),
  }));

  return (
    <>
      <SEO title={td("seo.title")} description={td("seo.description")} keywords={td("seo.keywords")} ogImage={resource.seo?.ogImage} />
      <LangToggle />
      <ProductPageTemplate
        image={resource.modelon_mainImg}
        image_alt={td("modelon_mainImg_alt")}
        title={td("modelon_title")}
        textList={textList}
        name={td("modelon_name")}
        libraries={libraries}
        pageKey={resource.modelon_pageKey}
      />
    </>
  );
};
export default Modelon;
