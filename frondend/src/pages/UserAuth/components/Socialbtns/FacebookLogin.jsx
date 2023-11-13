import FacebookLogin from "@greatsumini/react-facebook-login";
import Facebook from "../../../../assets/Icons/facebook.svg";
export default function Facebooklogin() {
  return (
    <FacebookLogin
      appId={import.meta.env.VITE_FACEBOOK_APP_ID}
      className="group relative h-14 w-[30%] cursor-pointer hover:bg-opacity-80 duration-300 ease-in-out rounded-lg bg-NiceBlack flex items-center justify-center"
      onSuccess={(response) => {
        console.log(response);
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
