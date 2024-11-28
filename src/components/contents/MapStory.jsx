import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoData from "../../assets/koreaData.json";
import { useState, useRef } from "react";
import "../../css/MapStory.css";
import { geoPath, geoCentroid, geoMercator } from "d3-geo";

const MapStory = () => {
  const [zoom, setZoom] = useState(4000);
  const [center, setCenter] = useState([127.6, 37.5]);
  const width = window.innerWidth;
  const height = 750;
  const isDragging = useRef(false);
  const lastPosition = useRef([0, 0]);

  const maxZoom = 80000;
  const minZoom = 3000;
  const offsetX = 480;
  const offsetY = 124;
  const wheelZoom = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      setZoom((zoom) => Math.min(zoom * 1.1, maxZoom));
    } else {
      setZoom((zoom) => Math.max(zoom / 1.1, minZoom));
    }
  };

  const mouseDown = (event) => {
    isDragging.current = true;
    lastPosition.current = [event.clientX, event.clientY];
  };

  const mouseMove = (event) => {
    if (isDragging.current) {
      const deltaX = event.clientX - lastPosition.current[0];
      const deltaY = event.clientY - lastPosition.current[1];

      setCenter((prevCenter) => [
        prevCenter[0] - deltaX * 0.005,
        prevCenter[1] + deltaY * 0.005,
      ]);

      lastPosition.current = [event.clientX, event.clientY];
    }
  };

  const mouseUp = () => {
    isDragging.current = false;
  };

  const projection = geoMercator().scale(zoom).center(center);

  return (
    <div
      style={{
        width: "100%",
        height: "750px",
        margin: "0 auto",
        position: "relative",
      }}
      id="mapDiv"
      onWheel={wheelZoom}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
      onMouseLeave={mouseUp}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: zoom,
          center: center,
        }}
        width={width}
        height={height}
        style={{
          position: "absolute",
          left: 0,
        }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const regionName = geo.properties.SIG_KOR_NM;
              const pathGenerator = geoPath().projection(projection);
              const bounds = pathGenerator.bounds(geo);

              // 중심 좌표 계산
              const [x, y] = centroid;
              const [xMin, yMin, xMax, yMax] = [
                bounds[0][0],
                bounds[0][1],
                bounds[1][0],
                bounds[1][1],
              ];

              const labelX = (xMin + xMax) / 2;
              const labelY = (yMin + yMax) / 2;

              return (
                <g key={geo.rsmKey}>
                  <Geography geography={geo} fill="#fff" stroke="#000" />
                  <text
                    // x={labelX}
                    // y={labelY}
                    x={labelX + offsetX} // x 값에 offsetX 추가
                    y={labelY + offsetY} // y 값에 offsetY 추가
                    textAnchor="middle"
                    fontSize={5}
                    style={{
                      pointerEvents: "none",
                    }}
                    fill="#000"
                    dy={5}
                  >
                    {regionName}
                  </text>
                </g>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapStory;
