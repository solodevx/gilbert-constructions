// Swiper core components for building the slider
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

import SliderButtons from "./SliderButtons";

const Slider = () => {
  return (
    // Main Swiper container
    <Swiper
      className="bg-white w-full max-w-[630px] h-[200px]
      shadow-[0px_6px_14px_0px_rgba(59,130,246,0.12)]"
    >

      {/* ===== First Slide ===== */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">

          {/* Client avatar image (visible only on extra-large screens) */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar1.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="Client's Avatar"
            />
          </div>

          {/* Testimonial text and client name */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Gilbert Constructions is a top-notch construction company that provides exceptional services. 
              Loved how they added small thoughtful touches I didn&apos;t even think of.
            </p>
            <p className="font-primary font-semibold text-primary">
              Mr. Omoh Gold
            </p>
          </div>

        </div>
      </SwiperSlide>

      {/* ===== Second Slide ===== */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">

          {/* Client avatar */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar2.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="Client's Avatar"
            />
          </div>

          {/* Testimonial content */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Gilbert Constructions delivered our project on time and exceeded our expectations. 
              The quality of work and professionalism were outstanding.
            </p>
            <p className="font-primary font-semibold text-primary">
              Mr. Akpos Coast
            </p>
          </div>

        </div>
      </SwiperSlide>

      {/* ===== Third Slide ===== */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">

          {/* Client avatar */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar3.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="Client's Avatar"
            />
          </div>

          {/* Testimonial content */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>Their attention to detail and communication throughout the renovation process made everything stress-free. 
              Highly recommended.
            </p>
            <p className="font-primary font-semibold text-primary">
              Anon Guy
            </p>
          </div>

        </div>
      </SwiperSlide>

      {/* ===== Fourth Slide ===== */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">

          {/* Client avatar */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar3.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="Client's Avatar"
            />
          </div>

          {/* Testimonial content */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Awesome Company to work with. Their professionalism and dedication to quality are commendable.
            </p>
            <p className="font-primary font-semibold text-primary">
              Anon Guy
            </p>
          </div>

        </div>
      </SwiperSlide>

      {/* ===== Fifth Slide ===== */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">

          {/* Client avatar */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar3.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="Client's Avatar"
            />
          </div>

          {/* Testimonial content */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Top-notch construction company. They delivered a stunning project that exceeded my expectations, 
              and their professionalism and attention to detail were outstanding.
            </p>
            <p className="font-primary font-semibold text-primary">
              Mr. Akpos Coast
            </p>
          </div>

        </div>
      </SwiperSlide>

      {/* Custom previous/next navigation buttons */}
      <SliderButtons />

    </Swiper>
  );
};

export default Slider;
