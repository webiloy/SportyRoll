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
      <div className="relative group">
        <Blackinput
          title="Username"
          type="text"
          value={username}
          setValue={setUsername}
        ></Blackinput>
        <div className="absolute bottom-0 right-3 h-10 flex items-center duration-300 ease-in-out group-hover:opacity-100 opacity-0">
          <button className="">
            <img src={Edit} className="w-5" alt="" />
          </button>
        </div>
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
