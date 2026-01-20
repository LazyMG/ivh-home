import type { ReservationResponse } from "../../types/reservation";

import { Box, Typography } from "@mui/material";

import TrainingMainTitle from "../../components/support/TrainingMainTitle";
import GradientSectionLabel from "../../components/support/GradientSectionLabel";
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
import ScrollButton from "../../common/ScrollButton";
import MobileScheduleContainer from "../../components/support/MobileScheduleContainer";

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

  const THRESHOLD = 100;

  return (
    <>
      <SEO {...seoData} />
      <ScrollButton threshold={THRESHOLD} />

      {/** 개요, Curriculum, Schedule, Application 섹션 전체 컨테이너 */}
      <Box
        sx={(theme) => ({
          px: 4,
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            px: 20,
            mb: 24,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            mt: 10,
            mb: 8,
            display: "none",
            [theme.breakpoints.up("desktop")]: {
              display: "block",
            },
          })}
        >
          <TrainingMainTitle titleList={training_title} />
        </Box>
        {/** 개요 영역 */}
        <Box
          display="grid"
          sx={(theme) => ({
            gridTemplateColumns: "repeat(1,1fr)",
            gap: 4,
            alignItems: "center",
            my: 12,
            [theme.breakpoints.up("desktop")]: {
              px: 5,
              gridTemplateColumns: "repeat(2,1fr)",
              mt: 8,
              mb: 16,
              gap: 8,
            },
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
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",
              [theme.breakpoints.up("desktop")]: {
                display: "none",
              },
            })}
          >
            <TrainingMainTitle titleList={training_title} />
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
          sx={(theme) => ({
            width: "100%",
            margin: "50px auto",
            display: "none",
            flexDirection: "column",
            mb: 16,
            [theme.breakpoints.up("tablet")]: {
              display: "flex",
            },
          })}
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
            width: "100%",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            mb: 16,
          }}
        >
          <GradientSectionLabel labelText="Schedule" />
          <Calendar reservationList={apiReservationList} />
          <MobileScheduleContainer reservationList={apiReservationList} />
        </Box>

        {/** Application 섹션 */}
        <Box
          sx={{
            width: "100%",
            margin: "50px auto",
            flexDirection: "column",
            gap: 4,
            display: "flex",
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
