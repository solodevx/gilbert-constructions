import Image from "next/image";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

// Framer Motion and animation
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variant";

const Testimonials = () => {
  return (
    // Main testimonials section with top spacing
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* Main layout wrapper */}
        <div className="flex flex-col xl:flex-row relative">

          {/* ===== Text Content ===== */}
          <motion.div
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >

            {/* Pretitle heading */}
            <Pretitle text="testimonials" left />

            {/* Main heading */}
            <h2 className="h2 mb-6 capitalize">
              What Our Clients Say.
            </h2>

            {/* Description text */}
            <p className="mb-10 max-w-[420px]">
              Our clients are our top priority, we pride ourselves on providing exceptional service to our clients. 
              From precise design to flawless execution, we work tirelessly to deliver exceptional results. 
              See what they have to say about us.
            </p>

          </motion.div>

          {/* ===== Image & Slider Section ===== */}
          <motion.div
            className="flex-1 flex flex-col xl:flex-row xl:justify-end"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >

            {/* Decorative testimonial image (desktop only) */}
            <div className="relative hidden xl:flex xl:w-[580px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
