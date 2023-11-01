import Google from "../../../assets/Icons/Google.svg";
import Facebook from "../../../assets/Icons/facebook.svg";
import twitter from "../../../assets/Icons/twitter.svg";
export default function SignupLinks() {
  const logos = [twitter, Facebook, Google];
  return (
    <div className="flex justify-between items-center">
      {logos.map((logo, index) => {
        return (
          <div
            key={index}
            className="group relative h-14 w-[30%] cursor-pointer hover:bg-opacity-80 duration-300 ease-in-out rounded-lg bg-NiceBlack flex items-center justify-center"
          >
            <img
              src={logo}
              alt=""
              className="duration-300 ease-in-out group-hover:scale-95"
            />
          </div>
        );
      })}
    </div>
  );
}
