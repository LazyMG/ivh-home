import vissim_automotive from "../../../data/product/ptv/vissim-automotive.json";

import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VissimAutomotive = () => {
  const seoData = useSEO("product/ptv/vissimautomotive", vissim_automotive);

  const {
    vissim_automotive_title,
    vissim_automotive_subTitle,
    vissim_automotive_features,
    vissim_automotive_introduction,
    vissim_automotive_name,
    vissim_automotive_pageKey,
  } = vissim_automotive;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={vissim_automotive_title}
        subTitle={vissim_automotive_subTitle}
        introduction={vissim_automotive_introduction}
        pageKey={vissim_automotive_pageKey}
        features={vissim_automotive_features}
        name={vissim_automotive_name}
      />
    </>
  );
};

export default VissimAutomotive;
