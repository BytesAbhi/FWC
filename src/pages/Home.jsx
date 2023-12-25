import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ActionBar from "../Components/ActionBar";
import OurSer from "../Components/OurSer";
import OurSubs from "../Components/OurSubs";
import SerWeGive from "../Components/SerWeGive";
import OurInovations from "../Components/OurInovations";
import Footer from "../Components/Footer";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.to("#ScaleVid", {
      scale: 1.17,
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: "#ScaleVid",
        start: "top 60%",
        end: "center center ",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.to("#ServDivP", {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: "#ServDivP",
        start: "top 80%",
        end: "center 70% ",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.to("#ServDivMSpan", {
      opacity: 1,
      delay: 2,
      duration: 2,
      x: "-64px",
      scrollTrigger: {
        scroller: "body",
        trigger: "#ServDivMSpan",
        start: "200% 80%",
        end: "400% 70% ",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.utils.toArray(".SubCardHover").forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.25,
          scrollTrigger: {
            trigger: el,
            start: `${index * 3 * 10}% bottom-=100`,
            end: `${index * 3 * 10}% 80%`,
            scrub: 2,
          },
        }
      );
    });
    gsap.utils.toArray(".SerWeGive").forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0.1, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=200",
            end: "0% center",
            scrub: 2,
          },
        }
      );
    });
    gsap.to(".MouseOverSpan", {
      opacity: 1,
      duration: 2,
      x: "0",
      scrollTrigger: {
        scroller: "body",
        trigger: ".MouseOverSpan",
        start: "30% 80%",
        end: "center 70% ",
        scrub: 2,
      },
    });
    gsap.to("#ImagesScrollAutomatic", {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: "#ImagesScrollAutomatic",
        start: "top 80%",
        end: "center 70% ",
        scrub: 2,
      },
    });
    gsap.to(".chjhdchbncdb", {
      opacity: 1,
      duration: 2,
      x: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".chjhdchbncdb",
        start: "top 80%",
        end: "center 70% ",
        scrub: 2,
      },
    });
    gsap.to(".chbshjchvshdh", {
      opacity: 1,
      duration: 2,
      x: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".chbshjchvshdh",
        start: "top 80%",
        end: "center 70% ",
        scrub: 2,
      },
    });
    gsap.to(".cshvchsghvchvghvav", {
      opacity: 1,
      duration: 2,
      x: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".cshvchsghvchvghvav",
        start: "top 80%",
        end: "center 70% ",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ActionBar />
      <OurSer />
      <OurSubs />
      <SerWeGive />
      <OurInovations />
      <Footer />
    </div>
  );
};

export default Home;
