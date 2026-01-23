import til from "../../../data/product/new-til.json";

import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";

const TIL = () => {
  const {
    til_title,
    til_subTitle,
    til_introduction,
    til_features,
    til_name,
    til_pageKey,
  } = til;

  return (
    <>
      <LibraryPageTemplate
        title={til_title}
        subTitle={til_subTitle}
        introduction={til_introduction}
        pageKey={til_pageKey}
        features={til_features}
        name={til_name}
      />
    </>
  );
};

export default TIL;
