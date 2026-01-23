import { useSEO } from "../../../hooks/useSEO";

import jetPropulsion from "../../../data/product/modelon/jet-propulsion-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const JetPropulsionLibrary = () => {
  const seoData = useSEO("product/modelon/jetpropulsion", jetPropulsion);
  const { introduction, subTitle, title, name, pageKey } = jetPropulsion;
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

export default JetPropulsionLibrary;
