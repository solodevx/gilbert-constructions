import React from "react";

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
  return (
    // Root wrapper for the homepage sections
    <div>
      {/* Top information bar (phone, email, socials, etc.) */}
      <Topbar />

      {/* Main navigation header */}
      <Header />

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
