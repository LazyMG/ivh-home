import InfoIcon from "@mui/icons-material/Info";

const PrivacyPolicyIcon = () => {
  const handleClick = () => {
    window.open("/support/privacyPolicy", "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <InfoIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
    </>
  );
};

export default PrivacyPolicyIcon;
