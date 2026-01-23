import vtd_create from "../../../data/product/new-vtd-create.json";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";
import SEO from "../../../common/SEO";
import { useSEO } from "../../../hooks/useSEO";

const VTDCreate = () => {
  const seoData = useSEO("product/dymola", vtd_create);
  const {
    vtd_create_title,
    vtd_create_subTitle,
    vtd_create_introduction,
    vtd_create_features,
    vtd_create_name,
    vtd_create_pageKey,
  } = vtd_create;

  return (
    <>
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={vtd_create_title}
        subTitle={vtd_create_subTitle}
        introduction={vtd_create_introduction}
        pageKey={vtd_create_pageKey}
        features={vtd_create_features}
        name={vtd_create_name}
      />
    </>
  );
};

export default VTDCreate;
