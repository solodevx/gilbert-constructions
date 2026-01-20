import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

// Framer Motion and animation
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variant";
const About = () => {
  return (
    // Semantic section for the About area
    // `id="about"` allows scroll navigation to this section
    <section id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">

        {/* Main layout wrapper
            - Column on mobile
            - Row on large screens */}
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">

          {/* ================= Left side: Text content ================= */}
          <div className="flex-1">
            {/* Restricts text width for better readability */}
            <motion.div
              className="max-w-[540px]"
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >

              {/* Section pretitle */}
              <Pretitle text="about us" />

              {/* Main heading */}
              <h2 className="h2 mb-6 capitalize">
                
              </h2>

              {/* Description paragraph */}
              <p className="mb-4">
                Gilbert Constructions is a professional construction company committed to delivering high-quality building 
                solutions for residential and commercial clients. With a skilled team and a strong attention to detail, 
                we bring projects to life through careful planning, modern techniques, and reliable execution.
              </p>
              <p className="mb-11">
                From initial concept to final delivery, our goal is to exceed expectations while maintaining 
                transparency, efficiency, and safety throughout every phase of the project.
              </p>

              {/* Signature block */}
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={200}
                  height={49}
                  alt=""
                  aria-hidden="true"
                />

                <p className="-mt-3]">Company CEO</p>
              </div>

              {/* Call-to-action button */}
              <a href="#contact">
                <Button text="Contact Us" />
              </a>
            </motion.div>
          </div>

          {/* ================= Right side: Image ================= */}
          <motion.div
            className="flex-1 xl:flex xl:justify-center"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Image wrapper for positioning decorative elements */}
            <div className="xl:w-[444px] xl:h-[493px] relative">

              {/* Decorative background box (desktop only) */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>

              {/* Main About image */}
              <Image
                src="/assets/img/about/img.jpg"
                width={493}
                height={444}
                alt="Support image for the about section"
                sizes="(max-width: 1280px) 100vw, 493px"
                className="object-cover"
                priority
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
