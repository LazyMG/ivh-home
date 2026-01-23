import { useSEO } from "../../../hooks/useSEO";

import vesyma from "../../../data/product/dymola/vesyma-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VeSyMaLibrary = () => {
  const seoData = useSEO("product/dymola/veSyMa", vesyma);
  const { introduction, subTitle, title, name, pageKey } = vesyma;
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

export default VeSyMaLibrary;
