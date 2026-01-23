import { useSEO } from "../../../hooks/useSEO";

import fuelCell from "../../../data/product/modelon/fuel-cell-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const FuelCellLibrary = () => {
  const seoData = useSEO("product/modelon/fuelcell", fuelCell);
  const { introduction, subTitle, title, name, pageKey } = fuelCell;
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

export default FuelCellLibrary;
