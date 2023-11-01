import PhoneSVG from "../../assets/Icons/PhoneSVG.svg";
import { GreenLinkBtn } from "../../components/buttons/GreenLinkBtn";
export function NotFoundPage() {
  // &apos;
  return (
    <div className="h-[100dvh] min-h-[700px] md:pt-0 pt-40 gap-5 w-full flex justify-center items-center flex-col px-2 text-white">
      <img src={PhoneSVG} alt="" />
      <h1 className="text-4xl font-['Impact']">404: Fitness Not Found</h1>
      <h2 className="text-center ">
        Oops! You&apos;ve lost your way on the path to fitness.
      </h2>
      <h2 className="text-center">
        But don&apos;t worry; your Gym-tastic Journey Awaits!
      </h2>
      <GreenLinkBtn path={"/"} text={"Home Page"}></GreenLinkBtn>
    </div>
  );
}
