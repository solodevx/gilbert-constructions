import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const Slider = () => {
  return (

    <Swiper className="bg-white w-full max-w-[630px] h-[200px] shadow-[0px_6px_14px_0px_rgba(59,130,246,0.12)]">

        {/* First Slide */}
        <SwiperSlide>
            <div className="px-12 md:pl-[60px] w-full flex items-center gap-9 h-full">

                {/* Avatar/Client Image */}
                <div className="relative hidden xl:flex w-[90px] h-[90px]">
                    <Image 
                        src="/assets/img/testimonials/avatar1.jpg"
                        fill
                        className="object-contain"
                        quality={100}
                        alt="Client's Avatar 1" 
                    />
                </div>

                {/* Client's Recommendation Note */}
                <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                    <p>Cras sapien leo, iaculis maximus sapien. Cras ut purus eget enim efficitur pharetra.</p>
                    <p>Anon Guy</p>
                </div>

            </div>
        </SwiperSlide>
        
        {/* Second  Slide */}
        <SwiperSlide>
            <div className="px-12 md:pl-[60px] w-full flex items-center gap-9 h-full">

                {/* Avatar/Client Image */}
                <div className="relative hidden xl:flex w-[90px] h-[90px]">
                    <Image 
                        src="/assets/img/testimonials/avatar1.jpg"
                        fill
                        className="object-contain"
                        quality={100}
                        alt="Client's Avatar 1" 
                    />
                </div>

                {/* Client's Recommendation Note */}
                <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                    <p>Cras sapien leo, iaculis maximus sapien. Cras ut purus eget enim efficitur pharetra.</p>
                    <p>Anon Guy</p>
                </div>

            </div>
        </SwiperSlide>
        
        {/* Third Slide */}
        <SwiperSlide>
            <div className="px-12 md:pl-[60px] w-full flex items-center gap-9 h-full">

                {/* Avatar/Client Image */}
                <div className="relative hidden xl:flex w-[90px] h-[90px]">
                    <Image 
                        src="/assets/img/testimonials/avatar1.jpg"
                        fill
                        className="object-contain"
                        quality={100}
                        alt="Client's Avatar 1" 
                    />
                </div>

                {/* Client's Recommendation Note */}
                <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                    <p>Cras sapien leo, iaculis maximus sapien. Cras ut purus eget enim efficitur pharetra.</p>
                    <p>Anon Guy</p>
                </div>

            </div>
        </SwiperSlide>
        
        {/* Fourth Slide */}
        <SwiperSlide>
            <div className="px-12 md:pl-[60px] w-full flex items-center gap-9 h-full">

                {/* Avatar/Client Image */}
                <div className="relative hidden xl:flex w-[90px] h-[90px]">
                    <Image 
                        src="/assets/img/testimonials/avatar1.jpg"
                        fill
                        className="object-contain"
                        quality={100}
                        alt="Client's Avatar 1" 
                    />
                </div>

                {/* Client's Recommendation Note */}
                <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                    <p>Cras sapien leo, iaculis maximus sapien. Cras ut purus eget enim efficitur pharetra.</p>
                    <p>Anon Guy</p>
                </div>

            </div>
        </SwiperSlide>
        
        {/* Fifth Slide */}
        <SwiperSlide>
            <div className="px-12 md:pl-[60px] w-full flex items-center gap-9 h-full">

                {/* Avatar/Client Image */}
                <div className="relative hidden xl:flex w-[90px] h-[90px]">
                    <Image 
                        src="/assets/img/testimonials/avatar1.jpg"
                        fill
                        className="object-contain"
                        quality={100}
                        alt="Client's Avatar 1" 
                    />
                </div>

                {/* Client's Recommendation Note */}
                <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                    <p>Cras sapien leo, iaculis maximus sapien. Cras ut purus eget enim efficitur pharetra.</p>
                    <p>Anon Guy</p>
                </div>

            </div>
        </SwiperSlide>
        
    </Swiper>
  )
}

export default Slider