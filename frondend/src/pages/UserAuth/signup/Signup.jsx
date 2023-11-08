import "../../../assets/Login/BackgroundOverlay.css";
import { RightArrowSVG } from "../../../components/Icons/RightArrowSVG";
import { Logo } from "../../../components/Icons/Logo";
import { Link } from "react-router-dom";
import SignupForm from "./components/SignupForm";
export function Signup() {
  return (
    <div className="w-full h-[100dvh] min-h-[700px] flex justify-center items-center relative bg-no-repeat bg-center bg-cover background-overlay bg-opacity-20">
      <div className="sm:w-[480px] w-full sm:h-fit h-full bg-black text-white items-center p-10 rounded-xl flex flex-col gap-4 child:w-full">
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
        <div className="flex gap-1 text-sm">
          <h1>Already have an account?</h1>
          <span className="text-secondary">
            <Link to={"/login"} className="flex gap-1 items-center">
              Login
              <RightArrowSVG fill={"#13EA76"} className={""}></RightArrowSVG>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
