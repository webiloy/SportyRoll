import "../../../assets/Login/BackgroundOverlay.css";
import { RightArrowSVG } from "../../../components/Icons/RightArrowSVG";
import { FormSignup } from "./Form";
import { Logo } from "../../../components/Icons/Logo";
import { Link } from "react-router-dom";
export function Signup() {
  return (
    <div className="w-full h-[100dvh] min-h-[700px] flex justify-center items-center relative bg-no-repeat bg-center bg-cover background-overlay bg-opacity-20">
      <div className="sm:w-[480px] w-full sm:h-[650px] h-full bg-black text-white items-center p-10 rounded-xl flex flex-col gap-4 child:w-full">
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
        {/* Form itself */}
        <FormSignup></FormSignup>
        {/* Register */}
        <div className="flex gap-1 text-sm">
          <h1>Already a member</h1>
          <Link
            to={"/login"}
            className="flex gap-1 items-center text-secondary"
          >
            Login
            <RightArrowSVG fill={"#13EA76"} className={""}></RightArrowSVG>
          </Link>
        </div>
      </div>
    </div>
  );
}
