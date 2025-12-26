// Icons for phone and email
import { RiPhoneFill, RiMailFill } from "react-icons/ri";

// import socials
import Socials from "./Socials";

// Topbar component
// Displays contact information and social media icons
const Topbar = () => {
  return (
    <section
      id="home"
      className="
        py-3 
        xl:h-12 xl:py-0 
        bg-gradient-to-t from-[#DB0706] to-[#DA6A6A] 
        flex items-center
      "
    >
      <div className="container mx-auto">
        {/* Wrapper for phone/email and socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Phone & Mail (hidden below xl) */}
          <div className="hidden xl:flex items-center gap-8">

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-primary text-white flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-primary">
                +1 (234) 567-890
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-primary text-white flex items-center justify-center">
                <RiMailFill />
              </div>
              <p className="font-medium text-primary">
                aliquet-vitae@gmail.com
              </p>
            </div>

          </div>

          {/* Social media icons */}
          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-primary"
          />

        </div>
      </div>
    </section>
  );
};

export default Topbar;
