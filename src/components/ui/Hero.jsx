import Button from "./Button"

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative ">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10">
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