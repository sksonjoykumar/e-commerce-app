import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider from "../../assets/images/index";
import { Link } from "react-router-dom";

function BannerSlider() {
  return (
    <div className="slider-wrapper my-4">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
      >
        <div className="w-full h-auto lg:h-[70vh] relative">
          <img
            src={slider.banner}
            alt="slider-banner"
            className="w-full h-full rounded-md object-cover relative border"
          />
          <div className="banner-text absolute top-1/3 md:top-[20%] lg:top-[36%] left-10 md:left-32 text-left">
            <h1 className="text-white hidden md:block text-3xl lg:text-5xl font-semibold py-4 uppercase">
              Today order <span className="text-[#EF4444]">20%</span> Off
              discount
            </h1>
            <Link to={"shop"}>
              <button
                type="button"
                className="hidden sm:block py-2 px-5 bg-white rounded-3xl text-md font-gelasio border-2 border-[#8B5DB6] hover:bg-slate-200 transition-all duration-200 ml-5 lg:mt-3"
              >
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto lg:h-[70vh] relative">
          <img
            src={slider.banner2}
            alt="slider-banner"
            className="w-full rounded-md object-cover border"
          />
          <div className="banner-text absolute top-1/3 md:top-[8%] left-10 md:left-16 text-left">
            <h1 className="text-[#EF4444] hidden md:block text-3xl md:text-5xl font-semibold py-4 uppercase">
              New Collection
            </h1>
            <Link to={"shop"}>
              <button
                type="button"
                className="hidden sm:block py-2 px-5 bg-white rounded-3xl text-md font-gelasio border-2 border-[#8B5DB6] hover:bg-slate-200 transition-all duration-200 ml-5 mt-3"
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full h-auto lg:h-[70vh] relative">
          <img
            src={slider.banner5}
            alt="slider-banner"
            className="w-full h-full rounded-md object-cover relative border"
          />
          <div className="banner-text absolute top-1/3 md:top-[20%] lg:top-[36%] left-10 md:left-32 text-left">
            <h1 className="text-white hidden md:block text-3xl lg:text-5xl font-semibold py-4 uppercase">
              Visit Discount Products Page
            </h1>
            <Link to={"shop"}>
              <button
                type="button"
                className="hidden sm:block py-2 px-5 bg-white rounded-3xl text-md font-gelasio border-2 border-[#8B5DB6] hover:bg-slate-200 transition-all duration-200 ml-5 lg:mt-3"
              >
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto lg:h-[70vh]">
          <img
            src={slider.banner3}
            alt="slider-banner"
            className="w-full rounded-md object-cover border"
          />
        </div>
        <div className="w-full h-auto lg:h-[70vh]">
          <img
            src={slider.banner4}
            alt="slider-banner"
            className="w-full rounded-md object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default BannerSlider;
