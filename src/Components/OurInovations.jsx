import { useEffect, useRef } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import DepthVid from "../assets/Videos/DepthVid.mp4";
import Vid from "../assets/Videos/Vid.mp4";

import a1 from "../assets/Imgs/1a.jpg";
import b1 from "../assets/Imgs/1b.jpg";
import a2 from "../assets/Imgs/2a.jpg";
import b2 from "../assets/Imgs/2b.jpg";
import a3 from "../assets/Imgs/3a.jpg";
import b3 from "../assets/Imgs/3b.jpg";
import a4 from "../assets/Imgs/4a.jpg";
import b4 from "../assets/Imgs/4b.jpg";
import a5 from "../assets/Imgs/5a.jpg";
import b5 from "../assets/Imgs/5b.jpg";

const OurInovations = () => {
  const ScrollImg = [
    { key: 1, Img: a1, cl: "h-96" },
    { key: 2, Img: b1, cl: "h-80" },
    { key: 3, Img: a2, cl: "h-96" },
    { key: 4, Img: b2, cl: "h-80" },
    { key: 5, Img: a3, cl: "h-96" },
    { key: 6, Img: b3, cl: "h-80" },
    { key: 7, Img: a4, cl: "h-96" },
    { key: 8, Img: b4, cl: "h-80" },
    { key: 9, Img: a5, cl: "h-96" },
    { key: 10, Img: b5, cl: "h-80" },
  ];
  const scrollRef = useRef(null);

  const ChangeImgToVid = () => {
    // const ImgTarget = document.getElementById("VideoOverImg");
    const VidTarget = document.getElementById("VideoOverVid");
    // ImgTarget.style.opacity = "0";
    VidTarget.play();
  };
  const ChangeVidToImg = () => {
    // const ImgTarget = document.getElementById("VideoOverImg");
    const VidTarget = document.getElementById("VideoOverVid");
    // ImgTarget.style.opacity = "1";
    VidTarget.pause();
    VidTarget.currentTime = 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1.5;
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 0);

    return () => clearInterval(interval);
  }, []);

  const SerWe = [
    { key: 1, Name: "Web Design" },
    { key: 2, Name: "3D" },
    { key: 3, Name: "Development" },
    { key: 4, Name: "Fintech" },
  ];

  return (
    <div className="flex gap-8 px-[5%] py-16 flex-col" id="jdbvhdvjkjancdhd">
      <span className="mx-[7.5%] MouseOverSpan translate-x-[-10%] opacity-0">
        <span
          className="relative duration-200"
          id="VideoOverspan"
          onMouseOver={ChangeImgToVid}
          onMouseOut={ChangeVidToImg}
        >
          {/* <img
            src={Banner}
            className="duration-200 absolute "
            id="VideoOverImg"
          /> */}
          <video
            // autoPlay
            muted
            loop
            src={DepthVid}
            className="duration-700 hover:scale-105 hover:rounded-lg"
            id="VideoOverVid"
          />
        </span>
        <h3 className="text-2xl font-bold mt-4">Marqeta</h3>
        <p className="my-2">
          Website and digital branding for a modern card-issuing platform
        </p>
        <span className="flex gap-2 text-gray-400">
          {SerWe.map((item) => (
            <p key={item.key}>
              {item.Name} <span className="ml-2">|</span>
            </p>
          ))}
        </span>
      </span>

      <span className="flex py-16 cbsjvfsdjvdbvns">
        <span className="w-[47.2%] flex flex-col items-start  justify-center text-left opacity-10 translate-x-[-75%] chbshjchvshdh">
          <h3 className="text-4xl font-extrabold">
            We transform companies <br /> through design innovation
          </h3>
          <p className="text-lg my-10 w-3/4">
            A full-service creative agency designing and building inventive
            digital experiences across all platforms and brand touchpoints.
          </p>
          <button className="text-xl flex gap-4 hover:gap-8 duration-300 items-center">
            View More Services <FaArrowRight />
          </button>
        </span>

        <span className="w-[47.2%] opacity-10 translate-x-[75%] cshvchsghvchvghvav">
          <video autoPlay loop muted src={Vid} className="w-full" />
        </span>
      </span>
      <div
        className="flex overflow-scroll gap-3 w-auto items-center opacity-0"
        id="ImagesScrollAutomatic"
        ref={scrollRef}
      >
        {ScrollImg.map((Item) => (
          <img src={Item.Img} className={Item.cl} key={Item.key} />
        ))}
      </div>
      <span className="chjhdchbncdb translate-x-[40%] opacity-0">
        <p className="w-[40%] text-xl my-5">
          Our cross-disciplinary team combines strategy, branding, UX design,
          and technology for swift, impactful results. Working as one team with
          our clients, we merge human creativity with AI-driven efficiency to
          consistently exceed expectations.
        </p>
        <button className="text-xl flex gap-4 hover:gap-8 duration-300 items-center mt-8">
          View More Services <HiArrowLongRight className="text-3xl mt-1" />
        </button>
      </span>
    </div>
  );
};

export default OurInovations;
