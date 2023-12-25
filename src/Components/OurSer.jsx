import React, { useState, useEffect, useRef } from "react";
import AI from "../assets/Images/AI.png";
import DP from "../assets/Images/DP.png";
import BD from "../assets/Images/BD.png";
import DW from "../assets/Images/DW.png";
import WS from "../assets/Images/WS.png";
import C from "../assets/Images/C.png";

const OurSer = () => {
  const Ourser = [
    {
      Key: 1,
      img: BD,
      SerName: "Branding",
      p: "We create memorable identities for your business with logos, slogans, colors, fonts, collateral, packaging, and websites.",
    },
    {
      Key: 2,
      img: DP,
      SerName: "Digital products",
      p: "We design and develop innovative apps, websites, software, and platforms that solve problems, enhance user experience, and generate value.",
    },
    {
      Key: 3,
      img: WS,
      SerName: "Websites",
      p: "We design and build responsive, fast, and SEO-friendly websites that showcase your online presence and optimize conversions, usability, and performance.",
    },
    {
      Key: 4,
      img: DW,
      SerName: "Development",
      p: "We code and deploy secure, scalable, and reliable web, mobile, and desktop applications using the latest tools and frameworks.",
    },
    {
      Key: 5,
      img: C,
      SerName: "Content",
      p: "We write and edit engaging and relevant blog posts, articles, ebooks, white papers, case studies, and more for your business.",
    },
    {
      Key: 6,
      img: AI,
      SerName: "Artificial Intelligence",
      p: "We use machine learning, natural language processing, computer vision, and data science to build smart and powerful AI models and solutions.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const linkRef = useRef(null);

  const imgRef = useRef(null);

  const handleMouseOver = (index, item) => {
    setCurrentIndex(index);

    const img = imgRef.current;

    img.src = item.img;
    img.style.left = "-50%";
    img.id = "MouseOver";
  };

  const handleMouseOut = () => {
    setCurrentIndex(null);

    const img = imgRef.current;

    img.src = "";
    img.style.left = "0";
    img.id = "";
  };

  useEffect(() => {
    const link = linkRef.current;

    link.addEventListener("mouseover", handleMouseOver);
    link.addEventListener("mouseout", handleMouseOut);

    return () => {
      link.removeEventListener("mouseover", handleMouseOver);
      link.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-48 mb-16" id="ServDiv">
      <p
        className="h-44 w-[30%] font-bold text-2xl -mt-8 z-50 opacity-0"
        id="ServDivP"
      >
        We build transformative digital experiences for the world's leading
        brands by blending AI, design, and technology.
      </p>
      <span className="">
        {Ourser.map((item, index) => (
          <span
            key={item.Key}
            className="text-black relative flex w-[150%] translate-x-16 opacity-0"
            id="ServDivMSpan"
          >
            <span
              ref={linkRef}
              className="flex gap-4 z-50 items-center relative justify-center py-1"
              onMouseOver={() => handleMouseOver(index, item)}
            >
              <h4 className="text-3xl z-10">{item.SerName}</h4>
              <img
                ref={imgRef}
                className="absolute -translate-x-[50%] bottom-0 w-[100%] right-[0%] -z-10"
              />
            </span>
          </span>
        ))}
      </span>
    </div>
  );
};

export default OurSer;
