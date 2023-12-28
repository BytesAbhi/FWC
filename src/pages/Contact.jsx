import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import ContactImg from '../assets/ContactImg.jpg'

const Contact = () => {
  const SocialLinks = [
    { key: 1, SocialLogo: FaInstagram, Link: "" },
    { key: 2, SocialLogo: FaFacebook, Link: "" },
    { key: 3, SocialLogo: BsLinkedin, Link: "" },
  ];

  return (
    <>
      <div className=" text-black px-16 py-12 cbnbvcbndvvdfvbnvdbsv">
        <div className="flex vdbbcvsdjcvdsvcvssdvcgvhdsvszk">
          <span className="w-3/4">
            <section className="mt-12 mb-16">
              <h3 className="text-5xl my-8 font-bold">Let's Talk</h3>
              <p className="my-6 text-xl">We'd love to learn more about you and<br/> what we can design and build together.</p>
              <h6 className="text-2xl mb-2 pt-10">Become a Client</h6>
              <a
                href="mailto:futurewebcare@gmail.com?subject=Hello&body=How are you?"
                className="border-b-[1px] border-gray-300 pb-1 text-3xl font-medium"
              >
                futurewebcare@gmail.com
              </a>
            </section>
            <h3 className="text-xl mb-2">New York City,USA</h3>
            <h3 className="text-xl">Football Chowk, Ambala Cantt</h3>
          </span>
          <img src={ContactImg} className="jvhbsjhcvdshchsdhsas h-[34rem]"/>
        </div>
        <div className="flex items-center justify-between mt-6 pr-[20%] vbshjjhcsvdghvgc">
          <span className=" flex gap-8 ">
            <h4>
              <a href="">Privacy</a>
            </h4>
            <h4>
              <a href="">Terms</a>
            </h4>
          </span>
          <span className="text-xl">@FutureWebCare</span>
          <span className="flex gap-6 hvcdhvhshd">
            {SocialLinks.map((item) => (
              <a href={item.Link} key={item.key} className="text-2xl ">
                <item.SocialLogo />
              </a>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;
