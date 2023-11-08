import { useGoogleLogin } from "@react-oauth/google";
import Google from "../../../../assets/Icons/Google.svg";
import SocialLoginButton from "./SocialLoginButton";
export default function GoogleLogin() {
  const signIn = useGoogleLogin({
    onSuccess: (credentialResponse) => OnSuccess(credentialResponse),
  });
  const OnSuccess = async (res) => {
    console.log(res);
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${res.access_token}`,
        },
      }
    );

    const profileData = await response.json();
    console.log(profileData);
  }; // the user’s name console.log(profileObj.email); // the user’s email address console.log(profileObj.picture); // the user’s picture URL };
  return <SocialLoginButton iconSrc={Google} onClick={signIn} />;
}
