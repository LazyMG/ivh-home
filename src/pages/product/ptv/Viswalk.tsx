import viswalk from "../../../data/product/new-viswalk.json";

import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const Viswalk = () => {
  const seoData = useSEO("product/viswalk", viswalk);

  const {
    viswalk_title,
    viswalk_subTitle,
    viswalk_features,
    viswalk_introduction,
    viswalk_name,
    viswalk_pageKey,
  } = viswalk;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={viswalk_title}
        subTitle={viswalk_subTitle}
        introduction={viswalk_introduction}
        pageKey={viswalk_pageKey}
        features={viswalk_features}
        name={viswalk_name}
      />
    </>
  );
};

export default Viswalk;
