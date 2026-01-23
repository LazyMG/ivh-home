import { useSEO } from "../../../hooks/useSEO";

import heatExchanger from "../../../data/product/modelon/heat-exchanger-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const HeatExchangerLibrary = () => {
  const seoData = useSEO("product/modelon/heatexchanger", heatExchanger);
  const { introduction, subTitle, title, name, pageKey } = heatExchanger;
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

export default HeatExchangerLibrary;
