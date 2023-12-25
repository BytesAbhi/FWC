import Footer from "../Components/Footer";
import Ai from "../assets/Imgs/Ai.jpg";
import Brad from "../assets/Imgs/Brad.jpg";
import Content from "../assets/Imgs/Content.jpg";
import Deve from "../assets/Imgs/Deve.jpg";
import Digi from "../assets/Imgs/Digi.jpg";
import Web from "../assets/Imgs/Web.jpg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const SerWeGive = [
    {
      key: 1,
      Cl: "flex w-[90%] h-[60%] justify-center items-center my-12 gap-[15%]",
      Title: "Branding",
      Description:
        "Branding is the process of creating a unique image and name for a product in the consumers' mind. It's about influencing perception and developing customer loyalty.",
      "Key Features": {
        1: { Feature: "Identity Creation" },
        2: { Feature: "Customer Loyalty" },
        3: { Feature: "Brand Recognition" },
        4: { Feature: "Brand Equity" },
        5: { Feature: "Brand Experience" },
      },
      img: Brad,
    },
    {
      key: 2,
      Cl: "flex w-[90%] h-[60%] justify-center items-center my-12 gap-[15%] flex-row-reverse",
      Title: "Digital Product",
      Description:
        "Digital products are any goods that are stored, delivered, and used in its electronic format. They are intangible goods that exist in digital form.",
      "Key Features": {
        1: { Feature: "Intangible Goods" },
        2: { Feature: "Electronic Format" },
        3: { Feature: "Digital Distribution" },
        4: { Feature: "User Experience" },
        5: { Feature: "Scalability" },
        6: { Feature: "Product Updates" },
      },
      img: Digi,
    },
    {
      key: 3,
      Cl: "flex w-[90%] h-[60%] justify-center items-center my-12 gap-[15%]",
      Title: "Website",
      Description:
        "A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.",
      "Key Features": {
        1: { Feature: "Web Pages" },
        2: { Feature: "Domain Name" },
        3: { Feature: "User Interface" },
        4: { Feature: "Navigation" },
        5: { Feature: "Content Quality" },
        6: { Feature: "Website Speed" },
        7: { Feature: "Mobile Responsiveness" },
      },
      img: Web,
    },
    {
      key: 4,
      Cl: "flex w-[90%] h-[60%] justify-center items-center my-12 gap-[15%] flex-row-reverse",
      Title: "Development",
      Description:
        "Development refers to the process of creating a product or system with specified features and attributes. The term is often used in the context of technology, indicating the process of scripting and coding to build software or applications.",
      "Key Features": {
        1: { Feature: "Product Creation" },
        2: { Feature: "System Building" },
        3: { Feature: "Coding Standards" },
        4: { Feature: "Version Control" },
        5: { Feature: "Testing" },
      },
      img: Deve,
    },
    {
      key: 5,
      Cl: "flex w-[90%] h-[60%] justify-center items-center my-12 gap-[15%]",
      Title: "Content",
      Description:
        "Content refers to the information and experiences that are directed towards an enduser or audience. It is something that is to be expressed through some medium, such as speech, writing, or any of various arts.",
      "Key Features": {
        1: { Feature: "Information Sharing" },
        2: { Feature: "User Experience" },
        3: { Feature: "Content Strategy" },
        4: { Feature: "Content Quality" },
        5: { Feature: "SEO Optimization" },
        6: { Feature: "Content Distribution" },
      },
      img: Content,
    },
    {
      key: 6,
      Cl: "flex w-[90%] h-[60%] justify-center items-center my-12 gap-[15%] flex-row-reverse mb-24",
      Title: "Artificial Intelligence",
      Description:
        "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.",
      "Key Features": {
        1: { Feature: "Human-like Thinking" },
        2: { Feature: "Action Mimicry" },
        3: { Feature: "Machine Learning" },
        4: { Feature: "Neural Networks" },
        5: { Feature: "Natural Language Processing" },
        6: { Feature: "Robotics" },
        7: { Feature: "Computer Vision" },
      },
      img: Ai,
    },
  ];

  useEffect(() => {
    gsap.utils.toArray(".chjdvdbvbdbdh").forEach((el, index) => {
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
            end: `${(index + 10) * 10}% 25%`,
            scrub: 2,
          },
        }
      );
    });
    gsap.utils.toArray(".dvhdjvdbvdjvkd").forEach((el, index) => {
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
            end: `${(index + 10) * 10}% 25%`,
            scrub: 2,
          },
        }
      );
    });
  }, []);

  return (
    <div className=" scroll-smooth" id="SerDiv">
      <h2 className="text-6xl font-bold pt-24 ml-40">
        A full-service digital
        <br /> innovation partner
      </h2>
      <p className="ml-40 mt-8 mb-[10rem] text-4xl">
        Our rich design and technology expertise
        <br /> delivers top brands and digital experiences.
      </p>
      <div className="w-full flex justify-center items-center flex-col">
        {SerWeGive.map((item, index) => (
          <span key={index} className={item.Cl}>
            <span className="w-[100%] chjdvdbvbdbdh">
              <h2 className="text-3xl mt-6">{item.Title}</h2>
              <p className="text-xl my-4">{item.Description}</p>
              {Object.values(item["Key Features"]).map((feature, i) => (
                <h2 key={i} className="pl-8 pt-2 text-xl flex">
                  <div className="bg-slate-700 h-[1px ] w-8 my-[.80rem] mr-1"></div>
                  {feature.Feature}
                </h2>
              ))}
            </span>
            <span className="bg-gray-600 w-[70%] dvhdjvdbvdjvkd pt-2 pl-2 pb-1 mr-8">
              <img src={item.img} className="w-[100%] " id="" />
            </span>
          </span>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
