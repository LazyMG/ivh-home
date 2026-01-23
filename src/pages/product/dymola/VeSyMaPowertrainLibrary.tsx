import { useSEO } from "../../../hooks/useSEO";

import vesymaPowertrain from "../../../data/product/dymola/vesyma-powertrain-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VeSyMaPowertrainLibrary = () => {
  const seoData = useSEO("product/dymola/veSyMapowertrain", vesymaPowertrain);
  const { introduction, subTitle, title, name, pageKey } = vesymaPowertrain;
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

export default VeSyMaPowertrainLibrary;
