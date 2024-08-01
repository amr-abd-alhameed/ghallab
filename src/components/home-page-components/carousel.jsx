import React, { useRef, useState } from "react"; // Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./carousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper text-xl h-60 "
      >
        <SwiperSlide>
          غلاب: المكان الذي يضمن لك راحة البال في وداع أحبائك. نقدم لك مجموعة
          متنوعة من المقابر، تُلبّي احتياجاتك و رغباتك.
        </SwiperSlide>
        <SwiperSlide>
          غَلاَب: الراحة الأبدية لأحبائك في مُقرّ يليق بِهم. استكشف مُجموعة
          مُختارة من المقابر ، و أحجز ما يناسب احتياجاتك.
        </SwiperSlide>
        <SwiperSlide>
          غَلاَب: مكان يُقدّر حُبّك لِأحبائك و يُخَلّد ذكراهم بِشكل لائق. نُقدّم
          لك مُجموعة مُتنوّعة من خدمات المقبرة ، لِضمان راحة بالك.
        </SwiperSlide>

        <div className="slider-controler flex max-md:justify-center  gap-3  mt-16">
          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-prev static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {"<"}
          </div>

          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-next static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {">"}
          </div>
        </div>
      </Swiper>
    </>
  );
}
