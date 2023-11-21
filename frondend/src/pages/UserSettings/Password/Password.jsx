import { useState } from "react";
import { Blackinput } from "../../../components/inputs/Blackinput";
import Submitbtn from "./Submitbtn";
export default function Password() {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const ClearFields = () => {
    setOldPassword("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <form className="bg-text h-full rounded-lg w-full p-10 flex flex-col gap-6">
      <h1 className="font-medium text-2xl">Password</h1>
      <Blackinput
        title="Old Password"
        type="password"
        value={oldPassword}
        setValue={setOldPassword}
      ></Blackinput>
      <Blackinput
        title="New Password"
        type="password"
        value={password}
        setValue={setPassword}
      ></Blackinput>
      <Blackinput
        title="Confirm Password"
        type="password"
        value={confirmPassword}
        setValue={setConfirmPassword}
      ></Blackinput>
      <Submitbtn
        password={password}
        oldPassword={oldPassword}
        confirmPassword={confirmPassword}
        ClearFields={ClearFields}
      ></Submitbtn>
    </form>
  );
}
