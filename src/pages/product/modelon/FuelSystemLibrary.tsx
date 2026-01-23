import { useSEO } from "../../../hooks/useSEO";

import fuelSystem from "../../../data/product/modelon/fuel-system-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const FuelSystemLibrary = () => {
  const seoData = useSEO("product/modelon/fuelsystem", fuelSystem);
  const { introduction, subTitle, title, name, pageKey } = fuelSystem;
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

export default FuelSystemLibrary;
