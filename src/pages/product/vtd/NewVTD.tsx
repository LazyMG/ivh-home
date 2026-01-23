import ProductPageTemplate from "../../../components/product/ProductPageTemplate";

import vtd from "../../../data/product/new-vtd.json";

const NewVTD = () => {
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

export default NewVTD;
