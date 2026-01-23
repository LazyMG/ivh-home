import { useSEO } from "../../../hooks/useSEO";

import environmentalControl from "../../../data/product/modelon/environmental-control-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const EnvironmentalControlLibrary = () => {
  const seoData = useSEO("product/modelon/environmentalcontrol", environmentalControl);
  const { introduction, subTitle, title, name, pageKey } = environmentalControl;
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

export default EnvironmentalControlLibrary;
