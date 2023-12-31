import { useState, useEffect, useRef, useContext } from "react";
import { WebsiteContext } from "../../../context/WebsiteContext";
import { motion, AnimatePresence } from "framer-motion";
import Logout from "../../../assets/Icons/Logout.svg";
import Settings from "../../../assets/Icons/Settings.svg";
import { Link } from "react-router-dom";
export default function Profile() {
  const { data } = useContext(WebsiteContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target.nextElementSibling)
      )
        setIsOpen(false);
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const onClick = async () => {
    const response = await fetch("http://localhost:3500/auth/logout", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 202) window.location.href = "/";
    else console.log("error");
  };
  return (
    <div className="hidden lg:flex gap-12 child:cursor-pointer w-11 h-11 rounded-full items-center justify-center relative">
      <div
        className="bg-gradient-to-bl from-NiceGray to-[#141414] w-full h-full flex justify-center items-center rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {data?.username.slice("0", "1").toUpperCase()}
      </div>
      <AnimatePresence mode={"wait"}>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-[120%] w-48 h-24 bg-gradient-to-bl from-neutral-900 to-text rounded-lg flex flex-col justify-around px-2 text-gray-400 shadow-xl shadow-black"
          >
            <Link
              to={"/user/profile"}
              className="flex items-center gap-[12px] group"
            >
              <img
                src={Settings}
                className="h-4 group-hover:opacity-50 duration-300 ease-in-out flex items-center justify-center"
                alt="Settings icon"
              />
              Settings
            </Link>
            <button className="flex items-center gap-2 group" onClick={onClick}>
              <img
                src={Logout}
                className="h-5 group-hover:opacity-50 duration-300 ease-in-out"
                alt="Logout icon"
              />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
