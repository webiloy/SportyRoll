import { GreenLinkBtn } from "../../../../components/buttons/GreenLinkBtn";
import success from "../../../../assets/reactions/success.svg";
export default function Success() {
  return (
    <div className="flex flex-col gap-9">
      <div className="absolute bg-secondary w-full h-20 top-0 left-0 sm:rounded-md flex items-center justify-center">
        <img src={success} alt="" className="w-10 h-10" />
      </div>
      <h1 className="font-bold text-xl pt-20">
        Your account has been created successfully
      </h1>
      <GreenLinkBtn text={"Continue"} path={"/login"}></GreenLinkBtn>
    </div>
  );
}
