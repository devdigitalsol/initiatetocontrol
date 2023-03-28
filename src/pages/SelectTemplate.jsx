import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TEMP1 from "./../assets/thumbs/1.jpg";
import { useNavigate } from "react-router-dom";
const SelectTemplate = () => {
  const navigate = useNavigate();
  const handleSelect = () => {
    navigate("/doctor-information");
    // let poster_name = document
    //   .querySelector(".swiper-slide-active")
    //   .getAttribute("template-name");
    // console.log(poster_name);
  };

  return (
    <div className="w-full relative py-4 px-8 flex flex-col gap-4 grow items-center">
      <h4 className="text-theme_purple-500 font-bold text-2xl text-center">
        Template View
      </h4>
      <div className="w-[80%]">
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide template-name="temp1">
            <img src={TEMP1} alt="temp1" className="w-full" />
          </SwiperSlide>
          {/* <SwiperSlide template-name="temp2">
            <img src={TEMP1} alt="temp2" className="w-full" />
          </SwiperSlide> */}
        </Swiper>
        <div className="swiper-button-prev prev swiperBtn"></div>
        <div className="swiper-button-next next swiperBtn"></div>
      </div>
      <button className="btn w-full" onClick={handleSelect}>
        Select Template
      </button>
    </div>
  );
};
export default SelectTemplate;
