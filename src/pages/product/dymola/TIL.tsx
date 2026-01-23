import til from "../../../data/product/til.json";

import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";
import SEO from "../../../common/SEO";
import { useSEO } from "../../../hooks/useSEO";

const TIL = () => {
  const seoData = useSEO("product/dymola/battery", til);

  const {
    til_title,
    til_subTitle,
    til_introduction,
    til_features,
    til_name,
    til_pageKey,
  } = til;

  return (
    <>
      <SEO {...seoData} />

      <LibraryPageTemplate
        title={til_title}
        subTitle={til_subTitle}
        introduction={til_introduction}
        pageKey={til_pageKey}
        features={til_features}
        name={til_name}
      />
    </>
  );
};

export default TIL;
