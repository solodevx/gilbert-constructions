import Button from "./Button"
import { useEffect, useState } from "react"

// Array of background images for the carousel
const bgImages = [
  "/assets/img/hero/bg1.jpg",
  "/assets/img/hero/bg2.jpg",
  "/assets/img/hero/bg3.jpg",
  "/assets/img/hero/bg4.jpg",
  "/assets/img/hero/bg5.jpg",
  "/assets/img/hero/bg6.jpg",
  "/assets/img/hero/bg7.jpg",
]

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0)

  // Cycle through the background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length)
    }, 5000) // change image every35s
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="h-[70vh] bg-no-repeat bg-cover bg-center relative transition-all duration-1000"
      style={{ backgroundImage: `url(${bgImages[currentBg]})` }} // Dynamic background
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/75 z-10">
        <div className="container mx-auto h-full flex items-center">
          <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col
          items-center xl:items-start max-w-[600px]">
            <h1 className="h1 text-white mb-4">
              <span className="text-accent">Nullam </span>
              fermen viverra orci
            </h1>
            <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In nisi enim, lobortis vel porttitor sit amet, tincidunt non massa.
              Donec facilisis et eros sed ullamcorper.
            </p>

            {/* CTA Button */}
            <div>
              <Button text="See our work"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
