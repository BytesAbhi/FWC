import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandPageVid from "../assets/Videos/Landing Page Video.mp4";
gsap.registerPlugin(ScrollTrigger);

const ActionBar = () => {
  // useEffect(() => {
  //   gsap.to("#ScaleVid", {
  //     scale: 1.17,
  //     duration: 1,
  //     scrollTrigger: {
  //       scroller: "body",
  //       trigger: "#ScaleVid",
  //       start: "top 60%",
  //       end: "center center ",
  //       scrub: 2,
  //       // markers: true,
  //     },
  //   });
  // }, []);
  return (
    <div className="py-12 px-24" id="mainDiv">
      <h2 className="font-extrabold text-7xl mt-[4rem] ml-12">
        We Care for Your Brand
      </h2>
      <h3 className="font-bold text-7xl mt-8 mb-16 ml-12">
        Let's build Together
      </h3>
      <span className="w-full grid place-items-center pb-32 pt-24">
        <video
          autoPlay
          muted
          loop
          src={LandPageVid}
          className="w-[90%]"
          id="ScaleVid"
        />
      </span>
    </div>
  );
};

export default ActionBar;
