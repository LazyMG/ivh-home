import { useSEO } from "../../../hooks/useSEO";

import hydrogen from "../../../data/product/dymola/hydrogen-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const HydrogenLibrary = () => {
  const seoData = useSEO("/product/dymola/hydrogen", hydrogen);
  const { introduction, subTitle, title, name, pageKey } = hydrogen;
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

export default HydrogenLibrary;
