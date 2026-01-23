import vtd_simulate from "../../../data/product/vtd-simulate.json";
import new_vtd_simulate from "../../../data/product/new-vtd-simulate.json";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VTDSimulate = () => {
  const seoData = useSEO("product/vtd/vtdsimulate", vtd_simulate);
  const {
    vtd_simulate_title,
    vtd_simulate_subTitle,
    vtd_simulate_introduction,
    vtd_simulate_features,
    vtd_simulate_pageKey,
    vtd_simaulte_name,
  } = new_vtd_simulate;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={vtd_simulate_title}
        subTitle={vtd_simulate_subTitle}
        introduction={vtd_simulate_introduction}
        pageKey={vtd_simulate_pageKey}
        features={vtd_simulate_features}
        name={vtd_simaulte_name}
      />
    </>
  );
};

export default VTDSimulate;
