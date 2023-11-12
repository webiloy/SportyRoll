import { Logo } from "../Icons/Logo";
import { GreenLinkBtn } from "../buttons/GreenLinkBtn";
import { NavScroll } from "./NavbarScrollFunc";
import { Link } from "react-router-dom";
import { Pivot as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
export function Navbar() {
  const { visible, prevScrollPos } = NavScroll();
  const NavBackground = !(prevScrollPos >= 100) && "md:bg-transparent ";
  const NavOpacity = visible ? "opacity-100" : "opacity-0 pointer-events-none";
  const [mobileVis, setMobileVis] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileVis);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileVis]);
  return (
    <>
      <div
        className={`${NavBackground} ${NavOpacity} duration-300 ease-in-out flex justify-between p-4 lg:p-6 px-8 lg:px-12 fixed z-50 top-0 left-1/2 -translate-x-1/2 w-full  text-white items-center lg:child:items-center h-16 lg:h-[5.5rem] bg-black max-w-[2000px] m-auto `}
      >
        <div className="flex gap-8">
          <Link to={"/"} className="flex items-center justify-center gap-1">
            <Logo fill="white" className="w-6 h-6 lg:w-8 lg:h-8"></Logo>
          </Link>
          <ul className="gap-6 child:cursor-pointer hidden lg:flex">
            <Link to="discovery">Discovery</Link>
            <Link to="diary">Diary</Link>
            <Link to="calculator">Calculator</Link>
            <Link to="contact-us">Contact us</Link>
          </ul>
        </div>
        <ul
          className={`${
            mobileVis ? "h-[100dvh] overflow-y-scroll" : "h-0"
          }  transition-height duration-500 ease-in-out bg-black flex flex-col px-16 gap-8 w-screen text-xl font-medium overflow-hidden fixed top-0 left-0`}
        >
          <li className="h-[1px] p-4 bg-black"></li>
          <Link onClick={() => setMobileVis(!mobileVis)} to="/">
            Home
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="discovery">
            Discovery
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="diary">
            Diary
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="calculator">
            Calculator
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="contact-us">
            Contact us
          </Link>
        </ul>
        <div className="lg:hidden text-3xl relative z-50">
          <Hamburger
            size={18}
            rounded
            toggled={mobileVis}
            toggle={setMobileVis}
          ></Hamburger>
        </div>
        <div className="hidden lg:flex gap-12 child:cursor-pointer">
          <Link to={"signup"}>Sign Up</Link>
          <GreenLinkBtn path={"login"} text={"Login"}></GreenLinkBtn>
        </div>
      </div>
    </>
  );
}
