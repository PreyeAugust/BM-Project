"use client";

import { useEffect } from "react";
import Image from "next/image";
import Img1 from "@/assets/Author.jpg";
import Typewriter from "typewriter-effect";
import "./Section5.css";


import Aos from "aos";
import "aos/dist/aos.css";


const Section5 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="section5-section">
      <div data-aos="fade-up" className="section5-container">
        <div className="section5-content">
          <h2 data-aos="fade-up" className="section5-p">
            <Typewriter
              options={{
                strings: [
                  " Spreading Happiness",
                  " Connecting People",
                  " Creating Memories",
                  " Creating Stories",
                  " Hobbies and Interests",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString()
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </h2>

          <Image data-aos="fade-up" src={Img1} className="section5-image" alt="BM" />
        </div>

        <div data-aos="fade-up" className="right">
          <h3>
            I work hard, and I love to play hard! <br /> From travelling, to
            binge watching my favourite series, <br /> to dancing under a disco
            light in a night club, to going <br /> on unplanned trips and to
            unknown places with friends and families, <br /> to planning
            cookouts, I am constantly discovering my interests. Come with me,{" "}
            <br /> on a journey here.{" "}
          </h3>
          <br />
          <br />
          <button data-aos="fade-up" >Meet Bisola Mariam</button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
