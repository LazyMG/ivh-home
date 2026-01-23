import { useSEO } from "../../../hooks/useSEO";

import binaryModelExport from "../../../data/product/dymola/binary-model-export.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const BinaryModelExport = () => {
  const seoData = useSEO("product/dymola/binarymodelexport", binaryModelExport);
  const { introduction, subTitle, title, name, pageKey } = binaryModelExport;
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

export default BinaryModelExport;
