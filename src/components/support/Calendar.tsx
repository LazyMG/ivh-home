import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Box } from "@mui/material";

import { RESERVATION_STATUS_COLOR } from "../../utils/constants";

import type { EventContentArg, EventInput } from "@fullcalendar/core/index.js";
import type { ExtendedCalendarEventProps } from "../../pages/support/Training";
import "../../style/support/training-calendar.css";

const Calendar = ({ events }: { events: EventInput[] }) => {
  // 같은 이벤트 ID 클래스를 가진 모든 요소에 hovered 클래스를 추가/제거하여 호버 효과 적용
  const handleMouseEnter = (eventId: string) => {
    const elements = document.querySelectorAll(`.event-${eventId}`);
    elements.forEach((el) => el.classList.add("hovered"));
  };

  const handleMouseLeave = (eventId: string) => {
    const elements = document.querySelectorAll(`.event-${eventId}`);
    elements.forEach((el) => el.classList.remove("hovered"));
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
        onClick={() => console.log(eventInfo.event.title)}
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
        // events={[
        //   {
        //     title: "오전 6시 VTD 후반기 교육",
        //     date: "2025-10-01",
        //     end: "2025-10-09",
        //   },
        //   { title: "오전 6시 Dymola 후반기 교육", date: "2025-10-12" },
        // ]}
        events={events}
        eventContent={renderEventContent}
      />
    </Box>
  );
};

export default Calendar;
