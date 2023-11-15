import { Link } from "react-router-dom";
import { GreenLinkBtn } from "../../buttons/GreenLinkBtn";
export default function AuthLinks() {
  return (
    <div className="hidden lg:flex gap-12 child:cursor-pointer">
      <Link to={"signup"}>Sign Up</Link>
      <GreenLinkBtn path={"login"} text={"Login"}></GreenLinkBtn>
    </div>
  );
}
