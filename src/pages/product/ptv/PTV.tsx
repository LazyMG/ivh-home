import SEO from "../../../common/SEO";
import ProductPageTemplate from "../../../components/product/ProductPageTemplate";
import ptv from "../../../data/product/ptv/ptv.json";
import { useSEO } from "../../../hooks/useSEO";

const PTV = () => {
  const seoData = useSEO("product/ptv", ptv);

  const {
    ptv_mainImg,
    ptv_title,
    ptv_text,
    ptv_name,
    ptv_pageKey,
    ptv_libraries,
  } = ptv;
  return (
    <>
      <SEO {...seoData} />

      <ProductPageTemplate
        image={ptv_mainImg}
        title={ptv_title}
        textList={ptv_text}
        name={ptv_name}
        libraries={ptv_libraries}
        pageKey={ptv_pageKey}
      />
    </>
  );
};

export default PTV;
