'use client';

import React, { useEffect } from "react";
import { useState } from "react";

// Page sections (UI components)
import Topbar from "@/components/ui/Topbar";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Stats from "@/components/ui/Stats";
import Services from "@/components/ui/Services";
import Work from "@/components/ui/Work";
import Testimonials from "@/components/ui/Testimonials";
import Faq from "@/components/ui/Faq";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

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
          ${ headerActive ? "translate-y-0" : " translate-y-full" }`}
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
    </div>
  );
};

export default Home;
