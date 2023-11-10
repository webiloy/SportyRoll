import GoogleLogin from "./GoogleLogin";
import SocialButton from "./SocialButton";
import twitter from "../../../../assets/Icons/twitter.svg";
import Facebook from "../../../../assets/Icons/facebook.svg";
export default function Socialbtns({ setErrMesg }) {
  return (
    <div className="flex justify-between items-center">
      <SocialButton iconSrc={twitter} />
      <SocialButton iconSrc={Facebook} />
      <GoogleLogin setErrMesg={setErrMesg}></GoogleLogin>
    </div>
  );
}
