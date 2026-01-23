import { useSEO } from "../../../hooks/useSEO";

import airCooling from "../../../data/product/modelon/air-cooling-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const AirCoolingLibrary = () => {
  const seoData = useSEO("product/modelon/aircooling", airCooling);
  const { introduction, subTitle, title, name, pageKey } = airCooling;
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

export default AirCoolingLibrary;
