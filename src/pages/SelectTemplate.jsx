import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import templates from "./templates";
import { AppContext } from "../context";

const SelectTemplate = () => {
  const navigate = useNavigate();
  const { templateData, setTemplateData } = useContext(AppContext);

  const handleSelect = () => {
    let poster_name = document
      .querySelector(".swiper-slide-active")
      .getAttribute("template-name");
    setTemplateData({
      ...templateData,
      poster_name: poster_name,
    });
    navigate("/doctor-information");
  };

  return (
    <div className="w-full relative py-4 px-8 flex flex-col gap-4 grow items-center">
      <h4 className="text-theme_purple-500 font-bold text-2xl text-center">
        Template View
      </h4>
      <div className="w-[80%]">
        <Swiper
          className="mySwiper border-dashed border-theme_green-300 bg-slate-100"
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {templates.map((temp, index) => {
            return (
              <SwiperSlide key={index} template-name={temp.name}>
                <img src={`${temp.path}`} alt="img" className="w-full" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-button-prev prev swiperBtn">Prev</div>
        <div className="swiper-button-next next swiperBtn">Next</div>
      </div>
      <button className="btn w-full" onClick={handleSelect}>
        Select Template
      </button>
    </div>
  );
};
export default SelectTemplate;
