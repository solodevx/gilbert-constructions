import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">

          {/* Text */}
          <div className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0 ">
            {/* Pretitle Heading */}
            <Pretitle text="testimonials" center />
            <h2 className="h2 mb-6 capitalize">Vestibulum vitae risus fermentum.</h2>
            <p className="mb-10 max-w-[420px]">Donec consectetur suscipit nunc quis ultrices. Quisque suscipit diam non est imperdiet, et fringilla sapien condimentum.</p>

            {/* TestimonialCTA Button */}
            <Button text="Work with us" />
          </div>
          {/* Image & Slider */}
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">

            {/* Image */}
            <div className="relative hidden xl:flex xl:w-[570px] xl:w-[580px]">
              <Image src="/assets/img/testimonials/img.png" fill alt="" className="object-contain" quality={100}/>
            </div>

            {/* Slider */}
            <div className="xl:absolute xl:bottom-0 xl:right:[160px] relative max-w-max ">
              <Slider />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials