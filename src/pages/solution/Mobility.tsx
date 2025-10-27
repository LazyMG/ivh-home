import { Box, Stack } from "@mui/material";
import { useIsMobile } from "../../hooks/useIsMobile";

import BreadScrum from "../../common/BreadScrum";
import SubPage from "../../components/solution/SubPage";
import SolutionTitleHeader from "../../components/solution/SolutionTitleHeader";
import SolutionHeaderButton from "../../components/solution/SolutionHeaderButton";
import ScrollButton from "../../common/ScrollButton";

import body from "../../data/solution/body.json";
import header from "../../data/solution/header.json";

const THRESHOLD = 643;

const Mobility = () => {
  const isMobile = useIsMobile();
  // header
  // 각각의 헤더에서 소제목 분리
  const {
    headerTitle,
    subColor,
    color,
    multiCommunicateTech: { subtitle: multiCommunicateTechSubTitle },
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

  return (
    <Box className="solution-body">
      {/* breadcrumb section */}
      {isMobile ? null : <BreadScrum pageKey="mobility" />}

      {/** 스크롤 버튼 */}
      <ScrollButton color={color} threshold={THRESHOLD} show={!isMobile} />

      {/* header section */}
      {/* 제목만 있는 헤더 */}
      {isMobile ? (
        <SolutionTitleHeader
          contentProps={{
            title: headerTitle,

            color: color,
            subColor: subColor,
          }}
          isMobile={isMobile}
          pageKey="mobility"
        />
      ) : (
        <SolutionTitleHeader
          contentProps={{
            title: headerTitle,

            color: color,
            subColor: subColor,
          }}
          isMobile={isMobile}
        />
      )}

      {/** 스크롤 이동 기능 버튼 컨테이너 */}
      {/** 2줄로 구성 */}
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          mt: 6,
          mb: 12,
          gap: 1,
          [theme.breakpoints.up("tablet")]: {
            gap: 4,
            mb: 28,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 1,
            [theme.breakpoints.up("tablet")]: {
              flexDirection: "row",
              gap: 0,
            },
            justifyContent: "space-between",
          })}
        >
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
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 1,
            [theme.breakpoints.up("tablet")]: {
              flexDirection: "row",
              gap: 0,
            },
            justifyContent: "space-around",
          })}
        >
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

      {/** Mobility 페이지 내의 서브 페이지 컨테이너*/}
      <Stack spacing={28}>
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
      </Stack>
    </Box>
  );
};

export default Mobility;
