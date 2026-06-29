import type { ReservationResponse } from "../../types/reservation";

import { Box, Typography } from "@mui/material";

import TrainingMainTitle from "../../components/support/TrainingMainTitle";
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
import SectionTitle from "../../components/common/SectionTitle";
import BreadScrum from "../../common/BreadScrum";

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
        component="main"
        sx={(theme) => ({
          position: "relative",
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
        <BreadScrum
          pageKey="training"
          sx={{ position: "absolute", top: "-24px", right: "8%" }}
        />
        {/** 개요 영역 */}
        <Box
          display="grid"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 8,
            px: 8,
            mb: 16,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={training_outline.image}
              alt={training_outline.image_alt}
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            sx={(theme) => ({
              mt: 6,
              display: "none",
              [theme.breakpoints.up("desktop")]: {
                display: "block",
              },
            })}
          >
            <TrainingMainTitle titleList={training_title} />
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
          <Box
            sx={{
              my: 6,
              borderTop: "1px dashed #C9C9C9",
              width: "100%",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {training_outline.contents.map((content, index) => (
              <Typography
                key={index}
                sx={{
                  wordBreak: "keep-all",
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: "20px",
                  whiteSpace: "pre-line",
                  color: "#424242",
                }}
              >
                {content}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              width: "100%",
              mt: 6,
            }}
          >
            {[
              "/images/pages/support/training/training_session_1.png",
              "/images/pages/support/training/training_session_2.png",
              "/images/pages/support/training/training_session_3.png",
            ].map((src) => (
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
            display: "none",
            flexDirection: "column",
            mb: 16,
            [theme.breakpoints.up("tablet")]: {
              display: "flex",
            },
          })}
        >
          <SectionTitle text="Curriculum" />
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
          <SectionTitle text="Schedule" />
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
          <SectionTitle text="Application" />
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
