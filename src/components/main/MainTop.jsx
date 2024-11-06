import { getIconImages } from "../../js/icon/icon.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MainTop = () => {
  const imageIds = Array(9)
    .fill()
    .map((_, index) => {
      return [2, 3, 4][index % 3];
    });

  return (
    <>
      <h2>TEMPLATE</h2>
      <div className="mainTop">
        <Swiper spaceBetween={50} slidesPerView={3}>
          {imageIds.map((imageId, index) => (
            <SwiperSlide key={index}>
              <img
                style={{ width: "474px", height: "474px" }}
                src={getIconImages(imageId)}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainTop;
