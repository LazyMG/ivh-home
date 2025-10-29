import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Box, Modal, Typography } from "@mui/material";

import { RESERVATION_STATUS_COLOR } from "../../utils/constants";

import type { EventContentArg, EventInput } from "@fullcalendar/core/index.js";
import "../../style/support/training-calendar.css";
import type {
  ReservationResponse,
  ReservationStatus,
} from "../../types/reservation";
import { useState } from "react";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
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
    console.log(reservation);
    if (reservation) {
      // 모달을 여는 등의 이벤트
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
        headerToolbar={{
          start: "prev next today",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        locale={"ko"}
        events={formattingEvent(reservationList)}
        eventContent={renderEventContent}
      />
      <Box>
        <Modal
          open={isModalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {selectedReservation && (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {selectedReservation.reservationName}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  최대 인원: {selectedReservation.maxPeople}
                </Typography>
                <Typography id="modal-modal-description">
                  현재 인원: {selectedReservation.reservatedPeople}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Calendar;
