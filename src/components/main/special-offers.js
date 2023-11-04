import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// SwiperCore.use([Navigation, Pagination, Autoplay]);

function SpecialOffers() {
  const images = [
    "/assets/offer.png",
    "/assets/offer1.png",
    "/assets/offer2.png",
    "/assets/offer3.png",
  ];
  return (
    <>
      <div className="flex font-bold justify-between my-4">
        <h2 className="">Special offers</h2>
        <Link to="/special-offers " className="text-primary ">
          See All
        </Link>
      </div>
      <Swiper
        spaceBetween={4}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Offer ${index}`}
              className="lg:w-[50%] mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SpecialOffers;
