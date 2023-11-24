import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { WebsiteContext } from "../../../context/WebsiteContext";
export default function Mobile() {
  const { auth } = useContext(WebsiteContext);
  const [mobileVis, setMobileVis] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileVis);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileVis]);
  const Logout = async () => {
    const response = await fetch("http://localhost:3500/auth/logout", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 202) {
      window.location.href = "/";
      setMobileVis(!mobileVis);
    } else console.log("error");
  };
  return (
    <>
      <ul
        className={`${
          mobileVis ? "h-[100dvh] overflow-y-scroll" : "h-0"
        }  transition-height duration-500 ease-in-out bg-black flex flex-col px-16 gap-8 w-screen text-xl font-medium overflow-hidden fixed top-0 left-0`}
      >
        <div className="flex flex-col gap-8">
          <li className="h-[1px] p-4 bg-black"></li>
          <Link onClick={() => setMobileVis(!mobileVis)} to="/">
            Home
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="/discovery">
            Discovery
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="/diary">
            Diary
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="/calculator">
            Calculator
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="/contact-us">
            Contact us
          </Link>
          <p className="w-full h-[1px] bg-white"></p>
          {auth && (
            <>
              <Link
                to={"/user/profile"}
                onClick={() => setMobileVis(!mobileVis)}
              >
                Settings
              </Link>
              <Link onClick={Logout}>Logout</Link>
            </>
          )}
          {!auth && (
            <>
              <Link to="/login" onClick={() => setMobileVis(!mobileVis)}>
                Login
              </Link>
              <Link to="/signup" onClick={() => setMobileVis(!mobileVis)}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </ul>
      <div className="lg:hidden text-3xl relative z-50">
        <Hamburger
          size={18}
          rounded
          toggled={mobileVis}
          toggle={setMobileVis}
        ></Hamburger>
      </div>
    </>
  );
}
