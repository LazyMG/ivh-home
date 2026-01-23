import vtd_fullstack from "../../../data/product/new-vtd-fullstack.json";

import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VTDFullstack = () => {
  const seoData = useSEO("product/vtd/vtdfullstack", vtd_fullstack);
  const {
    vtd_fullstack_title,
    vtd_fullstack_subTitle,
    vtd_fullstack_pageKey,
    vtd_fullstack_name,
    vtd_fullstack_introduction,
    vtd_fullstack_features,
  } = vtd_fullstack;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={vtd_fullstack_title}
        subTitle={vtd_fullstack_subTitle}
        introduction={vtd_fullstack_introduction}
        pageKey={vtd_fullstack_pageKey}
        features={vtd_fullstack_features}
        name={vtd_fullstack_name}
      />
    </>
  );
};

export default VTDFullstack;
