import dynamic from "next/dynamic";
import React from "react";
import "./page.css";
import Hero1 from "@/app/home/Hero1";
import Section1 from '@/app/home/Section1';
import Section2 from '@/app/home/Section2';
import Section3 from '@/app/home/Section3';
import Section4 from '@/app/home/Section4';
import Section5 from '@/app/home/Section5';
import Footer from '@/app/home/Footer'




const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

export default function page() {
  return (
    <div>
      <Navbar />
      <section className="home_section" id="home">
        <div className="home_container overlay">
          <div className="home_content">
            <Hero1 />
            <div className="home_img"></div>
          </div>
        </div>

        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </section>
    </div>
  );
}
