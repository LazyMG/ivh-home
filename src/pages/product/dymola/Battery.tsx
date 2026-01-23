import battery from "../../../data/product/new-battery.json";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";

const Battery = () => {
  const seoData = useSEO("product/dymola/battery", battery);
  const {
    battery_features,
    battery_introduction,
    battery_subTitle,
    battery_title,
    battery_name,
    battery_pageKey,
  } = battery;

  return (
    <>
      <SEO {...seoData} />
      <LibraryPageTemplate
        title={battery_title}
        subTitle={battery_subTitle}
        introduction={battery_introduction}
        pageKey={battery_pageKey}
        features={battery_features}
        name={battery_name}
      />
    </>
  );
};

export default Battery;
