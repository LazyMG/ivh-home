import { useSEO } from "../../../hooks/useSEO";

import flexible_bodies from "../../../data/product/dymola/flexible-bodies.json";
import SEO from "../../../common/SEO";
import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const FlexibleBodies = () => {
  const seoData = useSEO("/product/dymola/flexiblebodies", flexible_bodies);
  const { introduction, subTitle, title, name, pageKey } = flexible_bodies;
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

export default FlexibleBodies;
