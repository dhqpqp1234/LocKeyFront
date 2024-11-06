import { useState } from "react";
import Header from "./components/common/comm/Header";
import Footer from "./components/common/comm/Footer";
import Main from "./components/main/Main";
import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
