"use client";

/**
 * NOTE:
 * ⚠️ Known Issue (to be resolved later):
 * - TabsContent layout / spacing / shadow behaviour is still inconsistent.
 * - Visual alignment and active-state styling for TabsContent
 *   needs further investigation (Radix state + wrapper issue).
 */

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs";
import Image from "next/image";
// import Button from "./Button";


// Framer Motion and animation
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variant";

/**
 * Icons used for service categories
 */
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";

import Pretitle from "./Pretitle";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
}

/**
 * Services data source
 * - Each object represents one tab
 * - `name` is used as the Tabs value
 * - `icon` is rendered inside the TabsTrigger
 * - `thumbs` are displayed inside TabsContent
 */
const servicesData = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",

    description:
      "Our construction services cover everything from ground-up residential builds to structural works and interior finishing. We ensure durability, precision, and compliance with industry standards.",

    serviceList: [
      "Residential Builds",
      "Stuctural Design",
      "Site Preparation",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Design",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb1.jpg", alt: "Thumb 1" },
      { url: "/assets/img/services/thumb2.jpg", alt: "Thumb 2" },
    ],
  },

  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    
    description:
      "We transform existing spaces into functional, modern environments. Whether upgrading a single room or renovating an entire property, we focus on quality finishes and smart design.",

    serviceList: [
      "Kitchen Remodel",
      "Tiling & Grouting",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb3.jpg", alt: "Thumb 3" },
      { url: "/assets/img/services/thumb4.jpg", alt: "Thumb 4" },
    ],
  },

  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Our restoration services help revive damaged or aging structures while preserving their integrity. We handle repairs caused by time, fire, water, or environmental factors.",
    serviceList: [
      "Historical Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restoration",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb5.jpg", alt: "Thumb 5" },
      { url: "/assets/img/services/thumb6.jpg", alt: "Thumb 6" },
    ],
  },

  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      "We provide expert guidance to ensure projects run smoothly from planning to completion. Our consulting services help clients make informed decisions and avoid costly mistakes.",
    serviceList: [
      "Project Planning",
      "Architectural Designs",
      "Site Management",
      "Permits",
      "Sustainability",
      "Site Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb7.jpg", alt: "Thumb 7" },
      { url: "/assets/img/services/thumb8.jpg", alt: "Thumb 8" },
    ],
  },
];

const Services = () => {
  /**
   * Tracks the currently active tab
   * Used mainly for styling logic inside TabsTrigger
   */
  const [activeTab, setActiveTab] = useState("construction");
  const [selectedService, setSelectedService] = useState(null);


  return (
    <section id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">

        {/* Section Heading */}
        <motion.div
          className="text-center max-w-[540px] mx-auto mb-20"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Pretitle text={"Our Services"} center />
          <h2 className="h2 mb-3 capitalize">Our Areas of Expertise</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            We offer a wide range of construction and consulting services 
            tailored to meet the needs of modern projects, 
            regardless of size or complexity.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Tabs Wrapper */}
          <Tabs
            defaultValue="construction"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >


            {/* Tabs List (left side on desktop) */}
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {servicesData.map((item) => (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  aria-label={`${item.name} services`}
                  className="
                  w-full h-[100px] p-0 relative flex items-center
                  rounded-none outline-none
                  data-[state=active]:shadow-[0px_6px_14px_0px_rgba(59,130,246,0.12)]
                "
                >
                  {/* Icon container (fixed left block) */}
                  <div
                    className={`
                    w-[100px] h-[100px] absolute left-0
                    flex items-center justify-center
                    ${activeTab === item.name
                        ? "bg-primary text-white"
                        : "bg-accent text-primary"}
                  `}
                  >
                    <div className="text-4xl">{item.icon}</div>
                  </div>

                  {/* Service name */}
                  <div className="ml-[120px] pr-4 uppercase font-primary font-semibold tracking-[.6px]">
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content Wrapper */}
            {/* NOTE: Padding exists, but visual centering still feels off (known issue) */}
            <div className="flex-1 bg-white p-[10px] w-full">
              {servicesData.map((item) => (
                <TabsContent
                  key={item.name}
                  value={item.name}
                  className="data-[state=active]:block data-[state=inactive]:hidden data-[state=active]:shadow-[4px_6px_14px_0px_rgba(59,130,246,0.12)]"
                >
                  {/* Content layout */}
                  <motion.div
                    className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-[30px]"
                    variants={fadeInVariant}
                    initial="hidden"
                    animate="show"
                  >

                    {/* Thumbnails */}
                    <div className="flex flex-col md:flex-col gap-5 xl:gap-[30px] justify-center md:justify-start">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="flex relative min-w-[250px] xl:max-w-[400px] aspect-square shrink-0"
                        >
                          <div className="md:align-items">
                            <Image
                            src={thumb.url}
                            alt={thumb.alt}
                            fill
                            sizes="(max-width: 400px), (min-width: 250px), 100vw, 200px"
                            className="object-cover"
                          />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Textual Content */}
                    <div>
                      <h3 className="h3 mb-6">{item.title}</h3>
                      <p className="mb-10">{item.description}</p>

                      {/* Services list */}
                      <ul className="grid grid-cols-2 gap-4 mb-12">
                        {item.serviceList.map((service, index) => (
                          <li key={index} className="flex items-center gap-4">
                            <div className="w-[6px] h-[6px] bg-accent" />
                            <span className="capitalize font-medium text-primary">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA
                      <div className="flex justify-center md:justify-start">
                        <Button
                          text="read more"
                          onClick={() => {
                            setSelectedService(item);
                            setIsModalOpen(true);
                          }}
                        />
                      </div> */}
                      
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;