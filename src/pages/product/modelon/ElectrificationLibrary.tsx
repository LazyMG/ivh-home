import { useSEO } from "../../../hooks/useSEO";

import electrification from "../../../data/product/modelon/electrification-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const ElectrificationLibrary = () => {
  const seoData = useSEO("product/modelon/electrification", electrification);
  const { introduction, subTitle, title, name, pageKey } = electrification;
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

export default ElectrificationLibrary;
