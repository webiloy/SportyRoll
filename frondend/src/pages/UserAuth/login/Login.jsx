import "../../../assets/Login/BackgroundOverlay.css";
import { RightArrowSVG } from "../../../components/Icons/RightArrowSVG";
import { Logo } from "../../../components/Icons/Logo";
import { Link } from "react-router-dom";
import Loginform from "./components/LoginForm";
export function Login() {
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
          <h1 className="font-bold text-2xl">Log in</h1>
          <h2 className="text-sm text-gray-300">Continue to Sporty Roll</h2>
        </div>
        {/* Inputs */}
        <Loginform></Loginform>
        {/* Register */}
        <div className="flex gap-1 text-sm group">
          <h1>New to Sporty Roll?</h1>
          <span className="text-secondary group-hover:text-green-500">
            <Link to={"/signup"} className="flex gap-[3px] items-center">
              Get started
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
