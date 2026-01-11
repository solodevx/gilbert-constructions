'use client';

import React, { useEffect } from "react";
import { useState } from "react";

// Page sections (UI components)
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Home page component
const Home = () => {

  // Declaring the default state
  const [headerActive, setHeaderActive ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200 );
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Root wrapper for the homepage sections
    <div>
      {/* Top information bar (phone, email, socials, etc.) */}
      <Topbar />


      {/* Main navigation header */}
      {/* Header Large Screens */}
      {/* Static & Full-Scale Header */}
      <div className="relative z-10">
        <Header />
      </div>


      {/* Header Mobile */}
      {/* Responsive first (mobile design) */}
      <div 
        className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50
          ${ headerActive ? "translate-y-0" : "-translate-y-full" }`}
      >
        <Header />
      </div>

      {/* Hero / landing section */}
      <Hero />

      {/* About the company */}
      <About />

      {/* Company statistics / metrics */}
      <Stats />

      {/* Services offered */}
      <Services />

      {/* Portfolio / work showcase */}
      <Work />

      {/* Client testimonials */}
      <Testimonials />

      {/* Frequently asked questions */}
      <Faq />

      {/* Contact form / contact details */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* <div className="h-[1000px]"></div> */}
    </div>
  );
};

export default Home;
