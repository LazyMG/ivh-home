import dymola from "../../../data/product/dymola/dymola.json";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import ProductPageTemplate from "../../../components/product/ProductPageTemplate";

const Dymola = () => {
  const seoData = useSEO("product/dymola", dymola);
  const {
    dymola_mainImg,
    dymola_title,
    dymola_subTitle,
    dymola_text,
    dymola_features,
    dymola_libraries,
    dymola_name,
    dymola_pageKey,
  } = dymola;

  return (
    <>
      <SEO {...seoData} />
      <ProductPageTemplate
        image={dymola_mainImg}
        title={dymola_title}
        subTitle={dymola_subTitle}
        textList={dymola_text}
        features={dymola_features}
        name={dymola_name}
        libraries={dymola_libraries}
        pageKey={dymola_pageKey}
      />
    </>
  );
};

export default Dymola;
