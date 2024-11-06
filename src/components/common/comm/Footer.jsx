import "../../../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <span>개인정보처리방침</span> |<span>이용약관</span> |
        <span>제휴문의</span> |<span>자주 묻는 질문</span>
      </div>
      <div className="footer-info">
        <span>한국어</span> |<span>CEO : Minha Hwang</span> |
        <span>Address : 04000, 35, World Cup buk-ro Mapo-gu, Seoul</span> |
        <span>804-88-02029</span>
      </div>
      <div className="footer-copyright">
        <p>Copyright © Monymony Corp. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
