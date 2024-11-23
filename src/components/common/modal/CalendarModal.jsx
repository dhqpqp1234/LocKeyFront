import Modal from "react-modal";
import "../../../css/Modal.css";
import Swal from "sweetalert2";
import { getNowDate } from "../../../js/date/nowDate";
import { useState, useEffect } from "react";
import axios from "axios";

const CalendarModal = ({ isOpen, onClose }) => {
  const [fileName, setFileName] = useState("");
  const [nowDate, setNowDate] = useState(getNowDate());

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const fileNamesArray = Array.from(files).map((file) => file.name);
      setFileName(fileNamesArray); // 여러 파일의 이름을 상태로 저장
    }
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
      title: title,
      content: content,
      calendar_date: nowDate,
      content_type: "C",
    };

    axios
      .post("http://localhost:8080/calrendar/schd/register", request)
      .then((response) => {
        console.log(response);
        if (response.data.status === "OK") {
          Swal.fire({
            icon: "success",
            title: "등록이 완료되었습니다.",
          });
          onClose();
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
      <h2 className="modal-title">{nowDate}</h2>

      {/* 제목 입력 */}
      <div className="form-group">
        {/* <label htmlFor="title">제목:</label> */}
        <input
          type="text"
          id="title"
          placeholder="제목을 입력하세요"
          className="input-field"
        />
      </div>

      {/* 내용 입력 */}
      <div className="form-group">
        {/* <label htmlFor="content">내용:</label> */}
        <textarea
          id="content"
          placeholder="내용을 입력하세요"
          className="textarea-field"
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
        <button className="close-btn" onClick={register}>
          등록
        </button>
        <button className="close-btn" onClick={onClose}>
          취소
        </button>
      </div>
    </Modal>
  );
};

export default CalendarModal;
