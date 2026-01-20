import Button from "./Button"
import { useEffect, useState } from "react"

// Framer Motion and animation
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variant";

// Array of background images for the carousel
const bgImages = [
  "/assets/img/hero/bg1.webp",
  "/assets/img/hero/bg2.webp",
  "/assets/img/hero/bg3.webp",
  "/assets/img/hero/bg4.webp",
  "/assets/img/hero/bg5.webp",
  "/assets/img/hero/bg6.webp",
  "/assets/img/hero/bg7.webp",
]

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0)

  // Cycle through the background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length)
    }, 5000) // change image every 5s
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="h-[70vh] bg-no-repeat bg-cover bg-center relative transition-[background-image] duration-1000"
      style={{ backgroundImage: `url(${bgImages[currentBg]})` }} // Dynamic background
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/70 to-black/95 z-10">
        <div className="container mx-auto h-full flex items-center">
          <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col
          items-center xl:items-start max-w-[600px]">
            <motion.h1
              className="h1 text-white mb-4"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
            >
              Built & Engineered <br /> 
              with
              <span className="text-accent"> precision</span>
              
            </motion.h1>
            <motion.p
              className="mb-10"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
            >
              From concept to completion, every build starts with clear intent. 
              Precision engineering shapes how we work and deliver results that stands up to time and use.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
            >
              <a href="#projects">
                <Button text="See our work" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
