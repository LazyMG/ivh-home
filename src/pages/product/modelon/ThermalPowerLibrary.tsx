import { useSEO } from "../../../hooks/useSEO";

import thermalPower from "../../../data/product/modelon/thermal-power-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const ThermalPowerLibrary = () => {
  const seoData = useSEO("product/modelon/thermalpower", thermalPower);
  const { introduction, subTitle, title, name, pageKey } = thermalPower;
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

export default ThermalPowerLibrary;
