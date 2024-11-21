import Modal from "react-modal";
import "../../../css/Modal.css";

const CalendarModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Calendar Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false} // For accessibility, set false for this example
    >
      <h2 className="modal-title">모달 창</h2>

      {/* 제목 입력 */}
      <div className="form-group">
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력하세요"
          className="input-field"
        />
      </div>

      {/* 내용 입력 */}
      <div className="form-group">
        <label htmlFor="content">내용:</label>
        <textarea
          id="content"
          placeholder="내용을 입력하세요"
          className="textarea-field"
        ></textarea>
      </div>

      {/* 파일 첨부 */}
      <div className="form-group">
        <label htmlFor="file">첨부파일:</label>
        <input type="file" id="file" className="file-input" />
      </div>

      {/* 모달 하단 버튼 */}
      <div className="modal-footer">
        <button className="close-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </Modal>
  );
};

export default CalendarModal;
