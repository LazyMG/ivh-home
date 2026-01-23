import { useSEO } from "../../../hooks/useSEO";

import vesymaSuspension from "../../../data/product/dymola/vesyma-suspension-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VeSyMaSuspensionLibrary = () => {
  const seoData = useSEO("product/dymola/veSyMasuspension", vesymaSuspension);
  const { introduction, subTitle, title, name, pageKey } = vesymaSuspension;
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

export default VeSyMaSuspensionLibrary;
