import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../assets/Logo.svg";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const NavLinks = [
    { key: 1, link: "Home", linkAddress: "/" },
    { key: 2, link: "Work", linkAddress: "/work" },
    { key: 3, link: "Service", linkAddress: "/services" },
    { key: 4, link: "About Us", linkAddress: "/about" },
    { key: 5, link: "Contact Us", linkAddress: "/contact" },
  ];

  const CrossClick = () => {
    if (window.innerWidth <= 768) {
      const DocsNav = document.getElementById("nav-span");
      const BurgerHasClick = document.getElementsByClassName("BurgerHasClick");
      const CrossHasClick = document.getElementsByClassName("CrossHasClick");
  
      for (let i = 0; i < BurgerHasClick.length; i++) {
        CrossHasClick[i].style.display = "none";
        BurgerHasClick[i].style.color = "black";
        BurgerHasClick[i].style.display = "block";
      }
      DocsNav.style.transitionDuration = "1s";
      DocsNav.style.transform = "translateX(-100%)";
    }
  };
  
  const BurgerClick = () => {
    if (window.innerWidth <= 768) {
      const DocsNav = document.getElementById("nav-span");
      const BurgerHasClick = document.getElementsByClassName("BurgerHasClick");
      const CrossHasClick = document.getElementsByClassName("CrossHasClick");
      DocsNav.style.transitionDuration = "1s";
  
      for (let i = 0; i < BurgerHasClick.length; i++) {
        CrossHasClick[i].style.display = "block";
        BurgerHasClick[i].style.display = "none";
        CrossHasClick[i].style.color = "white";
      }
      DocsNav.style.transform = "translateX(0%)";
    }
  };
  

  const location = useLocation();

  useEffect(() => {
    CrossClick();
  }, [location]);

  return (
    <div className="vdvvhhdbnvnvbh z-50">
      <span className="nfjjhdbvhvgh">
        <Link to={"/"} className="">
          <img src={Logo} className="" />
          <h1 className="">
            Future
            <span className="">Web Care</span>
          </h1>
        </Link>
      </span>
      <button
        className="relative h-8 w-8 place-items-center mr-4 z-50 "
        id="BurCross"
      >
        <RxCross2
          className=" absolute hidden text-2xl CrossHasClick "
          onClick={CrossClick}
        />
        <CgMenuLeft
          className=" absolute text-2xl BurgerHasClick"
          onClick={BurgerClick}
        />
      </button>

      <span className="" id="nav-span">
        {NavLinks.map((item) => (
          <Link
            to={item.linkAddress}
            key={item.key}
            className="mx-3 px-2 py-1 border-b-[1px] text- font-medium border-gray-300 hover:border-gray-950 duration-300 text-black" 
          >
            <h3>{item.link}</h3>
          </Link>
        ))}
      </span>
      
    </div>
  );
};

export default NavBar;
