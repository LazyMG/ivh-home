import ProductPageTemplate from "../../../components/product/ProductPageTemplate";
import ptv from "../../../data/product/ptv.json";

const PTV = () => {
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
