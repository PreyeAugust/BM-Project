"use client";

import { useEffect } from "react";
import "./Footer.css";
import { FiSend } from "react-icons/fi";
import Image from "next/image";
import Img1 from '@/assets/logo.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  //let's create a react hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          src="/fullscreen.webm"
          loop
          autoPlay
          muted
          typeof="video/mp4"
        ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Becoming_BM</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#.com" className="logo flex">
               <Image data-aos="fade-up" src={Img1} width={100} height={100}  /> 
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              She wears several hats; as the social tech founder and CEO of
              ideyforyou, and founder of The Left Handers Africa, a business
              partner with bmsculina and wearingbm, and a social impact real
              estate developer and investor. ) I need five write ups about
              yourself like this
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillYoutube className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group one */}
            <div
              data-aos="fade-up"
              data-aos-duration-="2000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
            </div>

            {/* Group two */}
            <div
              data-aos="fade-up"
              data-aos-duration-="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
            </div>

            {/* Group three */}
            <div
              data-aos="fade-up"
              data-aos-duration-="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BECOMING BM</small>
            <small>COPYRIGHTS RESERVED - BISOLA MARIAM</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

{
  /*let age = prompt( 'age', 18 );
let message = (age < 18) ? 'Sorry You are too young' :
(age > 18) ? 'You are Welcome' :
(age == 18) ? 'Now Adult' :
'NaN'

alert(message);

let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let result = (a + b < 4) ? 'below': 'over':



let year = promt('what year was my world born?', '');

if(year == 1999) {
  alert('You are very correct');
} else {
    alert('You are a bastard');
  }

  let num = prompt('name the number', 0)
  if(num > 0) {
    alert(1);
  } else if(num < 5) {
    alert(-1);
  } else {
    alert(0);
  }
  

{let access;
let age = prompt('how old are you?');
if (age > 18) {
  alert('Access Granted');
} else {
  alert('Access Denied');
}
alert(access);}


let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message = (login == 'Employee') ? 'Hello':
(login == 'Director') ? 'Greetings':
(login == '') ? 'No login':
'':


let message = (login == 'Employee') ? 'Hello':
  (login == 'Director') ? 'Greetings':
  (login == '') ? 'No login':
  '';


  let name = ('ann', 'bob');
if(name === 'ann' || name === 'bob) {
  alert('Hi Bob and ann');
}

let age = prompt('How old are you');
let message = (age == 18 || age > 18) ? 'Hello':
  (age < 18) ? 'No login':
  '';

alert(message);

let users = [
    { name: "John Doe", age: 30, email: "john@example.com" },
    { name: "Jane Smith", age: 25, email: "jane@example.com" },
    { name: "Bob Johnson", age: 35, email: "bob@example.com" }
];

let message = (age == 18 || age > 18) ? 'Hello':
  (age < 18) ? 'No login':
  '';

alert(message);

*/
}
