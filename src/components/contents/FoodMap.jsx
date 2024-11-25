import "../../css/FoodMap.css";
import { useEffect } from "react";

const FoodMap = () => {
  useEffect(() => {
    // Kakao Maps API 스크립트 로드
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
    }&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      // 카카오 맵 로드 후 실행
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("kakaoMapDiv");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
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
