import { Logo } from "../Icons/Logo";
import { WebsiteContext } from "../../context/WebsiteContext";
import { NavScroll } from "./NavbarScrollFunc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthLinks from "./components/AuthLinks";
import Mobile from "./components/Mobile";
import Profile from "./components/Profile";
export function Navbar() {
  const { auth } = useContext(WebsiteContext);
  const { visible, prevScrollPos } = NavScroll();
  const NavBackground = !(prevScrollPos >= 100) && "md:bg-transparent ";
  const NavOpacity = visible ? "opacity-100" : "opacity-0 pointer-events-none";
  return (
    <>
      <div
        className={`${NavBackground} ${NavOpacity} duration-300 ease-in-out flex justify-between p-4 lg:p-6 px-8 lg:px-12 fixed z-40 top-0 left-1/2 -translate-x-1/2 w-full  text-white items-center lg:child:items-center h-16 lg:h-[5.5rem] bg-neutral-950 max-w-[2000px] m-auto `}
      >
        <div className="flex gap-8">
          <Link to={"/"} className="flex items-center justify-center gap-1">
            <Logo fill="white" className="w-6 h-6 lg:w-8 lg:h-8"></Logo>
          </Link>
          <ul className="gap-6 child:cursor-pointer hidden lg:flex">
            <Link to="/discovery">Discovery</Link>
            <Link to="/diary">Diary</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/contact-us">Contact us</Link>
          </ul>
        </div>
        <Mobile></Mobile>
        {auth !== false ? <Profile></Profile> : <AuthLinks></AuthLinks>}
      </div>
    </>
  );
}
