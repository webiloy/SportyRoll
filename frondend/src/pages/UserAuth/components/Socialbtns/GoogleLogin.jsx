import { useGoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { WebsiteContext } from "../../../../context/WebsiteContext";
import Google from "../../../../assets/Icons/Google.svg";
import SocialButton from "./SocialButton";
import { getCookie } from "../../../../utils/cookies";
import { setCookie } from "../../../../utils/cookies";
export default function GoogleLogin({ setErrMesg }) {
  const { setIsSigned } = useContext(WebsiteContext);
  const signIn = useGoogleLogin({
    onSuccess: (credentialResponse) => OnSuccess(credentialResponse),
  });
  const OnSuccess = async (res) => {
    const response = await fetch("http://localhost:3500/auth/google", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token: res.access_token }),
    });
    if (response.status === 202) {
      const data = await response.json();
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
      setCookie("access_token", data.accsessToken, { expires: expirationDate });
      if (getCookie("access_token")) {
        setIsSigned(true);
        window.location.href = "/";
      } else setErrMesg("Error Loggin in with Google");
    } else {
      setErrMesg("Error Loggin in with Google");
      console.log(response);
    }
  };
  return <SocialButton iconSrc={Google} onClick={signIn} />;
}
