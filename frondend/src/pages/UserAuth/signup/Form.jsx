import { RightArrowSVG } from "../../../components/Icons/RightArrowSVG";
import { Blackinput } from "../../../components/inputs/Blackinput";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import SignupLinks from "./SignupLinks";
// import createAccount from "../../../hooks/createAccount";
export function FormSignup() {
  // user Info
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState([]);
  const UserInfo = [
    ["Username", username, setUsername, "text"],
    ["Email", email, setEmail, "email"],
    ["Password", password, setPassword, "password"],
  ];
  // hooks
  const { data, isLoading, isError } = useMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 && !error.includes("Username"))
      setError((current) => [...current, "Username"]);
    if (email.length === 0 && !error.includes("Email"))
      setError((current) => [...current, "Email"]);
    if (password.length === 0 && !error.includes("Password"))
      setError((current) => [...current, "Password"]);
  };
  return (
    <form className="flex flex-col gap-4">
      {/* Inputs */}
      <div className="flex flex-col gap-4 items-center justify-center child:w-full">
        {UserInfo.map((info, index) => {
          return (
            <div key={index}>
              <Blackinput
                title={info[0]}
                value={info[1]}
                setValue={info[2]}
                type={info[3]}
              ></Blackinput>
              {error.includes(info[0]) && (
                <h1 className="text-sm pt-1 text-red-500">
                  Please enter a vailid {info[0]}
                </h1>
              )}
            </div>
          );
        })}
      </div>
      {/* Submit */}
      <div className="w-full">
        <button
          className="text-sm w-full bg-NiceGray h-10 rounded-md font-bold flex items-center justify-center gap-1 group"
          type="submit"
          onClick={handleSubmit}
        >
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
        <div className="h-0.5 bg-NiceGray/80 w-[70%] m-auto"></div>
        <div className="absolute w-full h-full flex items-center justify-center">
          <h1 className="w-fit h-fit bg-black z-10 px-2">or</h1>
        </div>
      </div>
      {/* Signup Optios */}
      <SignupLinks></SignupLinks>
    </form>
  );
}
