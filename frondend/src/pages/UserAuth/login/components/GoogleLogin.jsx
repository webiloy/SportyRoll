import { useGoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { WebsiteContext } from "../../../../context/WebsiteContext";
import Google from "../../../../assets/Icons/Google.svg";
import SocialLoginButton from "./SocialLoginButton";
import { getCookie } from "../../../../utils/cookies";
export default function GoogleLogin() {
  const { setIsSigned } = useContext(WebsiteContext);
  const signIn = useGoogleLogin({
    onSuccess: (credentialResponse) => OnSuccess(credentialResponse),
  });
  const OnSuccess = async (res) => {
    console.log(res);
    const response = await fetch("http://localhost:3500/auth", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token: res.access_token }),
    });

    const data = await response.json();
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
    document.cookie = `access_token=${data.accsessToken}; path=/; expires=${expirationDate}; secure; samesite=none;`;
    if (getCookie("access_token")) {
      setIsSigned(true);
      window.location.href = "/";
      console.log(data);
    }
  }; // the user’s name console.log(profileObj.email); // the user’s email address console.log(profileObj.picture); // the user’s picture URL };
  return <SocialLoginButton iconSrc={Google} onClick={signIn} />;
}
