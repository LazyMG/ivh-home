import { useSEO } from "../../../hooks/useSEO";

import electrified_powertrains from "../../../data/product/dymola/electrified-powertrains-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const ElectrifiedPowertrainsLibrary = () => {
  const seoData = useSEO(
    "/product/dymola/electrifiedpowertrains",
    electrified_powertrains,
  );
  const { introduction, subTitle, title, name, pageKey } =
    electrified_powertrains;
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

export default ElectrifiedPowertrainsLibrary;
