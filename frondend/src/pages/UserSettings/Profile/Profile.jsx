import GetCookieInfo from "../../../utils/GetCookieInfo";
import { Blackinput } from "../../../components/inputs/Blackinput";
import Edit from "../../../assets/Icons/Edit.svg";
import { useEffect, useState } from "react";
export default function Profile() {
  const UserInfo = GetCookieInfo()?.UserInfo;
  const [username, setUsername] = useState("Loading...");
  const [email, setEmail] = useState("Loading...");
  useEffect(() => {
    if (UserInfo) {
      setUsername(UserInfo.username);
      setEmail(UserInfo.email);
    }
  }, [UserInfo]);
  return (
    <form className="bg-text h-full rounded-md w-full p-10 flex flex-col gap-6">
      <div>
        <h1 className="font-medium text-2xl">Profile</h1>
      </div>
      <div className="relative">
        <Blackinput
          title="Username"
          type="text"
          value={username}
          setValue={setUsername}
        ></Blackinput>
        <button className="absolute top-2/4 right-2">
          <img src={Edit} className="w-5" alt="" />
        </button>
      </div>
      <Blackinput
        title="Email"
        type="email"
        value={email}
        setValue={setEmail}
      ></Blackinput>
    </form>
  );
}
