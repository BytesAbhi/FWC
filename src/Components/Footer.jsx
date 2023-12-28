import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const SocialLinks = [
    { key: 1, SocialLogo: FaInstagram, Link: "" },
    { key: 2, SocialLogo: FaFacebook, Link: "" },
    { key: 3, SocialLogo: BsLinkedin, Link: "" },
  ];

  const QuestionAns = [
    {
      key: 1,
      Question: "What is the team’s experience in web development?",
      Ans: "The team has several years of experience in web development, having worked on a variety of projects across different industries. This experience allows them to anticipate common challenges and apply proven solutions. They have a deep understanding of both front-end and back-end technologies, and they are proficient in multiple programming languages and frameworks. Their portfolio showcases their ability to deliver high-quality, professional websites that meet their clients’ needs.",
    },
    {
      key: 2,
      Question:
        "Does the team stay updated with the latest web technologies and trends?",
      Ans: "Yes, the team is committed to continuous learning and stays updated with the latest web technologies, frameworks, and trends. This ensures that they can provide modern and efficient solutions. They regularly attend industry conferences, participate in webinars, and take online courses to keep their skills sharp. They also follow industry thought leaders and subscribe to relevant newsletters and blogs. This commitment to staying current means they can offer their clients the most effective and innovative solutions.",
    },
    {
      key: 3,
      Question: "How does the team approach problem-solving?",
      Ans: "The team follows a systematic approach to problem-solving, which includes understanding the problem, brainstorming solutions, evaluating these solutions, and then implementing the best one. They use their technical knowledge and creativity to come up with effective solutions. They also value collaboration and often work together to solve complex problems. They believe that every problem is an opportunity to learn and grow.",
    },
    {
      key: 4,
      Question: "Can the team work within my budget and timeline?",
      Ans: "The team understands that every project has unique requirements, including budget and timeline constraints. They are committed to providing high-quality services that deliver value for money. They work closely with their clients to understand their needs and then create a detailed project plan that outlines the scope of work, timeline, and budget. They also have a track record of completing projects on time and within budget.",
    },
    {
      key: 5,
      Question: "Does the team have good communication skills?",
      Ans: "Yes, the team values clear and open communication. They understand that effective communication is key to the success of any project. They keep their clients informed at every stage of the project and are always available to answer questions or address concerns. They also use various communication tools to ensure smooth collaboration with their clients.",
    },
  ];
  const NavLinks = [
    { key: 1, link: "Home", linkAddress: "/" },
    { key: 2, link: "Work", linkAddress: "/work" },
    { key: 3, link: "Service", linkAddress: "/services" },
    { key: 4, link: "About Us", linkAddress: "/about" },
    { key: 5, link: "Contact Us", linkAddress: "/contact" },
  ];

  useEffect(() => {
    gsap.utils.toArray(".cnsjdvhsvsndb").forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x: 50 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: `${index * 1}% bottom-=150`,
            end: `${(index + 10) * 10}% 75%`,
            scrub: 2,
          },
        }
      );
    });
    gsap.utils.toArray(".vdhjbsbdvbsvbj").forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x: 50 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: `${index * 1}% bottom-=10`,
            end: `${(index + 1) * 10}% 90%`,
            scrub: 2,
          },
        }
      );
    });
  }, []);

  const handleClick = (key) => {
    if (activeQuestion === key) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(key);
    }
  };

  return (
    <div className="bg-[#17191f] text-white px-16 py-12 " id="jsbhjvchgsjbcsdgh">
      <div>
        <h3 className="text-4xl font-bold cnsjdvhsvsndb">FAQ</h3>
        {QuestionAns.map((item) => (
          <div
            className="mt-4 py-4 border-b-[1px] cnsjdvhsvsndb"
            key={item.key}
          >
            <span className="flex justify-between">
              <h6 className="text-2xl">{item.Question}</h6>
              <button
                className="relative h-12 w-12 flex items-center mr-4 z-50"
                onClick={() => handleClick(item.key)}
              >
                {activeQuestion === item.key ? <SlArrowUp /> : <SlArrowDown />}
              </button>
            </span>
            {activeQuestion === item.key && (
              <p className="w-[80%] mt-4">{item.Ans}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex vdbhvhsnkdvndskjdffb">
        <span className="w-3/4  cnsjdvhsvsndb">
          <section className="mt-12 mb-16">
            <h3 className="text-5xl my-8 font-semibold">Let's Talk</h3>
            <a
              href="mailto:futurewebcare@gmail.com?subject=Hello&body=How are you?"
              className="border-b-[1px] border-gray-400 pb-1 text-3xl"
            >
              futurewebcare@gmail.com
            </a>
          </section>
          <h3 className="text-lg font-thin mb-2">New York City,USA</h3>
          <h3 className="text-lg font-thin">Football Chowk, Ambala Cantt</h3>
        </span>
        <span className="flex flex-col w-1/4 justify-center items-start mt-12  cnsjdvhsvsndb cbjhshdvdcghsvh">
          {NavLinks.map((item) => (
            <Link
              to={item.linkAddress}
              className="text-sm pb-1 mb-3 border-b-[1px] pr-4 hover:border-gray-800"
              key={item.key}
            >
              {item.link}
            </Link>
          ))}
        </span>
      </div>
      <div className="flex items-center justify-between mt-6 pr-[20%] vhjdvhvcbvdbcbh">
        <span className=" flex gap-8 font-thin vdhjbsbdvbsvbj">
          <h4>
            <a href="">Privacy</a>
          </h4>
          <h4>
            <a href="">Terms</a>
          </h4>
        </span>
        <span className="text-lg font-extralight vdhjbsbdvbsvbj">@FutureWebCare</span>
        <span className="flex gap-6 bnvbjzchdsvh">
          {SocialLinks.map((item) => (
            <a href={item.Link} key={item.key} className="text-2xl vdhjbsbdvbsvbj">
              <item.SocialLogo />
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Footer;
