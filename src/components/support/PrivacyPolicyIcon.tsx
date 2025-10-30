import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import CustomModal from "./CustomModal";

const PrivacyPolicyIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <InfoIcon
        sx={{ cursor: "pointer" }}
        onClick={() => setIsModalOpen(true)}
      />
      <CustomModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PrivacyPolicyIcon;
