import SEO from "../../../common/SEO";
import ProductPageTemplate from "../../../components/product/ProductPageTemplate";

import vtd from "../../../data/product/vtd/vtd.json";
import { useSEO } from "../../../hooks/useSEO";

const VTD = () => {
  const seoData = useSEO("product/vtd", vtd);
  const {
    vtd_mainImg,
    vtd_title,
    vtd_subTitle,
    vtd_text,
    vtd_libraries,
    vtd_name,
    vtd_pageKey,
  } = vtd;

  return (
    <>
      <SEO {...seoData} />
      <ProductPageTemplate
        image={vtd_mainImg}
        title={vtd_title}
        subTitle={vtd_subTitle}
        textList={vtd_text}
        name={vtd_name}
        libraries={vtd_libraries}
        pageKey={vtd_pageKey}
      />
    </>
  );
};

export default VTD;
