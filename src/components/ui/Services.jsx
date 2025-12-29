"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./tabs";
import Image from "next/image";
import Button from "./Button";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
  PiWall,
} from "react-icons/pi";
import { Pi } from "lucide-react";


const servicesData = [
  {
    name: "Construction",
    icon: <PiWallFill />,
    title: "Construction Services",

    description:
      "Ut ut euismod tellus. Duis sit amet finibus quam. Aliquam erat volutpat.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut malesuada, nunc sit amet elementum accumsan, quam leo consectetur magna, at ultricies erat turpis nec metus.Vivamus in erat nisi.Maecenas non dolor in urna sodales congue. Fusce consequat purus sed justo feugiat condimentum.",

    serviceList: [
      "Residential Builds",
      "Stuctural Design",
      "Site Preparation",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Design",
    ],

    thumbs: [
      { url: "assets/img/services/thumb-1.png", alt: "Thumb 1" },
      { url: "assets/img/services/thumb-2.png", alt: "Thumb 2" },
    ],

  },

  {
    name: "Rennovation",
    icon: <PiPaintRollerFill />,
    title: "Rennovation Services",

    description:
      "Vivamus tempor elit vitae dolor aliquam, vitae mattis purus laoreet. Pellentesque nisl arcu, dictum et mi sit amet, pellentesque volutpat erat. Vestibulum maximus venenatis neque, ut laoreet lacus consectetur sit amet. Suspendisse hendrerit arcu vestibulum risus volutpat, a faucibus augue luctus.",

    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],

    thumbs: [
      { url: "assets/img/services/thumb-3.png", alt: "Thumb 3" },
      { url: "assets/img/services/thumb-4.png", alt: "Thumb 4" },
    ],

  },

  {
    name: "Restorstion",
    icon: <PiWrenchFill />,
    title: "Restoration Services",

    description:
      "Aenean scelerisque ultrices sapien, ultrices feugiat elit ultrices id. Duis mattis commodo sapien, nec tempor leo faucibus id. Curabitur sed feugiat ligula. Praesent aliquam neque ut ligula lacinia, hendrerit tincidunt nisi rutrum.",

    serviceList: [
      "Historical Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restoration",
    ],

    thumbs: [
      { url: "assets/img/services/thumb-1.png", alt: "Thumb 1" },
      { url: "assets/img/services/thumb-2.png", alt: "Thumb 2" },
    ],

  },

  {
    name: "Restorstion",
    icon: <PiWrenchFill />,
    title: "Restoration Services",

    description:
      "Pellentesque viverra congue magna, sed vestibulum sapien commodo eu. Phasellus nisl magna, ullamcorper quis maximus quis, suscipit id massa. Integer facilisis in nisi id mattis.",

    serviceList: [
      "Project Planning",
      "Coating",
      "Site Management",
      "Permits",
      "Sustainability",
      "Site Safety",
    ],

    thumbs: [
      { url: "assets/img/services/thumb-1.png", alt: "Thumb 1" },
      { url: "assets/img/services/thumb-4.png", alt: "Thumb 4" },
    ],

  }
]

const
  Services = () => {

    const [activeTab, setActiveTab] = useState("construction");

    return (
      <section id="services" className="pt-16 xl:pt-32">
        <div className="container mx-auto">
          <div>
            <h2 className="h2 mb-3 capitalize">Aliquam erat volutpat</h2>
            <p className="mb-11 max-w-[480px] mx-auto">Curabitur molestie egestas erat, eget tempor erat semper sed. Cras quis sem nec massa commodo eleifend. Fusce viverra, urna id pharetra interdum, mauris felis scelerisque justo.</p>
          </div>

          {/* Tabs */}
          <Tabs 
            defaultValue="account"
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent">
              {servicesData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none h-[100px] flex items-center relative 
                    shadow-custom p-0 outline-none"
                  >
                    <div 
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0
                        ${
                          activeTab === item.name ? "bg-primary text-white" : "bg-accent text-primary"
                        }`}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div>{item.name}</div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <TabsContent value="account">

            </TabsContent>
            <TabsContent value="password">

            </TabsContent>
          </Tabs>


        </div>
      </section>
    )
  }

export default Services