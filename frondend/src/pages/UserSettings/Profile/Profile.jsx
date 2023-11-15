import GetCookieInfo from "../../../utils/GetCookieInfo";
import { Blackinput } from "../../../components/inputs/Blackinput";
import { useEffect, useState } from "react";
export default function Profile() {
  const UserInfo = GetCookieInfo()?.UserInfo;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
      <Blackinput
        title="Username"
        type="text"
        value={username}
        setValue={setUsername}
      ></Blackinput>
      <Blackinput
        title="Username"
        type="text"
        value={email}
        setValue={setEmail}
      ></Blackinput>
    </form>
  );
}
