import type {
  ReservationResponse,
  ReservationStatus,
} from "../../types/reservation";

import { Box, Typography } from "@mui/material";

import TrainingMainTitle from "../../components/support/TrainingMainTitle";
import Calendar from "../../components/support/Calendar";
import ApplicationForm from "../../components/support/ApplicationForm";

import training from "../../data/support/training.json";
import { useTranslation } from "react-i18next";
import SEO from "../../common/SEO";
import { useEffect, useState } from "react";
import { reservationService } from "../../service/reservationService";
import CustomSnackbar from "../../components/support/CustomSnackbar";
import TraingCurriculumTable from "../../components/support/TrainingCurriculumTable";

import curriculums from "../../data/support/curriculum.json";
import ScrollButton from "../../common/ScrollButton";
import MobileScheduleContainer from "../../components/support/MobileScheduleContainer";
import SectionTitle from "../../components/common/SectionTitle";
import FullBleedSectionTitle from "../../components/support/FullBleedSectionTitle";
import BreadScrum from "../../common/BreadScrum";
import { FONTS } from "../../theme/theme";

// ⚠️ 테스트용 임시 예약 데이터 — 실제 API 연동 시 이 상수와 useEffect 내 사용부를 제거하세요.
const mockReservation = (
  id: number,
  reservationName: string,
  startDate: string, // "YYYY-MM-DDT10:00:00" 형식
  reservationStatus: ReservationStatus,
  reservatedPeople: number,
): ReservationResponse => ({
  id,
  reservationName,
  startDate,
  endDate: startDate.replace("T10:00:00", "T17:00:00"),
  reservationStatus,
  reservationType: "EDUCATION",
  cost: 0,
  reservationDescription: `${reservationName} 실습 교육`,
  maxPeople: 20,
  minPeople: 4,
  reservatedPeople,
  createdAt: "2026-06-01T09:00:00",
  updatedAt: "2026-06-01T09:00:00",
});

// 교육별로 7·8·9월에 각각 일정 배치 → 카드마다 여러 날짜(월별)가 표시됨
const MOCK_RESERVATIONS: ReservationResponse[] = [
  // Modelica 기본 교육
  mockReservation(1, "Modelica 기본 교육", "2026-07-15T10:00:00", "OPEN", 7),
  mockReservation(2, "Modelica 기본 교육", "2026-08-12T10:00:00", "OPEN", 10),
  mockReservation(3, "Modelica 기본 교육", "2026-09-16T10:00:00", "CLOSED", 20),
  // FMI Basic
  mockReservation(4, "FMI Basic", "2026-07-22T10:00:00", "CLOSED", 16),
  mockReservation(5, "FMI Basic", "2026-08-19T10:00:00", "OPEN", 5),
  mockReservation(6, "FMI Basic", "2026-09-23T10:00:00", "OPEN", 8),
  // OpenDRIVE 표준 이해 및 모델링
  mockReservation(
    7,
    "OpenDRIVE 표준 이해 및 모델링",
    "2026-07-08T10:00:00",
    "OPEN",
    3,
  ),
  mockReservation(
    8,
    "OpenDRIVE 표준 이해 및 모델링",
    "2026-08-05T10:00:00",
    "OPEN",
    6,
  ),
  mockReservation(
    9,
    "OpenDRIVE 표준 이해 및 모델링",
    "2026-09-02T10:00:00",
    "OPEN",
    9,
  ),
  // Battery 설계 및 성능 해석 교육
  mockReservation(
    10,
    "Battery 설계 및 성능 해석 교육",
    "2026-07-29T10:00:00",
    "OPEN",
    4,
  ),
  mockReservation(
    11,
    "Battery 설계 및 성능 해석 교육",
    "2026-08-26T10:00:00",
    "OPEN",
    7,
  ),
  mockReservation(
    12,
    "Battery 설계 및 성능 해석 교육",
    "2026-09-30T10:00:00",
    "OPEN",
    2,
  ),
  // Vehicle Dynamics 설계 및 성능해석 교육
  mockReservation(
    13,
    "Vehicle Dynamics 설계 및 성능해석 교육",
    "2026-07-16T10:00:00",
    "OPEN",
    5,
  ),
  mockReservation(
    14,
    "Vehicle Dynamics 설계 및 성능해석 교육",
    "2026-08-20T10:00:00",
    "CLOSED",
    18,
  ),
  mockReservation(
    15,
    "Vehicle Dynamics 설계 및 성능해석 교육",
    "2026-09-17T10:00:00",
    "OPEN",
    11,
  ),
  // Traffic Flow 이해 및 모델링
  mockReservation(
    16,
    "Traffic Flow 이해 및 모델링",
    "2026-07-23T10:00:00",
    "OPEN",
    12,
  ),
  mockReservation(
    17,
    "Traffic Flow 이해 및 모델링",
    "2026-08-13T10:00:00",
    "OPEN",
    6,
  ),
  mockReservation(
    18,
    "Traffic Flow 이해 및 모델링",
    "2026-09-24T10:00:00",
    "OPEN",
    9,
  ),
];

const Training = () => {
  const { t } = useTranslation("support/training");
  const { training_outline } = training;

  // 텍스트(제목 세그먼트·본문)는 locale, 이미지 경로는 data json에서 가져와 병합
  const trainingTitle = t("training_title", { returnObjects: true });
  const outlineContents = t("training_outline.contents", {
    returnObjects: true,
  });

  const [apiReservationList, setApiReservationList] = useState<
    ReservationResponse[] | null
  >(null);
  const [submitStatus, setSubmitStatus] = useState<"error" | null>(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const { training_curriculums } = curriculums;

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };

  {
    /** reservation 호출 기능 추가 필요 */
  }
  const fetchReservationList = async () => {
    try {
      const result = await reservationService.getReservations();
      setApiReservationList(result);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      // setSnackbarMessage(`${error}`);
      setSnackbarMessage("교육 일정을 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    // ⚠️ 테스트용 임시 데이터 주입 — 실제 연동 시 아래 두 줄을 제거하고 fetchReservationList() 복구
    setApiReservationList(MOCK_RESERVATIONS);
    void fetchReservationList; // 미사용 경고 방지 (임시)
    // fetchReservationList();
  }, []);

  const THRESHOLD = 100;

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        ogImage="https://ivh.co.kr/images/opengraph.png"
        canonical="https://ivh.co.kr/support/training"
      />
      <ScrollButton threshold={THRESHOLD} />

      {/** 개요, Curriculum, Schedule, Application 섹션 전체 컨테이너 */}
      <Box
        component="main"
        sx={(theme) => ({
          position: "relative",
          px: 5,
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            px: 20,
            mb: 24,
          },
        })}
      >
        <BreadScrum
          pageKey="training"
          sx={(theme) => ({
            position: "absolute",
            top: "-24px",
            right: "8%",
            // 모바일 시안에는 브레드스크럼 없음 → 데스크탑부터 표시
            display: "none",
            [theme.breakpoints.up("desktop")]: {
              display: "flex",
            },
          })}
        />
        {/** 개요 영역 */}
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
            mb: 8,
            [theme.breakpoints.up("desktop")]: {
              mt: 8,
              px: 8,
              mb: 16,
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={training_outline.image}
              alt={t("training_outline.image_alt")}
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",
              mt: 2,
              [theme.breakpoints.up("desktop")]: {
                justifyContent: "flex-start",
                mt: 6,
              },
            })}
          >
            <TrainingMainTitle titleList={trainingTitle} />
          </Box>
          <Box
            sx={(theme) => ({
              my: 2,
              borderTop: "none",
              width: "100%",
              [theme.breakpoints.up("desktop")]: {
                my: 6,
                borderTop: "1px dashed #C9C9C9",
              },
            })}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {outlineContents.map((content, index) => (
              <Typography
                key={index}
                sx={(theme) => ({
                  wordBreak: "keep-all",
                  fontFamily: FONTS.freesentation.medium,
                  fontSize: "16px",
                  whiteSpace: "pre-line",
                  color: "#424242",
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "20px",
                  },
                })}
              >
                {content}
              </Typography>
            ))}
          </Box>
          <Box
            sx={(theme) => ({
              display: "none",
              alignItems: "center",
              gap: 3,
              width: "100%",
              mt: 6,
              [theme.breakpoints.up("tablet")]: {
                display: "flex",
              },
            })}
          >
            {training_outline.session_images.map((src) => (
              <Box
                key={src}
                component="img"
                src={src}
                // 3등분하여 컨테이너 폭 안에서 축소 (가로 스크롤 방지)
                sx={{
                  flex: 1,
                  minWidth: 0,
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            ))}
          </Box>
        </Box>

        {/** Curriculum 섹션 */}
        <Box
          sx={(theme) => ({
            width: "100%",
            margin: "50px auto",
            mb: 10,
            [theme.breakpoints.up("tablet")]: {
              display: "flex",
              flexDirection: "column",
              mb: 16,
            },
          })}
        >
          <FullBleedSectionTitle text="Curriculum" />
          <TraingCurriculumTable
            reservationList={apiReservationList}
            curriculums={training_curriculums}
          />
          <MobileScheduleContainer reservationList={apiReservationList} />
        </Box>

        {/** Schedule 섹션 */}
        <Box
          sx={(theme) => ({
            width: "100%",
            margin: "50px auto",
            display: "none",
            mb: 16,
            [theme.breakpoints.up("tablet")]: {
              display: "flex",
              flexDirection: "column",
            },
          })}
        >
          <SectionTitle text="Schedule" />
          <Calendar reservationList={apiReservationList} />
        </Box>

        {/** Application 섹션 */}
        <Box
          sx={(theme) => ({
            width: "100%",
            flexDirection: "column",
            gap: 4,
            display: "flex",
            [theme.breakpoints.up("desktop")]: {
              margin: "50px auto",
            },
          })}
        >
          <FullBleedSectionTitle text="Application" />
          <ApplicationForm reservationList={apiReservationList} />
        </Box>

        {/** 데이터 불러올 때 발생한 에러 보여주는 스낵바 */}
        {/** 에러 문구 출력 */}
        <CustomSnackbar
          submitStatus={submitStatus}
          snackbarMessage={snackbarMessage}
          handleCloseSnackbar={handleCloseSnackbar}
        />
      </Box>
    </>
  );
};

export default Training;
