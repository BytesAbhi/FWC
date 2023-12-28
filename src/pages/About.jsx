import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";
import Abt from "../assets/Imgs/Abt.jpg";
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
import innovation from "../assets/Imgs/innovation.jpg";
import Solution from "../assets/Imgs/Solution.jpg";
import Support from "../assets/Imgs/Support.jpg";
import Footer from "../Components/Footer";

const About = () => {
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

  const reasons = [
    {
      key: 1,
      cl: "flex justify-center mb-12 vdhvghgascvas",
      img: innovation,
      point: "Expertise and Innovation",
      description:
        "Future Web Care has a team of experienced web developers who are skilled in solving complex problems and continuously innovating. They are well-versed in the latest technologies and trends in web development, ensuring that your website will be modern and efficient.",
    },
    {
      key: 2,
      cl: "flex justify-center mb-12 flex-row-reverse vdhvghgascvas",
      img: Solution,
      point: "Customized Solutions",
      description:
        "Future Web Care understands that every business is unique, and therefore offers customized web development solutions tailored to meet the specific needs of each client.",
    },
    {
      key: 3,
      cl: "flex justify-center mb-12 vdhvghgascvas",
      img: Support,
      point: "Reliable Support and Maintenance",
      description:
        "Future Web Care provides reliable support and maintenance services. They understand that a website is not just about the initial development, but also about ongoing maintenance to ensure it continues to meet the business needs effectively. Their team is committed to providing timely updates and improvements, as well as prompt responses to any issues or concerns.",
    },
  ];

  useEffect(() => {
    gsap.to(".hdbvjhdvjdbbd", {
      scale: 1.3,
      opacity: 1,
      duration: 2,
      x: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".hdbvjhdvjdbbd",
        start: "40% 80%",
        end: "center 70% ",
        scrub: 2,
      },
    });
    gsap.to("#ImagesScrollAutomatic", {
      opacity: 1,
      duration: 2,
      x: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: "#ImagesScrollAutomatic",
        start: "40% 80%",
        end: "center 70% ",
        scrub: 2,
      },
    });
    gsap.to(".djbvbkdbskbh", {
      opacity: 1,
      duration: 2,
      x: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".djbvbkdbskbh",
        start: "40% 80%",
        end: "center 70% ",
        scrub: 2,
      },
    });
    gsap.utils.toArray(".vdhvghgascvas").forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: `${index * 1}% bottom-=100`,
            end: `${(index + 10) * 10}% 60%`,
            scrub: 2,
          },
        }
      );
    });
  }, []);

  const scrollRef = useRef(null);

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

  return (
    <div className="w-full -z-[99]" id="jsjcacskjvnjbdsb445sdv">
      <h3 className="text-5xl mt-24 mb-40 ml-[15%] font-bold w-full">
        We transform brands through
        <br /> elevated digital experiences
      </h3>
      <img src={Abt} className="w-3/4 mx-[12.5%] hdbvjhdvjdbbd -z-[99]" />
      <h3 className="mx-[12.5%] text-7xl font-semibold mt-24 mb-2 cs545646as">
        New York City
      </h3>
      <p className="mx-[12.5%] text-2xl djbvbkdbskbh">Headquarters</p>
      <div
        className="flex overflow-scroll gap-12 w-auto items-center mt-20 opacity-0 cbhjshjchvsgac56dsv"
        id="ImagesScrollAutomatic"
        ref={scrollRef}
      >
        {ScrollImg.map((Item) => (
          <img src={Item.Img} className={Item.cl} key={Item.key} />
        ))}
      </div>
      <p className="text-2xl my-24 ml-[12.5%] font-medium djbvbkdbskbh translate-x-[35%] opacity-0" id="cjsbkabcbhdvdvbdj">
        We're a global group of strategists, designers, and <br />
        engineers building notable brands and premier <br />
        digital experiences that captivate users worldwide.
        <br />
        <br />
        Our unified, AI-infused creative approach ensures <br />
        scalability and consistency across all brand <br />
        touchpoints by building robust design systems.
      </p>
      <h4 className="text-4xl font-semibold mt-40 mb-20 ml-[12.5%]">
        Why choose Future Web Care
      </h4>
      {reasons.map((item) => (
        <div key={item.key} className={`${item.cl} cvhjdsvhchhdvchs54vsd`}>
          <span className="w-1/2 ml-[5%]">
            <span className="text-5xl font-extrabold text-gray-400">{`0${item.key}`}</span>
            <h5 className="text-4xl my-8 font-medium">{item.point}</h5>
            <p className="text-xl w-[80%]">{item.description}</p>
          </span>
          <img src={item.img} className="w-1/4" />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default About;
