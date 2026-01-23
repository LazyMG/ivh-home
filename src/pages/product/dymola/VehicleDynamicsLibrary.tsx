import vehicle from "../../../data/product/vehicle.json";
import new_vehicle from "../../../data/product/vehicle-dynamics-library.json";

import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const VehicleDynamicsLibrary = () => {
  const seoData = useSEO("product/dymola/vehicleDynamicsLibrary", vehicle);

  const {
    vehicle_title,
    vehicle_name,
    vehicle_pageKey,
    vehicle_subTitle,
    vehicle_features,
    vehicle_introduction,
  } = new_vehicle;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={vehicle_title}
        subTitle={vehicle_subTitle}
        introduction={vehicle_introduction}
        pageKey={vehicle_pageKey}
        features={vehicle_features}
        name={vehicle_name}
      />
    </>
  );
};

export default VehicleDynamicsLibrary;
