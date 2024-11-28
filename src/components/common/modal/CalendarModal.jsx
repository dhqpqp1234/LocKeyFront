import Modal from "react-modal";
import "../../../css/Modal.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { getNowDate } from "../../../js/date/nowDate";
import axios from "axios";

const CalendarModal = ({ isOpen, onClose, thisDate, userCalData }) => {
  const [fileName, setFileName] = useState("");
  const [userTitle, setUserTitle] = useState(
    userCalData ? userCalData.title : ""
  );
  const [userContent, setUserContent] = useState(
    userCalData ? userCalData.cal_content : ""
  );
  const [userThisDate, setUserThisDate] = useState(
    userCalData ? getNowDate(userCalData.date) : ""
  );

  const inputChange = (e) => {
    switch (e.target.id) {
      case "title":
        setUserTitle(e.target.value);
        break;
      case "content":
        setUserContent(e.target.value);
        break;
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const fileNamesArray = Array.from(files).map((file) => file.name);
      setFileName(fileNamesArray); // 여러 파일의 이름을 상태로 저장
    }
  };

  const modify = () => {
    const request = {
      contents_no: userCalData.contents_no,
      title: document.getElementById("title").value,
      cal_content: document.getElementById("content").value,
    };

    axios
      .patch("http://localhost:8080/calendar/schd/modify", request)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "수정되었습니다.",
          });
          onClose();
          setInterval(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteCal = () => {
    const request = {
      contents_no: userCalData.contents_no,
      use_at: "N",
    };

    axios
      .patch("http://localhost:8080/calendar/schd/modify", request)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "삭제되었습니다.",
          });
          onClose();
          setInterval(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const register = () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title === "") {
      Swal.fire({
        icon: "warning",
        title: "제목을 입력해주세요.",
      });
      return;
    }

    if (content === "") {
      Swal.fire({
        icon: "warning",
        title: "본문을 입력해주세요.",
      });
      return;
    }

    const request = {
      memb_no: 1, //임시
      title: title,
      cal_content: content,
      calendar_date: thisDate,
      content_type: "C", //임시
    };

    axios
      .post("http://localhost:8080/calendar/schd/register", request)
      .then((response) => {
        if (response.data.status === "OK") {
          Swal.fire({
            icon: "success",
            title: "등록이 완료되었습니다.",
          });
          onClose();
          setInterval(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "등록중 문제가 발생했습니다.",
        });
        console.error(error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Calendar Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
      id="contentsModal"
    >
      <h2 className="modal-title" id="thisDate">
        {userThisDate ? userThisDate : thisDate}
      </h2>

      {/* 제목 입력 */}
      <div className="form-group">
        {/* <label htmlFor="title">제목:</label> */}
        <input
          type="text"
          id="title"
          placeholder="제목을 입력하세요"
          className="input-field"
          value={userTitle}
          onChange={inputChange}
        />
      </div>

      {/* 내용 입력 */}
      <div className="form-group">
        {/* <label htmlFor="content">내용:</label> */}
        <textarea
          id="content"
          placeholder="내용을 입력하세요"
          className="textarea-field"
          value={userContent}
          onChange={inputChange}
        ></textarea>
      </div>

      {/* 파일 첨부 */}
      {/* <div className="file-container">
        <div className="file-list">
          {fileName.length > 0 ? (
            fileName.map((file, index) => (
              <div key={index} className="file-item">
                {file}
              </div>
            ))
          ) : (
            <div className="file-item">파일을 첨부하세요.</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="file" className="file-label">
            <span>{fileName.length > 0 ? "파일 첨부 완료" : "파일 첨부"}</span>
            <input
              type="file"
              id="file"
              className="file-input"
              multiple
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div> */}

      {/* 모달 하단 버튼 */}
      <div className="modal-footer">
        <button className="close-btn" onClick={userCalData ? modify : register}>
          {userCalData ? "수정" : "등록"}
        </button>
        {userCalData ? (
          <button id="delete" className="close-btn" onClick={deleteCal}>
            삭제
          </button>
        ) : (
          ""
        )}
        <button className="close-btn" onClick={onClose}>
          취소
        </button>
      </div>
    </Modal>
  );
};

export default CalendarModal;
