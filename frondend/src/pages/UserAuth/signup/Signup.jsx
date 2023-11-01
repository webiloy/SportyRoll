import "../../../assets/Login/BackgroundOverlay.css";
import Google from "../../../assets/Icons/Google.svg";
import { RightArrowSVG } from "../../../components/Icons/RightArrowSVG";
import Facebook from "../../../assets/Icons/facebook.svg";
import twitter from "../../../assets/Icons/twitter.svg";
import { Logo } from "../../../components/Icons/Logo";
import { Link } from "react-router-dom";
import { Blackinput } from "../../../components/inputs/Blackinput";
import { useState } from "react";
export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full h-[100dvh] min-h-[700px] flex justify-center items-center relative bg-no-repeat bg-center bg-cover background-overlay bg-opacity-20">
      <div className="sm:w-[480px] w-full sm:h-[650px] h-full bg-black text-white items-center p-10 rounded-xl flex flex-col gap-4 child:w-full">
        {/* Logo */}
        <div className="flex justify-center">
          <Link to={"/"} className="flex gap-1 items-end justify-center">
            <Logo className={"w-7 h-7"} fill={"white"}></Logo>
            <h1 className="text-lg font-bold">Sporty Roll</h1>
          </Link>
        </div>
        {/* Header */}
        <div className="flex flex-col gap-1 pb-4">
          <h1 className="font-bold text-2xl">Sign up</h1>
          <h2 className="text-sm text-gray-300">Register to Sporty Roll</h2>
        </div>
        {/* Inputs */}
        <div className="flex flex-col gap-4 items-center justify-center child:w-full">
          <Blackinput
            title={"Username"}
            type={"text"}
            value={email}
            setValue={setEmail}
          ></Blackinput>
          <Blackinput
            title={"Email"}
            type={"email"}
            value={email}
            setValue={setEmail}
          ></Blackinput>
          <Blackinput
            title={"Password"}
            type={"password"}
            value={password}
            setValue={setPassword}
          ></Blackinput>
        </div>
        {/* Submit */}
        <div className="w-full">
          <button className="text-sm w-full bg-NiceGray h-10 rounded-md font-bold flex items-center justify-center gap-1 group">
            <p>Sign up with email</p>
            <RightArrowSVG
              fill={"white"}
              className={
                "opacity-0 group-hover:opacity-100 duration-300 ease-in-out"
              }
            ></RightArrowSVG>
          </button>
        </div>
        {/* Seperator */}
        <div className="w-full relative h-5 flex items-center">
          <div className=" h-0.5 bg-NiceGray/80 w-[70%] m-auto"></div>
          <div className="absolute w-full h-full flex items-center justify-center">
            <h1 className="w-fit h-fit bg-black z-10 px-2">or</h1>
          </div>
        </div>
        {/* Login Optios */}
        <div className="flex justify-between items-center">
          <div className="group relative h-14 w-[30%] cursor-pointer hover:bg-opacity-80 duration-300 ease-in-out rounded-lg bg-NiceBlack flex items-center justify-center">
            <img
              src={twitter}
              alt=""
              className="duration-300 ease-in-out group-hover:scale-95"
            />
          </div>
          <div className="group relative h-14 w-[30%] cursor-pointer hover:bg-opacity-80 duration-300 ease-in-out rounded-lg bg-NiceBlack flex items-center justify-center">
            <img
              src={Facebook}
              alt=""
              className="duration-300 ease-in-out group-hover:scale-95"
            />
          </div>
          <div className="group relative h-14 w-[30%] cursor-pointer hover:bg-opacity-80 duration-300 ease-in-out rounded-lg bg-NiceBlack flex items-center justify-center">
            <img
              src={Google}
              alt=""
              className="duration-300 ease-in-out group-hover:scale-95"
            />
          </div>
        </div>
        {/* Register */}
        <div className="flex gap-1 text-sm">
          <h1>Already a member</h1>
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
