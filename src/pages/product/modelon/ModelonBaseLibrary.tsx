import { useSEO } from "../../../hooks/useSEO";

import modelonBase from "../../../data/product/modelon/modelon-base-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const ModelonBaseLibrary = () => {
  const seoData = useSEO("product/modelon/modelonbase", modelonBase);
  const { introduction, subTitle, title, name, pageKey } = modelonBase;
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

export default ModelonBaseLibrary;
