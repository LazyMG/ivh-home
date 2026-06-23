import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Box, ButtonBase, IconButton } from "@mui/material";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

import { RESERVATION_STATUS_COLOR } from "../../utils/constants";

import type {
  DatesSetArg,
  EventContentArg,
  EventInput,
} from "@fullcalendar/core/index.js";
import "../../style/support/training-calendar.css";
import type {
  ReservationResponse,
  ReservationStatus,
} from "../../types/reservation";
import { useRef, useState } from "react";
import CustomModal from "./CustomModal";
import CalendarModalContent from "./CalendarModalContent";
import CalendarLegend from "./CalendarLegend";

// 캘린더 뷰 전환 버튼 정의
const VIEW_BUTTONS = [
  { label: "DAY", view: "dayGridDay" },
  { label: "WEEK", view: "dayGridWeek" },
  { label: "MONTH", view: "dayGridMonth" },
] as const;

// 왼쪽 툴바 버튼 색상 (이동/활성 뷰 버튼)
const TOOLBAR_ACCENT = "#03193F";
const TOOLBAR_BTN_SHADOW = "1px 2px 2px 0 rgba(0, 0, 0, 0.25)";

// 캘린더에 사용되는 이벤트 디자인을 위한 타입
interface ExtendedCalendarEventProps {
  status: ReservationStatus;
  maxPeople: number;
  reservatedPeople: number;
}

// api를 통해 받은 교육 일정을 캘린더 형식에 맞게 변형하는 함수
const formattingEvent = (dataList: ReservationResponse[] | null) => {
  if (!dataList) return [];
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

const formatTimeWithPeriod = (date: Date | null): string => {
  if (!date) return "";

  const hours = date.getHours();
  const period = hours < 12 ? "오전" : "오후";
  const displayHours = hours % 12 || 12;

  return `${period} ${displayHours}시`;
};

const Calendar = ({
  reservationList,
}: {
  reservationList: ReservationResponse[] | null;
}) => {
  const [selectedReservation, setSelectedReservation] =
    useState<ReservationResponse | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 캘린더 코어 제어용 ref (내장 툴바 대신 커스텀 툴바에서 사용)
  const calendarRef = useRef<FullCalendar>(null);
  const [currentView, setCurrentView] = useState<string>("dayGridMonth");

  const getApi = () => calendarRef.current?.getApi();

  // 뷰 전환/날짜 이동 시 현재 뷰 타입 동기화 (활성 버튼 표시용)
  const handleDatesSet = (arg: DatesSetArg) => {
    setCurrentView(arg.view.type);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // 같은 이벤트 ID 클래스를 가진 모든 요소에 hovered 클래스를 추가/제거하여 호버 효과 적용
  const handleMouseEnter = (eventId: string) => {
    const elements = document.querySelectorAll(`.event-${eventId}`);
    elements.forEach((el) => el.classList.add("hovered"));
  };

  const handleMouseLeave = (eventId: string) => {
    const elements = document.querySelectorAll(`.event-${eventId}`);
    elements.forEach((el) => el.classList.remove("hovered"));
  };

  const handleClickReservation = (eventId: string) => {
    if (!reservationList) return;
    const reservation = reservationList.find(
      (el) => el.id.toString() === eventId,
    );
    if (reservation) {
      setIsModalOpen(true);
      setSelectedReservation(reservation);
    }
  };

  // 이벤트 커스텀 렌더링 함수
  const renderEventContent = (eventInfo: EventContentArg) => {
    const props = eventInfo.event.extendedProps as ExtendedCalendarEventProps;

    const showIcon = eventInfo.isStart;

    return (
      <Box
        className={`calendar-event event-${eventInfo.event.id}`}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          cursor: "pointer",
        }}
        onMouseEnter={() => handleMouseEnter(eventInfo.event.id)}
        onMouseLeave={() => handleMouseLeave(eventInfo.event.id)}
        onClick={() => handleClickReservation(eventInfo.event.id)}
      >
        {showIcon && (
          <div
            style={{
              minWidth: "10px",
              height: "16px",
              backgroundColor:
                RESERVATION_STATUS_COLOR[props.status]?.color || "transparent",
              borderRadius: "15px",
            }}
          />
        )}
        <span
          className="fc-event-title"
          style={{ fontSize: "14px", fontFamily: "Freesentation-6-SemiBold" }}
        >{`${formatTimeWithPeriod(eventInfo.event.start)} ${
          eventInfo.event.title
        } (${props.reservatedPeople}/${props.maxPeople})`}</span>
      </Box>
    );
  };

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "none",
        flexDirection: "column",
        mt: 6,
        [theme.breakpoints.up("tablet")]: {
          display: "flex",
        },
      })}
    >
      {/* 커스텀 툴바: 왼쪽=이동/뷰 버튼, 오른쪽=legend (내장 툴바 대체) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* 이전/다음 (원형 버튼) */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              aria-label="이전"
              onClick={() => getApi()?.prev()}
              sx={{
                width: 45,
                height: 45,
                border: `1px solid ${TOOLBAR_ACCENT}`,
                color: TOOLBAR_ACCENT,
                boxShadow: TOOLBAR_BTN_SHADOW,
                p: 0,
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              <ArrowLeftRoundedIcon sx={{ fontSize: 48 }} />
            </IconButton>
            <IconButton
              aria-label="다음"
              onClick={() => getApi()?.next()}
              sx={{
                width: 45,
                height: 45,
                border: `1px solid ${TOOLBAR_ACCENT}`,
                color: TOOLBAR_ACCENT,
                boxShadow: TOOLBAR_BTN_SHADOW,
                p: 0,
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              <ArrowRightRoundedIcon sx={{ fontSize: 48 }} />
            </IconButton>
          </Box>

          {/* 뷰 전환 (DAY / WEEK / MONTH, 둥근 사각형) */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {VIEW_BUTTONS.map((btn) => {
              const isActive = currentView === btn.view;
              return (
                <ButtonBase
                  key={btn.view}
                  onClick={() => getApi()?.changeView(btn.view)}
                  sx={{
                    minWidth: 120,
                    height: 36,
                    px: 3,
                    borderRadius: "999px",
                    fontFamily: "Freesentation-7-Bold",
                    fontSize: "16px",
                    border: "1px solid",
                    borderColor: TOOLBAR_ACCENT,
                    backgroundColor: isActive ? TOOLBAR_ACCENT : "#fff",
                    color: isActive ? "#fff" : TOOLBAR_ACCENT,
                    boxShadow: TOOLBAR_BTN_SHADOW,
                    transition: "all 0.15s ease",
                    "&:hover": {
                      backgroundColor: isActive ? TOOLBAR_ACCENT : "#f5f5f5",
                    },
                  }}
                >
                  {btn.label}
                </ButtonBase>
              );
            })}
          </Box>
        </Box>

        {/* legend (툴바와 같은 행, 오른쪽 끝) */}
        <CalendarLegend showToday sx={{ mt: 0 }} />
      </Box>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="auto"
        headerToolbar={false}
        datesSet={handleDatesSet}
        locale={"ko"}
        events={formattingEvent(reservationList)}
        eventContent={renderEventContent}
        hiddenDays={[0, 6]}
        showNonCurrentDates={false}
        fixedWeekCount={false}
      />
      <CustomModal open={isModalOpen} onClose={handleModalClose}>
        <CalendarModalContent reservation={selectedReservation} />
      </CustomModal>
    </Box>
  );
};

export default Calendar;
