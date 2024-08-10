"use client"

import React from "react";
import Typewriter from 'typewriter-effect';


export default function Hero1() {
  return (
    <section className="hero1_section">
      <div className="hero1_container">
        <div className="hero1_content">
        <h2> 
        <Typewriter
      options={{
  strings: [' Spreading Happiness', ' Connecting People'," Creating Memories"," Creating Stories"," Fulfilling Adventure"],
  autoStart: true,
  loop: true,
}}
onInit={(typewriter) => {
  typewriter.typeString()
    .callFunction(() => {
      console.log('String typed out!');
    })
    .pauseFor(1000)
    .deleteAll()
    .callFunction(() => {
      console.log('All strings were deleted');
    })
    .start();
}}
/>
</h2>

            
        
          <button className="hero1_btn">Start Now</button>
        </div>
       <video>
       <source src="" />
       </video>
      </div>
    </section>
  );
}
