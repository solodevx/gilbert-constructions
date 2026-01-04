"use client";

/**
 * NOTE:
 * ⚠️ Known Issue (to be resolved later):
 * - TabsContent layout / spacing / shadow behaviour is still inconsistent.
 * - Visual alignment and active-state styling for TabsContent
 *   needs further investigation (Radix state + wrapper issue).
 */

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./tabs";
import Image from "next/image";
import Button from "./Button";

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
      "Proin dignissim neque et turpis ultrices, vitae malesuada lacus vestibulum. Curabitur sem arcu, pharetra pulvinar efficitur a, gravida convallis odio.",
    serviceList: [
      "Residential Builds",
      "Stuctural Design",
      "Site Preparation",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Design",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb1.png", alt: "Thumb 1" },
      { url: "/assets/img/services/thumb2.png", alt: "Thumb 2" },
    ],
  },

  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description:
      "Sed erat lorem, vehicula ut nibh vitae, dictum feugiat sem. Nunc pharetra elit turpis, eu ornare dolor condimentum bibendum.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb3.png", alt: "Thumb 3" },
      { url: "/assets/img/services/thumb4.png", alt: "Thumb 4" },
    ],
  },

  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Donec ac ultricies libero, sed auctor ex. Proin auctor nisi a diam imperdiet.",
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
      "Pellentesque viverra congue magna, sed vestibulum sapien commodo eu.",
    serviceList: [
      "Project Planning",
      "Coating",
      "Site Management",
      "Permits",
      "Sustainability",
      "Site Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb1.png", alt: "Thumb 1" },
      { url: "/assets/img/services/thumb4.png", alt: "Thumb 4" },
    ],
  },
];

const Services = () => {
  /**
   * Tracks the currently active tab
   * Used mainly for styling logic inside TabsTrigger
   */
  const [activeTab, setActiveTab] = useState("construction");

  return (
    <section id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text={"Our Services"} center />
          <h2 className="h2 mb-3 capitalize">Aliquam erat volutpat</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Curabitur molestie egestas erat, eget tempor erat semper sed.
          </p>
        </div>

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
                <div className="ml-16 uppercase font-primary font-semibold tracking-[.6px]">
                  {item.name}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content Wrapper */}
          {/* NOTE: Padding exists, but visual centering still feels off (known issue) */}
          <div className="flex-1 bg-white h-[490px] p-[30px]">
            {servicesData.map((item) => (
              <TabsContent
                key={item.name}
                value={item.name}
                className="
                  data-[state=active]:shadow-[4px_6px_14px_0px_rgba(59,130,246,0.12)]
                "
              >
                {/* Content layout */}
                <div className="flex flex-col md:flex-row gap-[30px]">

                  {/* Thumbnails */}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index) => (
                      <div
                        key={index}
                        className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                      >
                        <Image src={thumb.url} alt={thumb.alt} fill />
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

                    {/* CTA */}
                    <Button text={"read more"} />
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
