import type { ReservationResponse } from "../../types/reservation";

import { Box, Divider, Typography } from "@mui/material";

import TrainingMainTitle from "../../components/support/TrainingMainTitle";
import GradientSectionLabel from "../../components/support/GradientSectionLabel";
import CalendarLegend from "../../components/support/CalendarLegend";
import Calendar from "../../components/support/Calendar";
import ApplicationForm from "../../components/support/ApplicationForm";

import training from "../../data/support/training.json";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../common/SEO";
import { useEffect, useState } from "react";
import { reservationService } from "../../service/reservationService";
import CustomSnackbar from "../../components/support/CustomSnackbar";
import TraingCurriculumTable from "../../components/support/TrainingCurriculumTable";

import curriculums from "../../data/support/curriculum.json";

// // 임시 교육 일정 데이터
// const reservations: ReservationResponse[] = [
//   {
//     id: 1,
//     reservationName: "VTD 후반기 교육",
//     startDate: "2025-10-02",
//     endDate: "2025-10-02",
//     reservationStatus: "CLOSED",
//     reservationType: "EDUCATION",
//     cost: 1234,
//     reservationDescription: "VTD 후반기 교육",
//     maxPeople: 5,
//     minPeople: 1,
//     reservatedPeople: 5,
//     createdAt: "2025-10-01",
//     updatedAt: "2025-10-01",
//   },
//   {
//     id: 2,
//     reservationName: "Dymola 후반기 교육",
//     startDate: "2025-10-12",
//     endDate: "2025-10-12",
//     reservationStatus: "OPEN",
//     reservationType: "EDUCATION",
//     cost: 1234,
//     reservationDescription: "Dymola 후반기 교육",
//     maxPeople: 30,
//     minPeople: 1,
//     reservatedPeople: 10,
//     createdAt: "2025-10-01",
//     updatedAt: "2025-10-01",
//   },
//   {
//     id: 3,
//     reservationName: "Dymola 후반기 교육2",
//     startDate: "2025-10-31",
//     endDate: "2025-10-31",
//     reservationStatus: "OPEN",
//     reservationType: "EDUCATION",
//     cost: 1234,
//     reservationDescription: "Dymola 후반기 교육2",
//     maxPeople: 30,
//     minPeople: 1,
//     reservatedPeople: 10,
//     createdAt: "2025-10-01",
//     updatedAt: "2025-10-01",
//   },
// ];

const Training = () => {
  const seoData = useSEO("support/training", training);
  const { training_title, training_outline } = training;

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
    // 렌더시에 호출하도록
    fetchReservationList();
  }, []);

  return (
    <>
      <SEO {...seoData} />
      {/** Training 페이지 타이틀 영역  */}
      <Box
        display="flex"
        sx={(theme) => ({
          flexDirection: "column",
          position: "relative",
          my: 12,
          [theme.breakpoints.up("tablet")]: {
            mt: 24,
            mb: 16,
          },
        })}
      >
        <TrainingMainTitle titleList={training_title} />
        <Divider
          sx={{
            border: "1px solid #23A16F",
            position: "absolute",
            left: 0,
            bottom: -16,
            width: "30%",
          }}
        />
      </Box>

      {/** 개요, Curriculum, Schedule, Application 섹션 전체 컨테이너 */}
      <Box
        sx={(theme) => ({
          px: 4,
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            px: 20,
          },
        })}
      >
        {/** 개요 영역 */}
        <Box
          display="grid"
          sx={(theme) => ({
            gridTemplateColumns: "repeat(1,1fr)",
            [theme.breakpoints.up("tablet")]: {
              px: 5,
              gridTemplateColumns: "repeat(2,1fr)",
            },
            gap: 8,
            alignItems: "center",
            mb: 16,
          })}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={training_outline.image} style={{ maxWidth: "100%" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {training_outline.contents.map((content, index) => (
              <Typography
                key={index}
                sx={{
                  wordBreak: "keep-all",
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: "20px",
                  whiteSpace: "pre-line",
                }}
              >
                {content}
              </Typography>
            ))}
          </Box>
        </Box>

        {/** Curriculum 섹션 */}
        <Box
          sx={{
            maxWidth: "1500px",
            width: "100%",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <GradientSectionLabel labelText="Curriculum" />
          <TraingCurriculumTable
            reservationList={apiReservationList}
            curriculums={training_curriculums}
          />
        </Box>

        {/** Schedule 섹션 */}
        <Box
          sx={{
            maxWidth: "1500px",
            width: "100%",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <GradientSectionLabel labelText="Schedule" />
          <CalendarLegend />
          <Calendar reservationList={apiReservationList} />
        </Box>

        {/** Application 섹션 */}
        <Box
          sx={{
            maxWidth: "1500px",
            width: "100%",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <GradientSectionLabel labelText="Application" />
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
