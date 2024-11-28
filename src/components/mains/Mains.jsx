import { motion, useMotionValue, useTransform } from "framer-motion";
import "../../css/Main.css";
import { getIconImages } from "../../js/icon/icon";
import MainTop from "../../components/mains/MainTop";
import MainMiddle from "../../components/mains/MainMiddle";
import MainBottom from "../../components/mains/MainBottom";

const Main = () => {
  return (
    <main className="main">
      <img src={getIconImages(10)} id="mainImgs" />
      {/* <MainTop />
      <MainMiddle />
      <MainBottom /> */}
    </main>
  );
};

export default Main;
