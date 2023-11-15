// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionHeading from "../../../components/SectionHeading";
const Category = () => {
  return (
    <section>

        <div>
            <SectionHeading subheading={'From 11:00 AM to 10:00 PM'} heading={'Order Online'}>

            </SectionHeading>
        </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={img1} alt="" />{" "}
          <h3 className="text-3xl uppercase text-center -mt-16 shadow-xl text-white">
            SALADS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />{" "}
          <h3 className="text-3xl uppercase text-center -mt-16 shadow-xl text-white shadow">
            PIZZA
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />{" "}
          <h3 className="text-3xl uppercase text-center -mt-16 shadow-xl text-white shadow">
            SOUP
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />{" "}
          <h3 className="text-3xl uppercase text-center -mt-16 shadow-xl text-white shadow">
            DESERT
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />{" "}
          <h3 className="text-3xl uppercase text-center -mt-16 shadow-xl text-white shadow">
            SALADS
          </h3>{" "}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
