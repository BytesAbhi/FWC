import React, { useState, useEffect, useRef } from "react";
import AI from "../assets/Images/AI.png";
import DP from "../assets/Images/DP.png";
import BD from "../assets/Images/BD.png";
import DW from "../assets/Images/DW.png";
import WS from "../assets/Images/WS.png";
import C from "../assets/Images/C.png";

const OurSer = () => {
  const services = [
    { key: 1, img: BD, name: "Branding" },
    { key: 2, img: DP, name: "Digital products" },
    { key: 3, img: WS, name: "Websites" },
    { key: 4, img: DW, name: "Development" },
    { key: 5, img: C, name: "Content" },
    { key: 6, img: AI, name: "Artificial Intelligence" },
  ];

  const imgRef = useRef(null);

  const handleMouseOver = (item) => {
    const img = imgRef.current;
    img.src = item.img;
    img.style.left = "-100%";
    img.id = "MouseOver";
  };

  const handleMouseOut = () => {
    const img = imgRef.current;
    img.src = "";
    img.style.left = "0";
    img.id = "";
  };

  return (
    <div className="flex items-center justify-center gap-48 mb-16" id="ServDiv">
      <p
        className="h-44 w-[30%] font-bold text-2xl -mt-8 z-50 opacity-0"
        id="ServDivP"
      >
        We build transformative digital experiences for the world's leading
        brands by blending AI, design, and technology.
      </p>
      <div className="csd54543csdcd">
        {services.map((item) => (
          <div
            key={item.key}
            className="flex justify-start py-1 w-full opacity-0"
            id="ServDivMSpan"
            onMouseOver={() => handleMouseOver(item)}
            onMouseOut={handleMouseOut}
          >
            <h4 className="text-3xl z-40">{item.name}</h4>
            <img
              ref={imgRef}
              className="absolute bottom-0 w-full right-0 -z-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSer;
