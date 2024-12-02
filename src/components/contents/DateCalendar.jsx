import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interation from "@fullcalendar/interaction";
import "../../css/Calendar.css";
import Swal from "sweetalert2";
import { useState } from "react";
import CalendarModal from "../common/modal/CalendarModal";
import { getNowDate, getYearMonth } from "../../js/date/nowDate";
import axios from "axios";
import { useEffect } from "react";

const DateCalendar = () => {
  const [modalState, setModalState] = useState(false);
  const [thisDate, setThisDate] = useState("");
  const [calendarData, setCalendarData] = useState([]);
  const [userCalData, setUserCalData] = useState(null);

  useEffect(() => {
    //이번달
    const nowYm = getYearMonth(new Date());
    let calData = [];

    axios
      .post("http://localhost:8080/calendar/getInfoList", {
        search_month: nowYm,
        memb_no: 1,
      })
      .then((response) => {
        if (response.status === 200) {
          Array.from(response.data).map((item) => {
            let jsonData = Object();
            jsonData.title = item.title;
            jsonData.date = item.calendar_date;
            jsonData.cal_content = item.cal_content;
            jsonData.contents_no = item.contents_no;
            calData.push(jsonData);
          });
          setCalendarData(calData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //일정클릭
  const eventClick = (e) => {
    const data = {
      title: e.event.title,
      date: e.event.start,
      cal_content: e.event.extendedProps.cal_content,
      contents_no: e.event.extendedProps.contents_no,
    };
    setUserCalData(data);
    setModalState(true);
  };

  const dayClick = (e) => {
    setUserCalData(null);
    setThisDate(e.dateStr);
    setModalState(true);
  };

  const modalClose = () => {
    setModalState(false);
  };

  const removeDayTxt = (arg) => {
    return arg.dayNumberText.replaceAll("일", "");
  };

  const dropEvent = (e) => {
    const beforDate = getNowDate(e.oldEvent.start);
    const afterDate = getNowDate(e.event.start);
    const contents_no = e.oldEvent.extendedProps.contents_no;
    axios
      .patch("http://localhost:8080/calendar/schd/modify", {
        modify_date: afterDate,
        calendar_date: beforDate,
        contents_no: contents_no,
      })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "변경이 완료되었습니다.",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };
  return (
    <div id="calendar-container">
      {modalState && (
        <CalendarModal
          thisDate={thisDate}
          isOpen={modalState}
          onClose={modalClose}
          userCalData={userCalData}
        />
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interation, timeGridPlugin]}
        initialView="dayGridMonth"
        height="auto"
        headerToolbar={{
          start: "prev next",
          center: "title",
          end: "dayGridMonth dayGridWeek",
        }}
       
        events={calendarData}
        eventClick={eventClick}
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
