import LibraryPageTemplate from "../../../components/product/LibraryPageTemplate";
import vissim from "../../../data/product/new-vissim.json";

const NewVissim = () => {
  const {
    vissim_title,
    vissim_subTitle,
    vissim_features,
    vissim_introduction,
    vissim_name,
    vissim_pageKey,
  } = vissim;

  return (
    <>
      <LibraryPageTemplate
        title={vissim_title}
        subTitle={vissim_subTitle}
        introduction={vissim_introduction}
        pageKey={vissim_pageKey}
        features={vissim_features}
        name={vissim_name}
      />
    </>
  );
};

export default NewVissim;
