"use client"

import { useEffect } from "react";
import "./page.css";


import Aos from "aos";
import "aos/dist/aos.css";



const Section2 = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main className="section2-main">
      <div data-aos="fade-up" className="section2-contents">
        <h1>Research / Innovation</h1>
        <h4>
          As a social justice researcher, my interest is in exploring the
          experiences of domestic violence survivors, impacted by systemic
          retraumatization, through family court systems. <br/> <br/>Currently, my research
          and innovative work has inspired my team to embark on developing a
          software application, that meet the most urgent and critical needs of
          survivors.
        </h4>
        <div className="section2-buttons">
          <button>Start Now</button>
        </div>
      </div>

      <video autoPlay loop muted>
        <source src="/research.mp4" type="video/mp4" className="video2" />
      </video>
    </main>
  );
};

export default Section2;
