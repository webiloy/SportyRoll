import FacebookLogin from "@greatsumini/react-facebook-login";
import Facebook from "../../../../assets/Icons/facebook.svg";
import { getCookie } from "../../../../utils/cookies";
import { setCookie } from "../../../../utils/cookies";
import { useContext } from "react";
import { WebsiteContext } from "../../../../context/WebsiteContext";
export default function Facebooklogin({ setErrMesg }) {
  const { setIsSigned } = useContext(WebsiteContext);
  const onSuccess = async (res) => {
    const Facebookresponse = await fetch(
      `https://graph.facebook.com/${res.userID}?fields=id,name,email,picture&access_token=${res.accessToken}`
    );
    const data = await Facebookresponse.json();
    const response = await fetch("http://localhost:3500/auth/facebook", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    if (response.status === 202) {
      const data = await response.json();
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
      setCookie("access_token", data.accessToken, { expires: expirationDate });
      if (getCookie("access_token")) {
        setIsSigned(true);
        window.location.href = "/";
      } else setErrMesg("Error Loggin in with Facebook");
    } else setErrMesg("Error Loggin in with Facebook");
  };
  return (
    <FacebookLogin
      appId={import.meta.env.VITE_FACEBOOK_APP_ID}
      className="group relative h-14 w-[40%] cursor-pointer hover:bg-opacity-80 duration-300 ease-in-out rounded-lg bg-NiceBlack flex items-center justify-center"
      onSuccess={(response) => {
        onSuccess(response);
      }}
      loginOptions={{
        return_scopes: true,
      }}
    >
      <img
        src={Facebook}
        alt=""
        className="duration-300 ease-in-out group-hover:scale-95"
      />
    </FacebookLogin>
  );
}
