import type { EventInput } from "@fullcalendar/core";
import type {
  ReservationResponse,
  ReservationStatus,
} from "../../types/reservation";

import { Box, Divider, Typography } from "@mui/material";

import TrainingMainTitle from "../../components/support/TrainingMainTitle";
import GradientSectionLabel from "../../components/support/GradientSectionLabel";
import CalendarLegend from "../../components/support/CalendarLegend";
import Calendar from "../../components/support/Calendar";
import TraingCurriculumTable from "../../components/support/TrainingCurriculumTable";
import ApplicationForm from "../../components/support/ApplicationForm";

import training from "../../data/support/training.json";
import curriculums from "../../data/support/curriculum.json";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../common/SEO";

// 캘린더에 사용되는 이벤트 디자인을 위한 타입
export interface ExtendedCalendarEventProps {
  status: ReservationStatus;
  maxPeople: number;
  reservatedPeople: number;
}

// api를 통해 받은 교육 일정을 캘린더 형식에 맞게 변형하는 함수
const formattingEvent = (dataList: ReservationResponse[]) => {
  const eventList: EventInput[] = dataList.map((data) => ({
    title: data.reservationName,
    start: data.startDate,
    end: data.endDate,
    id: data.id.toString(),
    extendedProps: {
      status: data.reservationStatus,
      maxPeople: data.maxPeople,
      reservatedPeople: data.reservatedPeople,
    } as ExtendedCalendarEventProps,
  }));
  return eventList;
};
// 임시 교육 일정 데이터
const reservations: ReservationResponse[] = [
  {
    id: 1,
    reservationName: "오전 6시 VTD 후반기 교육",
    startDate: "2025-10-02",
    endDate: "2025-10-09",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 1234,
    reservationDescription: "VTD 후반기 교육",
    maxPeople: 5,
    minPeople: 1,
    reservatedPeople: 5,
    createdAt: "2025-10-01",
    updatedAt: "2025-10-01",
  },
  {
    id: 2,
    reservationName: "오전 6시 Dymola 후반기 교육",
    startDate: "2025-10-12",
    endDate: "2025-10-12",
    reservationStatus: "CLOSED",
    reservationType: "EDUCATION",
    cost: 1234,
    reservationDescription: "Dymola 후반기 교육",
    maxPeople: 30,
    minPeople: 1,
    reservatedPeople: 10,
    createdAt: "2025-10-01",
    updatedAt: "2025-10-01",
  },
  {
    id: 3,
    reservationName: "오전 6시 Dymola 후반기 교육2",
    startDate: "2025-10-12",
    endDate: "2025-10-15",
    reservationStatus: "CLOSED",
    reservationType: "EDUCATION",
    cost: 1234,
    reservationDescription: "Dymola 후반기 교육2",
    maxPeople: 30,
    minPeople: 1,
    reservatedPeople: 10,
    createdAt: "2025-10-01",
    updatedAt: "2025-10-01",
  },
];

const Training = () => {
  const formattedEvents = formattingEvent(reservations);
  const seoData = useSEO("support/training", training);
  const { training_title, training_outline, training_title_image } = training;
  const { training_curriculums } = curriculums;

  {
    /** reservation 호출 기능 추가 필요 */
  }

  return (
    <>
      <SEO {...seoData} />
      {/** Training 페이지 타이틀 영역  */}
      <Box
        display="flex"
        sx={{
          mt: 24,
          mb: 16,
          flexDirection: "column",
          position: "relative",
        }}
      >
        <TrainingMainTitle titleList={training_title}>
          <Box
            component="img"
            src={training_title_image}
            sx={(theme) => ({
              position: "absolute",
              right: "-20%",
              [theme.breakpoints.up("tablet")]: {
                right: "-40%",
              },
              bottom: "-40%",
              zIndex: -1,
              maxWidth: "100%",
              width: "80%",
              objectFit: "contain",
            })}
          />
        </TrainingMainTitle>
        <Divider
          sx={{
            border: "1px solid #23A16F",
            position: "absolute",
            left: 0,
            bottom: -16,
            width: "40%",
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
                }}
              >
                {content}
              </Typography>
            ))}
          </Box>
        </Box>

        {/** Curriculum 섹션 */}
        <GradientSectionLabel labelText="Curriculum" />
        <TraingCurriculumTable curriculums={training_curriculums} />

        {/** Schedule 섹션 */}
        <GradientSectionLabel labelText="Schedule" />
        <Box
          sx={{
            maxWidth: "1500px",
            width: "100%",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CalendarLegend />
          <Calendar events={formattedEvents} />
        </Box>

        {/** Application 섹션 */}
        <GradientSectionLabel labelText="Application" />
        <ApplicationForm reservations={reservations} />
      </Box>
    </>
  );
};

export default Training;
