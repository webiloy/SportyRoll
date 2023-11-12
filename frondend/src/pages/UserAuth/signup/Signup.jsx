import "../../../assets/Login/BackgroundOverlay.css";
import { useState } from "react";
import { RightArrowSVG } from "../../../components/Icons/RightArrowSVG";
import { Logo } from "../../../components/Icons/Logo";
import { Link } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Success from "./components/Success";
export function Signup() {
  const [isCreated, setIsCreated] = useState(false);
  const height = isCreated ? "sm:h-[300px]" : "sm:h-[660px]";
  return (
    <div className="w-full h-[100dvh] min-h-[700px] flex justify-center items-center relative bg-no-repeat bg-center bg-cover background-overlay bg-opacity-20">
      <div
        className={`relative sm:w-[480px] w-full ${height} h-full bg-black text-white items-center p-10 rounded-xl flex flex-col gap-4 child:w-full duration-500 ease-in-out`}
      >
        {isCreated ? (
          <Success></Success>
        ) : (
          <>
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
            <SignupForm setIsCreated={setIsCreated}></SignupForm>
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
          </>
        )}
      </div>
    </div>
  );
}
