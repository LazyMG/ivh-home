import { useSEO } from "../../../hooks/useSEO";

import aircraftDynamics from "../../../data/product/modelon/aircraft-dynamics-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const AircraftDynamicsLibrary = () => {
  const seoData = useSEO("product/modelon/aircraftdynamics", aircraftDynamics);
  const { introduction, subTitle, title, name, pageKey } = aircraftDynamics;
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

export default AircraftDynamicsLibrary;
