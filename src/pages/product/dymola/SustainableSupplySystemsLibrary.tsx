import { useSEO } from "../../../hooks/useSEO";

import sustainable_supply_systems from "../../../data/product/dymola/sustainable-supply-systems-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const SustainableSupplySystemsLibrary = () => {
  const seoData = useSEO(
    "/product/dymola/sustainablesupplysystems",
    sustainable_supply_systems,
  );
  const { introduction, subTitle, title, name, pageKey } =
    sustainable_supply_systems;
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

export default SustainableSupplySystemsLibrary;
