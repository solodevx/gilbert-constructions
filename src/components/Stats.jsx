"use client"

// React hooks
// Framer Motion hook to detect when an element enters the viewport
// Library used to animate numbers counting up
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

/**
 * Stats configuration data
 * Each object represents one statistic card
 */
const statsData = [
  {
    endcountNum: 99,
    endcountText: "%",
    statName: "Client Satisfaction",
  },
  {
    endcountNum: 50,
    endcountText: "+",
    statName: "Successful Projects",
  },
  {
    endcountNum: 500,
    endcountText: "+",
    statName: "Happy Clients",
  },
  {
    endcountNum: 10,
    endcountText: "+",
    statName: "Years of Experience",
  }
];

const Stats = () => {

  /**
   * ref is attached to the stats container
   * It allows us to observe when this section enters the viewport
   */
  const ref = useRef(null);

  /**
   * inView becomes true when 20% of the element is visible on screen
   * This prevents the CountUp animation from running immediately on page load
   */
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    // Main wrapper for the stats block
    <div 
      ref={ref} 
      className="mt-16 xl:mt-32 bg-primary py-10 w-full"
    >
      <div className="container mx-auto h-full">
        {/* Stats layout container */}
        <div
          className="
            text-white flex flex-col items-center justify-between
            xl:flex-row h-full gap-12 text-center xl:text-left
          "
        >
          {/* Loop through stats data and render each stat */}
          {statsData.map((item, index) => {

            return (
              <div className="w-full" key={index}>
                {/* Animated number */}
                <div className="text-5xl font-semibold">

                  {/* CountUp only runs when section is in view */}
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endcountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}

                  {/* Static suffix like %, +, K */}
                  <span>{item.endcountText}</span>

                </div>

                {/* Stat label */}
                <p>{item.statName}</p>
              </div>
            );
            
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
