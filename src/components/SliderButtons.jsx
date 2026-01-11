"use client"; 

import { useSwiper } from "swiper/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const SliderButtons = () => {
  // Get the swiper instance so we can control slide navigation
  const swiper = useSwiper();

  return (
    // Wrapper for slider navigation buttons
    <div className="w-max absolute bottom-2 right-2 flex gap-1 z-10">
      
      {/* Previous slide button */}
      <button
        className="
          bg-accent 
          text-primary 
          text-[22px] 
          w-[48px] 
          h-[48px]
          flex 
          items-center 
          justify-center 
          transition-all 
          cursor-pointer
        "
        onClick={() => swiper.slidePrev()} // Move to previous slide
      >
        <RiArrowLeftLine />
      </button>

      {/* Next slide button */}
      <button
        className="
          bg-accent 
          text-primary 
          text-[22px] 
          w-[48px] 
          h-[48px]
          flex 
          items-center 
          justify-center 
          transition-all 
          cursor-pointer
        "
        onClick={() => swiper.slideNext()} // Move to next slide
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default SliderButtons;