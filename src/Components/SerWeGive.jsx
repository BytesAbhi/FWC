import React from "react";
import VR from "../assets/Imgs/VR.png";
import W3 from "../assets/Imgs/W3.png";
import WBrand from "../assets/Imgs/WBrand.png";
import WebDigi from "../assets/Imgs/WebDigi.png";

const SerWeGive = () => {
  return (
    <div className="flex justify-center my-12 gap-[10%]" id="akaoqsuduwnj">
      <span className="flex flex-col w-[40%]">
        <p className="text-3xl font-bold w-[80%] mx-[10%]">
          We guide game-changing Tech, AI & Commerce Brands, across platforms &
          places, through agile design & digital experience. We make waves™.
        </p>

        <div className="mt-8 SerWeGive hover:scale-105  duration-500 flex flex-col">
          <img src={VR} className="w-[70%] mx-[auto] duration-500" />
          <h4 className="text-2xl font-bold mx-[10%] mt-4 mb-2">Vision</h4>
          <p className="text-lg mx-[10%] mb-2">
            Vision is art of seeing invisible and turning dreams into reality.
          </p>
        </div>
        <div className="mt-8 SerWeGive hover:scale-105  duration-500 flex flex-col">
          <img src={W3} className="w-[70%] mx-[auto] duration-500" />
          <h4 className="text-2xl font-bold mx-[10%] mt-4 mb-2">Elegance</h4>
          <p className="text-lg mx-[10%] mb-2">
            Elegance is the harmonious simplicity found in sophistication.
          </p>
        </div>
      </span>
      <span className="flex flex-col w-[40%]">
        <div className="mt-8 SerWeGive hover:scale-105  duration-500 flex flex-col">
          <img src={WebDigi} className="w-[70%] mx-[auto] duration-500" />
          <h4 className="text-2xl font-bold mx-[10%] mt-4 mb-2">Esthetics</h4>
          <p className="text-lg mx-[10%] mb-2">
            Esthetics: the profound appreciation of beauty and art.
          </p>
        </div>
        <div className="mt-8 SerWeGive hover:scale-105  duration-500 flex flex-col">
          <img src={WBrand} className="w-[70%] mx-[auto] duration-500" />
          <h4 className="text-2xl font-bold mx-[10%] mt-4 mb-2">
            Social World
          </h4>
          <p className="text-lg mx-[10%] mb-2">
            Social world: a tapestry woven with diverse connections
          </p>
        </div>
      </span>
    </div>
  );
};

export default SerWeGive;
