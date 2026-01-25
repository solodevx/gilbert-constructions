import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import { RiArrowRightLine, RiPhoneFill, RiMailFill, RiMapPin2Fill } from "react-icons/ri";

// Social media icons component
import Socials from "./Socials";

// Framer Motion for animations
import { motion } from "framer-motion";
// Shared animation variants
import { fadeIn } from "@/animations/variant";

// Custom spinner for loading
import CustomSpinner from "./CustomSpinner";

const Footer = () => {
  // Get new date 
  const year = new Date().getFullYear();

  // Newsletter state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error"
  const [hp_field, setHpField] = useState(""); // Honeypot for bots

  // Handle newsletter submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Honeypot: if hidden field is filled, it's likely a bot
    if (hp_field) {
      setLoading(false);
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setLoading(false);
      return;
    }

      // HTML formatted message
  const htmlMessage = `
    <h2>New Newsletter Subscription</h2>
    <p><strong>Email:</strong> ${email}</p>
    <hr />
    <small>Subscribed via Gilbert Constructions Website Newsletter</small>
  `;

    try {
      // Simulate sending to Formspree or other API
      const response = await fetch("https://formspree.io/f/xwvlnqzd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Minimum spinner visibility
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (response.ok) {
        setStatus("success");
        setEmail(""); // Clear input

        // Clear success message after 2 seconds
        setTimeout(() => setStatus(""), 2000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 2000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(""), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.footer
      className="mt-16 xl:mt-32 bg-primary"
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">

          {/* Logo & short description */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image
                src="/assets/logo.svg"
                width={70}
                height={70}
                alt="Company Logo"
              />
            </Link>
            <p className="text-border max-w-[270px] uppercase text-3xl font-bold">
              <span className="text-accent">Gilbert </span>Constructions
            </p>
            <p className="text-border max-w-[270px]">
              ...we deliver practical construction solutions built on experience, precision, innovation and trust.
            </p>
          </div>

          {/* Contact information */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-5">Contact</h4>
            <ul className="flex flex-col gap-6">
              {/* Address */}
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <p>Ugbowo, Benin City, Edo, NG</p>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p>+234 (909) 720 9796</p>
              </li>

              {/* Email */}
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p>info.gilbertconstructions@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-5">Newsletter</h4>
            <p className="mb-9">
              Get occasional updates on our projects, industry insights, and company news — no spam, just relevant information.
            </p>

            {/* Email input & submit button */}
            <form onSubmit={handleSubmit} className="relative max-w-[370px]">
              {/* Honeypot for bots */}
              <input
                type="text"
                name="hp_field"
                value={hp_field}
                onChange={(e) => setHpField(e.target.value)}
                className="hidden"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="bg-accent w-12 h-12 absolute right-2 top-2 bottom-2 text-primary text-xl flex items-center justify-center"
                disabled={loading}
              >
                <RiArrowRightLine />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-border">
          Copyright &copy; {year} Gilbert Constructions. All Rights Reserved.
        </p>

        {/* Social media links */}
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-accent transition-all"
        />
      </div>

      <hr className="border-t border-border/10" />

      {/* =================== Overlay =================== */}
      {(loading || status === "success") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          {loading && (
            <div className="bg-white p-6 rounded-lg flex flex-col items-center gap-4">
              <CustomSpinner />
              <p className="text-sm text-gray-600">Sending email…</p>
            </div>
          )}

          {status === "success" && (
            <div className="bg-white p-8 rounded-lg text-center animate-fade-in">
              <h2 className="text-lg font-semibold text-green-600">
                Subscription successful
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Thank you for subscribing. You will receive updates soon.
              </p>
            </div>
          )}
        </div>
      )}

      {/* =================== Error message =================== */}
      {status === "error" && (
        <div className="mt-6 p-6 bg-red-100 border border-red-200 rounded-lg animate-fade-in">
          <h4 className="text-red-700 font-semibold text-lg mb-1">
            Error Sending Email
          </h4>
          <p className="text-red-600">
            Something went wrong. Please refresh the page or try again later.
          </p>
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
