import "../../../assets/Login/BackgroundOverlay.css";
import { RightArrowSVG } from "../../../components/Icons/RightArrowSVG";
import { Logo } from "../../../components/Icons/Logo";
import { Link } from "react-router-dom";
import SignupForm from "./components/SignupForm";
export function Signup() {
  return (
    <div className="w-full h-[100dvh] min-h-[700px] flex justify-center items-center relative bg-no-repeat bg-center bg-cover background-overlay bg-opacity-20">
      <div className="relative sm:w-[480px] sm:h-[660px] p-10 w-full h-full bg-black text-white items-centerrounded-xl flex flex-col gap-4 child:w-full duration-500 ease-in-out">
        {/* Logo */}
        <div className="flex justify-center">
          <Link to={"/"} className="flex gap-1 items-end justify-center">
            <Logo className={"w-7 h-7"} fill={"white"}></Logo>
            <h1 className="text-lg font-bold">SportyRoll</h1>
          </Link>
        </div>
        {/* Header */}
        <div className="flex flex-col gap-1 pb-4">
          <h1 className="font-bold text-2xl">Sign up</h1>
          <h2 className="text-sm text-gray-300">Register to Sporty Roll</h2>
        </div>
        {/* Inputs */}
        <SignupForm></SignupForm>
        {/* Register */}
        <div className="flex gap-1 text-sm group">
          <h1>Already have an account?</h1>
          <span className="text-secondary group-hover:text-green-500">
            <Link to={"/login"} className="flex gap-1 items-center">
              Login
              <RightArrowSVG
                fill={"#13EA76"}
                className={"group-hover:ml-[2px] duration-300 ease-in-out"}
              ></RightArrowSVG>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
