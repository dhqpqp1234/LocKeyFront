import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interation from "@fullcalendar/interaction";
import "../../css/Calendar.css";
import Swal from "sweetalert2";
import { useState } from "react";
import CalendarModal from "../common/modal/CalendarModal";

const DateCalendar = () => {
  const [modalState, setModalState] = useState(false);

  const dayClick = (e) => {
    setModalState(true);
  };

  const modalClose = () => {
    setModalState(false);
  };

  const removeDayTxt = (arg) => {
    return arg.dayNumberText.replaceAll("일", "");
  };

  const dropEvent = (e) => {
    Swal.fire({
      icon: "info",
      title: e,
    });
  };
  return (
    <div id="calendar-container">
      {modalState && <CalendarModal isOpen={modalState} onClose={modalClose} />}
      <FullCalendar
        plugins={[dayGridPlugin, interation, timeGridPlugin]}
        initialView="dayGridMonth"
        height="auto"
        headerToolbar={{
          start: "prev next",
          center: "title",
          end: "dayGridMonth dayGridWeek",
        }}
        locale={"ko"}
        events={[
          { title: "Event 1", date: "2024-11-05" },
          { title: "Event 2", date: "2024-11-20" },
        ]}
        dateClick={dayClick}
        editable={true}
        droppable={true}
        footerToolbar={{
          left: "prev",
          center: "",
          right: "next",
        }}
        eventDrop={dropEvent}
        dayCellContent={removeDayTxt}
      />
    </div>
  );
};

export default DateCalendar;
