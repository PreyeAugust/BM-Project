"use client";

import Image from "next/image";
import Img0 from "../../../public/DSC00229.jpg";
import Img1 from "../../../public/DSC00237.jpg";
import Img2 from "../../../public/DSC00356.jpg";
import Img3 from "../../../public/DSC00378.jpeg";
import Img5 from "../../../public/DSC00600.jpg";
import Img6 from "../../../public/DSC09509.jpg";
import Img7 from "../../../public/DSC00602.jpg";
import Img8 from "../../../public/DSC01326.jpg";
import Img9 from "../../../public/DSC01326.jpg";
import { useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import "./Section3.css";
import { BiArrowToBottom } from "react-icons/bi";

import Aos from "aos";
import "aos/dist/aos.css";



const Data = [
  {
    id: 1,
    imgSrc: Img0,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$700",
    description:
      "Huayan Picchu is a mountain in peru, rising od Machu Picchu is the so called lost city of Incas. This place is popular among tourists as the sunrise from the Sun gate is simply spectacular." ,
  },

  {
    id: 2,
    imgSrc: Img1,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$600",
    description:
      "Huayan Picchu is a mountain in peru, rising od Machu Picchu is the so called lost city of Incas. This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.",
  },

  {
    id: 3,
    imgSrc: Img2,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$700",
    description:
      "One of the Most remarkable Australia natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place",
  },

  {
    id: 4,
    imgSrc: Img3,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$800",
    description:
      "According to the world tourism ranking, 45 Million people visit turkey each year, and from that about 2 Million come to visit Cappadocia.",
  },

  {
    id: 6,
    imgSrc: Img5,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$840",
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place, also if you are a foodie and love see food, you will be exhilarated with the choice you are about to get here",
  },

  {
    id: 7,
    imgSrc: Img6,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$790",
    description:
      "Angkot wat represents the entire range of khmer art from the 9th to 15th century. This temple is considered the heart and soul of cambodia",
  },

  {
    id: 8,
    imgSrc: Img7,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$700",
    description:
      "Huayan Picchu is a mountain in peru, rising od Machu Picchu is the so called lost city of Incas. This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.",
  },

  {
    id: 9,
    imgSrc: Img8,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$700",
    description:
      "Huayan Picchu is a mountain in peru, rising od Machu Picchu is the so called lost city of Incas. This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.",
  },

  {
    id: 10,
    imgSrc: Img9,
    destTitle: "I DEY FOR YOU",
    location: "The Bryant Conference Center, Sellers Auditorium. USA",
    grade: "BECOMING BM",
    fees: "$700",
    description:
      "Huayan Picchu is a mountain in peru, rising od Machu Picchu is the so called lost city of Incas. This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.",
  },
];

const Section3 = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  
  return (
    <main className="main3 container section">
      <div  data-aos="fade-up" className="secTitle">
        <h3 className="title">
          Business & Founder Role
        </h3>
        <p className="p-description">I am a social tech founder and CEO, ideyforyou, where we leverage technology to empower survivors of domestic violence. I am also the founder of  The Left-handers Africa, the first advocacy focused organization against the stigmatization of left handers.
        You can learn more about these unique responsibilities by clicking the link below <BiArrowToBottom className="icon3" />
        </p>
       <br/>
       <br/>
        <button  data-aos="fade-up" className="main3-button">Learn More</button>
        <br/>
        <br/>
      </div>

      <div className="secContent3 grid">
        {/* here i'm going to use high order array method(map). To do that we shall use a list of object in one array.
           I'm going to create an array named data and from that we shall .map() array to fetch each destination at once. */}

        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/* Here it will return a single id from the map array*/}

                <div className="imageDiv">
                  <Image
                    src={imgSrc}
                    alt={destTitle}
                    width={300}
                    height={300}
                  />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
};

export default Section3;
