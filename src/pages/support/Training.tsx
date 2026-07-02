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
import FullBleedSectionTitle from "../../components/support/FullBleedSectionTitle";
import BreadScrum from "../../common/BreadScrum";
import { FONTS } from "../../theme/theme";

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
              alt={training_outline.image_alt}
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
            <TrainingMainTitle titleList={training_title} />
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
            {training_outline.contents.map((content, index) => (
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
