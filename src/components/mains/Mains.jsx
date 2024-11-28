import { motion, useMotionValue, useTransform } from "framer-motion";
import "../../css/Main.css";
import MainTop from "../../components/mains/MainTop";
import MainMiddle from "../../components/mains/MainMiddle";
import MainBottom from "../../components/mains/MainBottom";

const Main = () => {
  return (
    <main className="main">
      <MainTop />
      <MainMiddle />
      <MainBottom />
    </main>
  );
};

export default Main;
