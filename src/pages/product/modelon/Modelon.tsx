import SEO from "../../../common/SEO";
import ProductPageTemplate from "../../../components/product/ProductPageTemplate";

import modelon from "../../../data/product/modelon/modelon.json";
import { useSEO } from "../../../hooks/useSEO";

const Modelon = () => {
  const seoData = useSEO("product/modelon", modelon);

  const {
    modelon_mainImg,
    modelon_title,
    modelon_text,
    modelon_name,
    modelon_pageKey,
    modelon_libraries,
  } = modelon;
  return (
    <>
      <SEO {...seoData} />

      <ProductPageTemplate
        image={modelon_mainImg}
        title={modelon_title}
        textList={modelon_text}
        name={modelon_name}
        libraries={modelon_libraries}
        pageKey={modelon_pageKey}
      />
    </>
  );
};

export default Modelon;
