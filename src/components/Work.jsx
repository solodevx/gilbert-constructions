import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

// Framer Motion and animation
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variant";

// DATA SOURCE FOR WORK SECTION
// Each object represents one project card
const workData = [
  {
    img: "/assets/img/work/restoration.jpg", // Image path (served from /public)
    name: "restoration",                     // Project title
    description: "Structural Recovery",   // Short project summary
    href: "https://www.instagram.com/gilbert_constructions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="                                 // Link to project detail (currently empty)
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "New & Purposed Builds",
    href: "https://www.instagram.com/gilbert_constructions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Modern Upgrades",
    href: "https://www.instagram.com/gilbert_constructions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Expertise & Guidance",
    href: "https://www.instagram.com/gilbert_constructions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
];


// WORK SECTION COMPONENT
const Work = () => {
  return (
    // Section wrapper with top padding and anchor ID for navigation
    <div id="projects" className="pt-16 xl:pt-32">

      {/* Centered container for section heading */}
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-[540px] mx-auto xl:mb-20"
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
        >

          {/* Small section label */}
          <Pretitle text={"our work"} center />

          {/* Main section heading */}
          <h2 className="h2 mb-3">Discover Our Projects</h2>

          {/* Section description */}
          <p className="max-w-[480px] mb-11 mx-auto">
            We provide expert guidance to ensure projects run smoothly from planning to completion. 
            Our consulting services help clients make informed decisions and avoid costly mistakes.
          </p>
          
        </motion.div>
      </div>

      {/* Responsive grid for project cards */}
      {/* 1 column (mobile), 2 columns (tablet), 4 columns (xl screens) */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        variants={fadeIn("down", 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
       >

        {/* Loop through work data to render each project card */}
        {workData.map((item, index) => {
          return (
            // Card wrapper
            // - relative: needed for Image fill positioning
            // - overflow-hidden: clips hover animation
            // - group: enables group-hover animations
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >

              {/* Background image (fills the entire card) */}
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt={`${item.name} project`}
                quality={100}
              />

              {/* Overlay content container */}
              {/* Slides up on hover (desktop only) */}
              <div
                className="
                  w-[90%] h-[84px] bg-primary absolute bottom-4
                  flex justify-between items-center text-white
                  md:translate-y-[100px] md:group-hover:translate-y-0
                  transition-all duration-500
                "
              >

                {/* Left side: title and description */}
                <div className="pl-8">
                  {/* Project name */}
                  <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>

                  {/* Description with icon */}
                  <div className="flex item-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* Right side: CTA button */}
                {/* Positioned absolutely for consistent placement */}
                <Link
                  href={item.href}
                  className="
                    w-[44px] xl:w-[60px] h-[44px] xl:h-[60px]
                    bg-accent text-primary text-2xl
                    flex justify-center items-center
                    absolute right-3
                  "
                  target="_blank"
                >
                  <RiArrowRightUpLine />
                </Link>

              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;