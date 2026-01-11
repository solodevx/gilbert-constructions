// Icons for contact information
import { RiChat1Line, RiMapPinLine, RiSmartphoneLine } from "react-icons/ri";

// Social media links component
import Socials from "./Socials";

// Contact form component
import Form from "./Form";

const Contact = () => {
  return (
    // Contact section wrapper
    <section id="contact" className="pt-16 xl:pt-32">
      <div className="container mx-auto">

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
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>

              {/* Intro text */}
              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda fuga cumque exercitationem numquam, molestiae est.
              </p>

              {/* Contact info items */}
              <div className="flex flex-col gap-[40px] mb-16">

                {/* Contact Item 1: Chat */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="h5 font-semibold font-primary leading-none mb-2">
                      Chat with us
                    </h5>
                    <p className="mb-4">
                      Our team is available to help you 24/7
                    </p>
                    <p className="font-semibold">
                      Gilbert Construction
                    </p>
                  </div>
                </div>

                {/* Contact Item 2: Location */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPinLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="h5 font-semibold font-primary leading-none mb-2">
                      Our Location
                    </h5>
                    <p className="mb-4">Come visit us</p>
                    <p className="font-semibold">Ugbowo, Benin City</p>
                    <p className="font-semibold">Edo State, NG</p>
                  </div>
                </div>

                {/* Contact Item 3: Phone */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="h5 font-semibold font-primary leading-none mb-2">
                      Place a call
                    </h5>
                    <p>Mon - Fri: 8:00am - 5:00pm</p>
                    <p className="mb-4">Sat - Sun: 8:00am - 2:00pm</p>
                    <p className="font-semibold">+1 (234) 567-890</p>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quia, eos reprehenderit vitae quo nihil doloribus quisquam
                voluptatibus repudiandae aliquam modi enim necessitatibus
                tempora expedita unde aperiam sed quidem dolore odit.
              </p>

              {/* Form component */}
              <Form />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
