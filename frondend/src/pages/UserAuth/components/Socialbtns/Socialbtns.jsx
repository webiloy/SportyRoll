import GoogleLogin from "./GoogleLogin";
import PropTypes from "prop-types";
import SocialButton from "./SocialButton";
import twitter from "../../../../assets/Icons/twitter.svg";
import Facebooklogin from "./FacebookLogin";
export default function Socialbtns({ setErrMesg }) {
  return (
    <div className="flex justify-between items-center">
      <SocialButton iconSrc={twitter} />
      <Facebooklogin></Facebooklogin>
      <GoogleLogin setErrMesg={setErrMesg}></GoogleLogin>
    </div>
  );
}
Socialbtns.propTypes = { setErrMesg: PropTypes.func.isRequired };
