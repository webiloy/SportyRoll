import { Logo } from "../Icons/Logo";
import { GreenLinkBtn } from "../buttons/GreenLinkBtn";
import { NavScroll } from "./NavbarScrollFunc";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
export function Navbar() {
  const { visible, prevScrollPos } = NavScroll();
  const NavBackground = !(prevScrollPos >= 100) && "md:bg-transparent ";
  const NavOpacity = visible ? "opacity-100" : "opacity-0 pointer-events-none";
  return (
    <div
      className={`${NavBackground} ${NavOpacity} duration-300 ease-in-out flex justify-between p-4 lg:p-6 px-8 lg:px-12 fixed z-50 top-0 w-full max-w-[1600px] text-white items-center child:items-center h-16 lg:h-[5.5rem] bg-black`}
    >
      <div className="flex gap-8">
        <Link to={"/"} className="flex items-center justify-center gap-1">
          {/* <h1 className="font-extrabold text-lg cursor-pointer">Sporty Roll</h1> */}
          <Logo fill="white" className="w-10 h-10"></Logo>
        </Link>
        <ul className="flex gap-6 child:cursor-pointer hidden lg:flex">
          <Link to="Discovery">Discovery</Link>
          <Link to="Diary">Diary</Link>
          <Link to="Calculator">Calculator</Link>
          <Link to="Contact us">Contact us</Link>
        </ul>
      </div>
      <div className="lg:hidden text-3xl">
        <HiMenuAlt4></HiMenuAlt4>
      </div>
      <div className="hidden lg:flex gap-12 child:cursor-pointer">
        <Link to={"signup"}>Sign Up</Link>
        <GreenLinkBtn path={"login"} text={"Login"}></GreenLinkBtn>
      </div>
    </div>
  );
}
