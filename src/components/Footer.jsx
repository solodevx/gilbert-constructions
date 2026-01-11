import Image from "next/image";
import Link from "next/link";

// Icons
import { RiArrowRightLine, RiPhoneFill, RiMailFill, RiMapPin2Fill } from "react-icons/ri";

// Social media icons component
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">

          {/* Logo & short description */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image
                src="/assets/logo.svg"
                width={50}
                height={50}
                alt="Company Logo"
              />
            </Link>
            <p className="text-border max-w-[270px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis amet minima eaque rem dignissimos adipisci
            </p>
          </div>

          {/* Contact information */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-5">Contact</h4>
            <ul className="flex flex-col gap-6">
              {/* Address */}
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <p>123, Lorem ipsum dolor, Benin City, Edo, NG</p>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p>+1 (234) 567-890</p>
              </li>

              {/* Email */}
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p>gilbert-constructions@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-5">Newsletter</h4>
            <p className="mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet.
            </p>

            {/* Email input & submit button */}
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button className="bg-accent w-12 h-12 absolute right-2 top-2 bottom-2 text-primary text-xl flex items-center justify-center">
                <RiArrowRightLine />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer bottom section */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-border">
          Copyright &copy; 2026 Gilbert Constructions. All Rights Reserved.
        </p>

        {/* Social media links */}
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </footer>
  );
};

export default Footer;
