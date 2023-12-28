import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import Footer from "../Components/Footer";
import CspireImg from "../assets/Imgs/Cspire.png";
import DfinityImg from "../assets/Imgs/Dfinity.png";
import TeamWorkImg from "../assets/Imgs/TeamWork.png";
import Sc from "../assets/Videos/Sc.mp4";
import Fb from "../assets/Videos/Fb.mp4";
import Key from "../assets/Videos/Key.mp4";
import Wel from "../assets/Videos/Wel.mp4";
import ES from "../assets/Videos/ES.mp4";
import Google from "../assets/Videos/Google.mp4";
import Growth from "../assets/Videos/Growth.mp4";
import Slack from "../assets/Videos/Slack.mp4";
import Speedtest from "../assets/Videos/Speedtest.mp4";

const Work = () => {
  const WorkPgData = [
    {
      key: 1,
      ClassName: "w-[28rem] bhdcbhdhbbhhjdhchcsdbbhjdc",
      CloImg: " absolute hover:opacity-0 ",
      ManinClass: "vbdshvgghafhfcvh w-[28rem]",
      Vid: Sc,
      Heading: "Snapchat",
      Headp: "Snapchat: Sharing moments in a snap!",
    },
    {
      key: 2,
      ClassName: "w-[28rem] bhdcbhdhbbhhjdhchcsdbbhjdc",
      CloImg: " absolute hover:opacity-0 ",
      ManinClass: "ksjhgrrgsvcsvcbjxbcchjd  w-[28rem]",
      Vid: Wel,
      Heading: "Wealth",
      Headp: "Wealth: Building prosperity for the future.",
    },
    {
      key: 3,
      ClassName: "w-[90%] pl-[5%] ",
      CloImg: " absolute hover:opacity-0 ",
      ManinClass: "bvdhvhsvhcbvsdhvhdcbdvcvdhj",
      Vid: Key,
      Heading: "Design",
      Headp: "Design: Crafting visual stories with impact.",
    },
    {
      key: 4,
      ClassName: "w-[28rem] bhdcbhdhbbhhjdhchcsdbbhjdc",
      ManinClass: "ksjhgrrgsvcsvcbjxbcchjd w-[28rem]",
      CloImg: " absolute hover:opacity-0",
      Vid: Google,
      Heading: "Google",
      Headp: "Google: Innovating technology for global impact.",
    },
    {
      key: 5,
      ClassName: "w-[28rem] bhdcbhdhbbhhjdhchcsdbbhjdc",
      CloImg: " absolute hover:opacity-0",
      ManinClass: "vbdshvgghafhfcvh  w-[28rem]",
      Vid: Fb,
      Heading: "Meta Verse",
      Headp: "Meta Verse: Pioneering the future of connectivity.",
    },
    {
      key: 6,
      ClassName: "w-[90%] pl-[5%] ",
      ManinClass: "bvdhvhsvhcbvsdhvhdcbdvcvdhj",
      CloImg: " absolute hover:opacity-0",
      Vid: ES,
      Heading: "3d World",
      Headp: "3D World: Immersive experiences through technology.",
    },
    {
      key: 7,
      ClassName: "w-[28rem] bhdcbhdhbbhhjdhchcsdbbhjdc",
      ManinClass: "vbdshvgghafhfcvh w-[28rem]",
      VidImg: " absolute",
      Img: TeamWorkImg,
      Heading: "Social",
      Headp: "Social: Building communities, connecting the world.",
    },
    {
      key: 8,
      ClassName: "w-[28rem] bhdcbhdhbbhhjdhchcsdbbhjdc",
      ManinClass: "ksjhgrrgsvcsvcbjxbcchjd w-[28rem]",
      CloImg: " absolute hover:opacity-0",
      Vid: Slack,
      Heading: "Slack",
      Headp: "Slack: Streamlining communication in the workplace.",
    },
    {
      key: 9,
      ClassName: "w-[90%] pl-[5%] ",
      ManinClass: "bvdhvhsvhcbvsdhvhdcbdvcvdhj",
      CloImg: " absolute hover:opacity-0",
      Vid: Growth,
      Heading: "Returns",
      Headp: "Returns: Maximizing value through strategic growth.",
    },
    {
      key: 10,
      ClassName: "w-[28rem] bhdcbhdhbbhhjdhchcsdbbhjdc",
      CloImg: " absolute hover:opacity-0",
      ManinClass: "vbdshvgghafhfcvh w-[28rem]",
      Vid: Speedtest,
      Heading: "Speed",
      Headp: "Speed: Accelerating progress with rapid innovation.",
    },
    {
      key: 11,
      ClassName: "w-[28rem] bhdcbhdhbbhhjdhchcsdbbhjdc",
      ManinClass: "ksjhgrrgsvcsvcbjxbcchjd w-[28rem]",
      VidImg: " absolute",
      Img: CspireImg,
      Heading: "Elegence",
      Headp: "Elegance: Embodying sophistication through simplicity.",
    },
    {
      key: 12,
      ManinClass: "bvdhvhsvhcbvsdhvhdcbdvcvdhj",
      ClassName: "w-[90%] pl-[5%]",
      VidImg: " absolute",
      Img: DfinityImg,
      Heading: "Infinite Blockchain",
      Headp:
        "Infinite Blockchain: Revolutionizing security with decentralization.",
    },
  ];

  // useEffect(() => {
  //   gsap.utils.toArray(".vbdshvgghafhfcvh").forEach((el, index) => {
  //     gsap.fromTo(
  //       el,
  //       { autoAlpha: 0, y: 50 },
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: 0.5,
  //         scrollTrigger: {
  //           trigger: el,
  //           start: `${(index + 2) * 10}% bottom-=200`,
  //           end: `${(index + 10) * 10}% 60%`,
  //           scrub: 2,
  //         },
  //       }
  //     );
  //   });
  //   gsap.utils.toArray(".ksjhgrrgsvcsvcbjxbcchjd").forEach((el, index) => {
  //     gsap.fromTo(
  //       el,
  //       { autoAlpha: 0, y: 300 },
  //       {
  //         autoAlpha: 1,
  //         y: -100,
  //         duration: 0.5,
  //         scrollTrigger: {
  //           trigger: el,
  //           start: `${index * 1}% bottom-=200`,
  //           end: `${(index + 4) * 10}% 60%`,
  //           scrub: 2,
  //           // markers:true
  //         },
  //       }
  //     );
  //   });
  //   gsap.utils.toArray(".bvdhvhsvhcbvsdhvhdcbdvcvdhj").forEach((el, index) => {
  //     gsap.fromTo(
  //       el,
  //       { autoAlpha: 0, x: -300 },
  //       {
  //         autoAlpha: 1,
  //         x: 0,
  //         duration: 0.5,
  //         scrollTrigger: {
  //           trigger: el,
  //           start: `${index * 1}% bottom-=200`,
  //           end: `${(index + 5) * 10}% 60%`,
  //           scrub: 2,
  //         },
  //       }
  //     );
  //   });
  // }, []);
  const ChangeImgToVid = (id) => {
    const VidTarget = document.getElementById(`VideoOverVid${id}`);
    VidTarget.play();
  };
  const ChangeVidToImg = (id) => {
    const VidTarget = document.getElementById(`VideoOverVid${id}`);
    VidTarget.pause();
    VidTarget.currentTime = 0;
  };

  return (
    <div className="">
      <h2 className="text-6xl font-bold ml-[12.5%] mt-[7.5%] xhsvhcvhj54564vs6d">
        We bring your <br />
        boldest ideas to life
      </h2>
      <div className="flex flex-wrap items-center p-12   justify-center gap-[15%] fsvcgasgscdtedtdsdcghs">
        {WorkPgData.map((item) => (
          <span
            className={`my-20 ${item.ManinClass} cjskacdhsbhvbjhfbdbvhd`}
            key={item.key}
          >
            <span
              className="relative duration-200 "
              // id={`VideoOverspan${item.key}`}
              onMouseOver={() => ChangeImgToVid(item.key)}
              onMouseOut={() => ChangeVidToImg(item.key)}
            >
              <video
                // autoPlay

                loop
                muted
                src={item.Vid}
                id={`VideoOverVid${item.key}`}
                className={`${item.ClassName} ${item.VidImg} `}
              />
              <img
                src={item.Img}
                className={`top-0 left-0 ${item.ClassName} ${item.CloImg} `}
                id={`VideoOverImg${item.key}`}
              />
            </span>
            <span className="vbdjvsjvghdcgcsuyaugx">
              <h3 className="text-xl my-2 font-medium">{item.Heading}</h3>
              <p className="text-base">{item.Headp}</p>
            </span>
          </span>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Work;
