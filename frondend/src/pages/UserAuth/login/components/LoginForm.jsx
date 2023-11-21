import { useEffect, useRef, useState, useContext } from "react";
import { WebsiteContext } from "../../../../context/WebsiteContext";
import { Blackinput } from "../../../../components/inputs/Blackinput";
import { useMutation } from "@tanstack/react-query";
import LoginAuth from "../../../../hooks/auth/LoginAuth";
import Seperator from "../../components/Seperator";
import Socialbtns from "../../components/Socialbtns/Socialbtns";
import SubmitButton from "../../components/SubmitButton";
export default function Loginform() {
  const { setAuth } = useContext(WebsiteContext);
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMesg] = useState("");
  const { mutate, data, isSuccess, isError, error, isPending } = useMutation({
    mutationFn: LoginAuth,
  });
  // submit
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMesg("");
  }, [email, password]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.endsWith("@gmail.com"))
      return setErrMesg("Please enter a valid email address.");
    if (password.length <= 5)
      return setErrMesg("Please enter a valid password.");
    const User = { email: email, password: password };
    mutate(User);
  };
  // check Error
  useEffect(() => {
    if (!isError) return;
    const status = error.response?.status;
    if (!status) return setErrMesg("server error.");
    if (status === 401) return setErrMesg("Invalid email or password.");
    if (status === 429)
      return setErrMesg("Exceeded login attempts. Try again later.");
  }, [isError]);
  useEffect(() => {
    if (!isSuccess) return;
    if (data) {
      setAuth(true);
      window.location.href = "/";
    }
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
        text={"Continue with email"}
      ></SubmitButton>
      {/* Seperator */}
      <Seperator></Seperator>
      {/* Login Optios */}
      <Socialbtns setErrMesg={setErrMesg}></Socialbtns>
    </form>
  );
}
