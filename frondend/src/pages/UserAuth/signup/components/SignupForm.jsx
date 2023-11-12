import { useEffect, useRef, useState } from "react";
import { Blackinput } from "../../../../components/inputs/Blackinput";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import createAccount from "../../../../hooks/auth/createAccount";
import Seperator from "./Seperator";
import Socialbtns from "../../components/Socialbtns/Socialbtns";
import SubmitButton from "../../components/SubmitButton";
export default function Signupform({ setIsCreated }) {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMesg] = useState("");
  const { mutate, data, isSuccess, isError, error, isPending } = useMutation({
    mutationFn: createAccount,
  });
  // submit
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMesg("");
  }, [email, username, password]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.endsWith("@gmail.com"))
      return setErrMesg("Please enter a valid email address.");
    if (username.length <= 3)
      return setErrMesg("Please enter a valid username.");
    if (password.length <= 5)
      return setErrMesg("Please enter a valid password.");
    const User = {
      username: username,
      email: email,
      password: password,
    };
    mutate(User);
  };
  // check Error
  useEffect(() => {
    if (!isError) return;
    const status = error.response?.status;
    if (!status) return setErrMesg("server error");
    if (status === 409) return setErrMesg(error?.response?.data.message);
  }, [isError]);
  // Makes the access token a cookie
  useEffect(() => {
    if (!isSuccess) return;
    setIsCreated(true);
  }, [isSuccess]);
  return (
    <form className="flex flex-col gap-4">
      {/* Inputs */}
      <div className="flex flex-col gap-4 items-center justify-center child:w-full">
        <Blackinput
          title={"Email"}
          type={"email"}
          value={email}
          setValue={setEmail}
          ref={userRef}
        ></Blackinput>
        <Blackinput
          title={"Username"}
          type={"text"}
          value={username}
          setValue={setUsername}
        ></Blackinput>
        <Blackinput
          title={"Password"}
          type={"password"}
          value={password}
          setValue={setPassword}
        ></Blackinput>
      </div>
      {/* Error Message */}
      <p ref={errRef} aria-live="assertive" className="text-red-500 text-xs">
        {errMsg}
      </p>
      {/* Submit */}
      <SubmitButton
        onClick={handleSubmit}
        isPending={isPending}
        text={"Register with email"}
      ></SubmitButton>
      {/* Seperator */}
      <Seperator></Seperator>
      {/* Login Optios */}
      <Socialbtns setErrMesg={setErrMesg}></Socialbtns>
    </form>
  );
}
Signupform.propTypes = { setIsCreated: PropTypes.func.isRequired };
