import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Box } from "@mui/material";

import { RESERVATION_STATUS_COLOR } from "../../utils/constants";

import type { EventContentArg, EventInput } from "@fullcalendar/core/index.js";
import "../../style/support/training-calendar.css";
import type {
  ReservationResponse,
  ReservationStatus,
} from "../../types/reservation";
import { useState } from "react";
import CustomModal from "./CustomModal";
import CalendarModalContent from "./CalendarModalContent";

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

const Calendar = ({
  reservationList,
}: {
  reservationList: ReservationResponse[] | null;
}) => {
  const [selectedReservation, setSelectedReservation] =
    useState<ReservationResponse | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
      (el) => el.id.toString() === eventId
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
              backgroundColor: RESERVATION_STATUS_COLOR[props.status].color,
              borderRadius: "15px",
            }}
          />
        )}
        <span
          className="fc-event-title"
          style={{ fontSize: "14px", fontFamily: "Freesentation-6-SemiBold" }}
        >{`${eventInfo.event.title} (${props.reservatedPeople}/${props.maxPeople})`}</span>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="auto"
        timeZone="UTC"
        headerToolbar={{
          start: "prev next today",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        locale={"ko"}
        events={formattingEvent(reservationList)}
        eventContent={renderEventContent}
      />
      <CustomModal open={isModalOpen} onClose={handleModalClose}>
        <CalendarModalContent reservation={selectedReservation} />
      </CustomModal>
    </Box>
  );
};

export default Calendar;
