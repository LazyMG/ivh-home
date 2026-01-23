import { useSEO } from "../../../hooks/useSEO";

import hydraulics from "../../../data/product/modelon/hydraulics-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const HydraulicsLibrary = () => {
  const seoData = useSEO("product/modelon/hydraulics", hydraulics);
  const { introduction, subTitle, title, name, pageKey } = hydraulics;
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

export default HydraulicsLibrary;
