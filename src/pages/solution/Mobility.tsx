import { Box, Fab } from "@mui/material";
import useSolutionClass from "../../hooks/useSolutionClass";
import BreadScrum from "../../components/solution/BreadScrum";

import header from "../../data/solution/header.json";
import body from "../../data/solution/body.json";
import SubPage from "../../components/solution/SubPage";
import SolutionTitleHeader from "../../components/solution/SolutionTitleHeader";
import SolutionHeaderButton from "../../components/solution/SolutionHeaderButton";

const Mobility = () => {
  // header
  // 각각의 헤더에서 소제목 분리
  // 첫 번째 헤더에서는 제목, 색상, 부색상까지 분리
  const {
    multiCommunicateTech: {
      headerTitle,
      subtitle: multiCommunicateTechSubTitle,
      subColor,
      color,
    },
    aiDrivingAbilityTest: { subtitle: aiDrivingAbilityTestSubTitle },
    virtualDurability: { subtitle: virtualDurabilitySubTitle },
    suspensionEquipment: { subtitle: suspensionEquipmentSubTitle },
    EV: { subtitle: EVSubTitle },
  } = header.Mobility;

  // 모빌리티의 데이터 5개 추출
  const {
    multiCommunicateTech,
    aiDrivingAbilityTest,
    virtualDurability,
    suspensionEquipment,
    EV,
  } = body.mobility;

  // 스크롤 이동 기능을 위한 아이디 명세 객체
  const mobilityId = {
    multiCommunicateTech: "multiCom",
    aiDrivingAbilityTest: "aiTest",
    virtualDurability: "vDurabilty",
    suspensionEquipment: "suspension",
    EV: "EV",
  };

  useSolutionClass("solution-body");

  return (
    <>
      <div id="top" />
      {/* breadcrumb section */}
      <BreadScrum title={headerTitle} />

      <Fab
        sx={{
          position: "fixed",
          bottom: "1rem",
          right: "5rem",
          backgroundColor: "transparent",
          ":hover": {
            backgroundColor: color,
          },
        }}
        onClick={() => {
          document
            ?.getElementById("top")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Top
      </Fab>

      {/* header section */}
      {/* 제목만 있는 헤더 */}
      <SolutionTitleHeader color={color} title={headerTitle} />

      {/** 스크롤 이동 기능 버튼 컨테이너 */}
      {/** 2줄로 구성 */}
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 6, mb: 20 }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <SolutionHeaderButton
            color={color}
            text={multiCommunicateTechSubTitle}
            id={mobilityId.multiCommunicateTech}
          />
          <SolutionHeaderButton
            color={color}
            text={aiDrivingAbilityTestSubTitle}
            id={mobilityId.aiDrivingAbilityTest}
          />
          <SolutionHeaderButton
            color={color}
            text={suspensionEquipmentSubTitle}
            id={mobilityId.suspensionEquipment}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <SolutionHeaderButton
            color={color}
            text={virtualDurabilitySubTitle}
            id={mobilityId.virtualDurability}
          />
          <SolutionHeaderButton
            color={color}
            text={EVSubTitle}
            id={mobilityId.EV}
          />
        </Box>
      </Box>

      {/** 다중 통신기술 네트워크 로드밸런싱 기술개발 */}
      <SubPage
        color={color}
        subColor={subColor}
        subtitle={multiCommunicateTechSubTitle}
        jsonData={multiCommunicateTech}
        id={mobilityId.multiCommunicateTech}
      />

      {/** AI 운전능력평가 표준화 및 평가 프로세스 개발 */}
      <SubPage
        color={color}
        subColor={subColor}
        subtitle={aiDrivingAbilityTestSubTitle}
        jsonData={aiDrivingAbilityTest}
        id={mobilityId.aiDrivingAbilityTest}
      />

      {/** 가상내구로 주행 기술 */}
      <SubPage
        color={color}
        subColor={subColor}
        subtitle={virtualDurabilitySubTitle}
        jsonData={virtualDurability}
        id={mobilityId.virtualDurability}
      />

      {/** 현가 장치 설계 툴 개발 */}
      <SubPage
        color={color}
        subColor={subColor}
        subtitle={suspensionEquipmentSubTitle}
        jsonData={suspensionEquipment}
        id={mobilityId.suspensionEquipment}
      />

      {/** EV 열관리 설계 기술 */}
      <SubPage
        color={color}
        subColor={subColor}
        subtitle={EVSubTitle}
        jsonData={EV}
        id={mobilityId.EV}
      />
    </>
  );
};

export default Mobility;
