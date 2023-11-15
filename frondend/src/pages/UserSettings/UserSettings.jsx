import { useState } from "react";
import Password from "./Password/Password";
import Profile from "./Profile/Profile";
import User from "../../assets/Icons/User.svg";
import Key from "../../assets/Icons/Key.svg";
export default function UserSettings({ page }) {
  const [section, setSection] = useState(page);
  const LoadSection = section === "profile" ? <Profile /> : <Password />;
  const handleClick = (info) => () => {
    setSection(info);
    window.history.pushState(null, "", info);
  };
  return (
    <div className="min-h-[450px] mt-28 sm:px-12 max-w-[2000px] m-auto text-gray-400 flex gap-4">
      <div className="flex flex-col w-72 h-full gap-1 child-hover:bg-zinc-800 child:gap-2">
        <button
          className={`${
            section === "profile" && "bg-text"
          } h-12 rounded-lg flex items-center duration-300 ease-in-out px-2`}
          onClick={handleClick("profile")}
        >
          <img src={User} className="w-7" alt="" />
          <p>Profile</p>
        </button>
        <button
          className={`${
            section === "password" && "bg-text"
          } text-left h-12 rounded-lg flex items-center duration-300 ease-in-out px-2`}
          onClick={handleClick("password")}
        >
          <img src={Key} className="w-7" alt="" />
          <p>Password</p>
        </button>
      </div>
      <div>{LoadSection}</div>
    </div>
  );
}
