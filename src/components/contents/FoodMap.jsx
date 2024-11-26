import "../../css/FoodMap.css";
import { useEffect } from "react";

const FoodMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const kakaoJavaScriptKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoJavaScriptKey}&libraries=services,clusterer`;
    script.async = true;
    script.onload = () => {};
  }, []);

  return (
    <div id="foodMapDiv">
      <div id="titleDiv">Food Map</div>
      <div id="mapContainer">
        <div id="kakaoMapDiv"></div>
        <div id="sideContentDiv">
          <p>여기에 추가할 내용을 넣을 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default FoodMap;
