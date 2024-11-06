import { useState, useEffect } from "react";

const Tap = ({ tapNo }) => {
  const [tapState, setTapState] = useState("");

  useEffect(() => {
    switch (tapNo) {
      case 0:
        setTapState("tep0");
        break;
      case 1:
        setTapState("tep1");
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

  return <div>{tapState}</div>;
};

export default Tap;
