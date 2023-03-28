import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TEMP1 from "./../assets/slider/1.png";
import TEMP2 from "./../assets/slider/2.png";
import TEMP3 from "./../assets/slider/3.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full relative">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={TEMP1} alt="temp1" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TEMP2} alt="temp1" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TEMP3} alt="temp1" className="w-full" />
          <div className="absolute w-full z-10 flex justify-end px-6 bottom-6">
            <Link to="select-template" className="btn">
              Next
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Home;
