import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";
import vissim from "../../../data/product/ptv/vissim.json";
import { useSEO } from "../../../hooks/useSEO";

const Vissim = () => {
  const seoData = useSEO("product/ptv/vissim", vissim);

  const {
    vissim_title,
    vissim_subTitle,
    vissim_features,
    vissim_introduction,
    vissim_name,
    vissim_pageKey,
  } = vissim;

  return (
    <>
      <SEO {...seoData} />

      <LibraryPageTemplate
        title={vissim_title}
        subTitle={vissim_subTitle}
        introduction={vissim_introduction}
        pageKey={vissim_pageKey}
        features={vissim_features}
        name={vissim_name}
      />
    </>
  );
};

export default Vissim;
