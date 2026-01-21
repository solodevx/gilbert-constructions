// Icons for contact information
import { RiChat1Line, RiMapPinLine, RiSmartphoneLine } from "react-icons/ri";

// Framer Motion and animation
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variant";

// Social media links component
import Socials from "./Socials";
// Contact form component
import Form from "./Form";

const Contact = () => {
  return (
    // Contact section wrapper
    <section id="contact" className="pt-16 xl:pt-32">
      <motion.div
        className="container mx-auto"
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >

        {/* Main contact card */}
        <div className="w-full xl:h-[730px] shadow-[0px_6px_14px_0px_rgba(59,130,246,0.12)]
                        p-4 xl:p-8 xl:px-[90px] xl:py-[36px]
                        border-t-4 border-accent bg-[#ECECF6]">

          {/* Layout container: info on the left, form on the right */}
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">

            {/* ================= Contact Information Section ================= */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px]
                            xl:border-r xl:border-border/40
                            h-[640px] order-2 xl:order-1">

              {/* Section title */}
              <h4 className="text-[26px] font-primary font-bold mb-1">
                Contact Us
              </h4>

              {/* Intro text */}
              <p className="mb-4">
                We are here to help you with any questions or concerns you may have.
              </p>

              {/* Contact info items */}
              <div className="flex flex-col gap-[40px] mb-16">

                {/* Contact Item 1: Chat */}
                <div className="flex items-start gap-[10px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="h5 font-semibold font-primary leading-none mb-2">
                      Chat with us
                    </h5>
                    <p className="mb-2">
                      Our team is available to help you 24/7
                    </p>
                    <p className="font-semibold">
                      Gilbert Construction
                    </p>
                  </div>
                </div>

                {/* Contact Item 2: Location */}
                <div className="flex items-start gap-[10px]">
                  <div>
                    <RiMapPinLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="h5 font-semibold font-primary leading-none mb-2">
                      Our Location
                    </h5>
                    <p className="mb-2">Come visit us</p>
                    <p className="font-semibold">Ugbowo, Benin City</p>
                    <p className="font-semibold">Edo State, NG</p>
                  </div>
                </div>

                {/* Contact Item 3: Phone */}
                <div className="flex items-start gap-[10px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="h5 font-semibold font-primary leading-none mb-2">
                      Place a call
                    </h5>
                    <p>Mon - Fri: 8:00am - 5:00pm</p>
                    <p className="mb-2">Sat - Sun: 8:00am - 2:00pm</p>
                    <p className="font-semibold">+234 (909) 720 9796</p>
                  </div>
                </div>

                {/* Social media links */}
                <div>
                  <Socials
                    containerStyles="flex gap-[40px] justify-between mr-[40px]"
                    iconStyles="text-primary text-[30px]"
                  />
                </div>
              </div>
            </div>

            {/* ================= Contact Form Section ================= */}
            <div className="flex-1 order-1 xl:order-2">

              {/* Form heading */}
              <h2 className="h2 mb-3 capitalize">
                Request a quote
              </h2>

              {/* Supporting text */}
              <p className="mb-9">
                Fill out the form below and our team will get back to 
                you as soon as possible to discuss your project requirements.
              </p>

              {/* Form component */}
              <Form />
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact;
