import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Tap = ({ tapNo }) => {
  const [tapState, setTapState] = useState("");
  const [tapNav, setTapNav] = useState("");
  const navigate = useNavigate();

  const memb_no = sessionStorage.getItem("memb_no");
  console.log(memb_no);

  useEffect(() => {
    switch (tapNo) {
      case 0:
        setTapState("MAP");
        setTapNav("/map");
        break;
      case 1:
        setTapState("CALENDAR");
        setTapNav("/calendar");
        break;
      case 2:
        setTapState("tep2");
        break;
      case 3:
        setTapState("tep3");
        break;
      case 4:
        setTapState("tep4");
        break;
    }
  }, [tapNo]);

  const tapClick = (e) => {
    if (!memb_no) {
      e.preventDefault();
      Swal.fire({
        icon: "warning",
        title: "로그인을 해주세요.",
      });
      navigate("/");
    }
  };

  return (
    <Link className="headerTaps" to={tapNav} onClick={tapClick}>
      {tapState}
    </Link>
  );
};

export default Tap;
