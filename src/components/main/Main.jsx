import { motion, useMotionValue, useTransform } from "framer-motion";
import "../../css/Main.css";
import MainTop from "../../components/main/MainTop";
import MainMiddle from "../../components/main/MainMiddle";
import MainBottom from "../../components/main/MainBottom";

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
