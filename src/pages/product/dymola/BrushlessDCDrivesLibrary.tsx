import { useSEO } from "../../../hooks/useSEO";

import brushless from "../../../data/product/dymola/brushless-DC-drives-library.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const BrushlessDCDrivesLibrary = () => {
  const seoData = useSEO("/product/dymola/brushlessdcdrives", brushless);
  const { introduction, subTitle, title, name, pageKey } = brushless;
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

export default BrushlessDCDrivesLibrary;
