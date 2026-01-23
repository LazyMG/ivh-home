import { useSEO } from "../../../hooks/useSEO";

import vaporCycle from "../../../data/product/modelon/vapor-cycle-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VaporCycleLibrary = () => {
  const seoData = useSEO("product/modelon/vaporcycle", vaporCycle);
  const { introduction, subTitle, title, name, pageKey } = vaporCycle;
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

export default VaporCycleLibrary;
