import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    // Main testimonials section with top spacing
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* Main layout wrapper */}
        <div className="flex flex-col xl:flex-row relative">

          {/* ===== Text Content ===== */}
          <div className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0">

            {/* Pretitle heading */}
            <Pretitle text="testimonials" center />

            {/* Main heading */}
            <h2 className="h2 mb-6 capitalize">
              Vestibulum vitae risus fermentum.
            </h2>

            {/* Description text */}
            <p className="mb-10 max-w-[420px]">
              Donec consectetur suscipit nunc quis ultrices. Quisque suscipit diam
              non est imperdiet, et fringilla sapien condimentum.
            </p>

            {/* Call-to-action button */}
            <Button text="Work with us" />
          </div>

          {/* ===== Image & Slider Section ===== */}
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">

            {/* Decorative testimonial image (desktop only) */}
            <div className="relative hidden xl:flex xl:w-[570px] xl:w-[580px]">
              <Image
                src="/assets/img/testimonials/img.png"
                fill
                alt=""
                className="object-contain"
                quality={100}
              />
            </div>

            {/* Slider wrapper */}
            <div className="xl:absolute xl:bottom-0 xl:right:[160px] relative max-w-max">

              {/* Quote icon overlay */}
              <Image
                src="/assets/img/testimonials/quote-red.svg"
                alt=""
                width={54}
                height={36}
                quality={100}
                className="absolute z-20 -top-4 left-[60px]"
              />

              {/* Testimonials slider component */}
              <Slider />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
