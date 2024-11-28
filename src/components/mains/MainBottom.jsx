import Button from "../common/button/Button";

const MainBottom = () => {
  const text = "롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸롸";

  return (
    <div className="mainBottom">
      <div className="mainBottomText">{text}</div>
      <div className="mainButton">
        <Button btnNo={1} /> <Button btnNo={2} />
      </div>
    </div>
  );
};

export default MainBottom;
