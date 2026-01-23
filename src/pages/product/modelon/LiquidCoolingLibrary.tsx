import { useSEO } from "../../../hooks/useSEO";

import liquidCooling from "../../../data/product/modelon/liquid-cooling-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const LiquidCoolingLibrary = () => {
  const seoData = useSEO("product/modelon/liquidcooling", liquidCooling);
  const { introduction, subTitle, title, name, pageKey } = liquidCooling;
  return (
    <>
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={title}
        subTitle={subTitle}
        introduction={introduction}
        pageKey={pageKey}
        name={name}
      />
    </>
  );
};

export default LiquidCoolingLibrary;
