import TwitterLogin from "react-twitter-login";
import twitter from "../../../../assets/Icons/twitter.svg";
import SocialButton from "./SocialButton";
export default function Twitterlogin() {
  const authHandler = (err, data) => {
    console.log(err, data);
  };
  return (
    <TwitterLogin
      className="w-[30%]"
      authCallback={authHandler}
      consumerKey={import.meta.env.VITE_TWITTER_KEY}
      consumerSecret={import.meta.env.VITE_TWITTER_SECRET}
    >
      <SocialButton iconSrc={twitter} className={"w-full"}></SocialButton>
    </TwitterLogin>
  );
}
