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
    const DocsNav = document.getElementById("nav-span");
    const BurgerHasClick = document.getElementsByClassName("BurgerHasClick");
    const CrossHasClick = document.getElementsByClassName("CrossHasClick");

    for (let i = 0; i < BurgerHasClick.length; i++) {
      CrossHasClick[i].style.display = "none";
      BurgerHasClick[i].style.display = "block";
    }
    DocsNav.style.transitionDuration = "1s";
    DocsNav.style.right = "-100%";
  };

  const BurgerClick = () => {
    const DocsNav = document.getElementById("nav-span");
    const BurgerHasClick = document.getElementsByClassName("BurgerHasClick");
    const CrossHasClick = document.getElementsByClassName("CrossHasClick");
    DocsNav.style.transitionDuration = "1s";

    for (let i = 0; i < BurgerHasClick.length; i++) {
      CrossHasClick[i].style.display = "block";
      BurgerHasClick[i].style.display = "none";
    }
    DocsNav.style.right = "0%";
  };

  return (
    <div className="flex  w-full justify-between items-center py-4 px-24">
      <span className="flex gap-2">
        <Link to={"/"} className="flex gap-2">
          <img src={Logo} className="h-14" />
          <h1 className="text-2xl font-extrabold flex flex-col mt-1">
            Future
            <span className="text-base -mt-2">Web Care</span>
          </h1>
        </Link>
      </span>
      <button
        className="relative h-12 w-12 place-items-center mr-4 z-50 "
        id="BurCross"
      >
        <RxCross2
          className=" absolute hidden text-3xl CrossHasClick text-white"
          onClick={CrossClick}
        />
        <CgMenuLeft
          className=" absolute text-3xl BurgerHasClick text-white"
          onClick={BurgerClick}
        />
      </button>

      <span className="" id="nav-span">
        {NavLinks.map((item) => (
          <Link
            to={item.linkAddress}
            key={item.key}
            className="mx-6 px-2 py-1 border-b-[1px] text-sm font-medium border-gray-300 hover:border-gray-950 duration-300 text-black"
          >
            <h3>{item.link}</h3>
          </Link>
        ))}
      </span>
    </div>
  );
};

export default NavBar;
