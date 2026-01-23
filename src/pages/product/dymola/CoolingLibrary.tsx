import { useSEO } from "../../../hooks/useSEO";

import cooling from "../../../data/product/dymola/cooling-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const CoolingLibrary = () => {
  const seoData = useSEO("product/dymola/cooling", cooling);
  const {
    cooling_introduction,
    cooling_subTitle,
    cooling_title,
    cooling_name,
    cooling_pageKey,
  } = cooling;
  return (
    <>
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={cooling_title}
        subTitle={cooling_subTitle}
        introduction={cooling_introduction}
        pageKey={cooling_pageKey}
        name={cooling_name}
      />
    </>
  );
};

export default CoolingLibrary;
