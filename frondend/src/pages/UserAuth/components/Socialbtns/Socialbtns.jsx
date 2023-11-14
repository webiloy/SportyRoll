import GoogleLogin from "./GoogleLogin";
import PropTypes from "prop-types";
import Facebooklogin from "./FacebookLogin";
import Twitterlogin from "./TwitterLogin";
export default function Socialbtns({ setErrMesg }) {
  return (
    <div className="flex justify-between items-center">
      <Twitterlogin></Twitterlogin>
      <Facebooklogin setErrMesg={setErrMesg}></Facebooklogin>
      <GoogleLogin setErrMesg={setErrMesg}></GoogleLogin>
    </div>
  );
}
Socialbtns.propTypes = { setErrMesg: PropTypes.func.isRequired };
