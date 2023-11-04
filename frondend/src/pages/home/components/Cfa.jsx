import { BsDiscord } from "react-icons/bs";
export function Cfa() {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-tr from-black to-[#141414] min-h-[450px] px-10 max-w-[2000px] m-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-8">
        Ready to Begin Your Fitness Journey?
      </h1>
      <p className="hidden md:block text-sm lg:text-base xl:text-lg text-secondary-text max-w-lg lg:max-w-[42rem] xl:max-w-3xl text-center self-center mb-14">
        Unlock the full potential of your fitness journey. Sign up to access
        personalized workouts and expert guidance. Connect with our community on
        Discord for motivation, support, and expert advice
      </p>
      <ul className="flex flex-col md:flex-row gap-4 child:rounded-full text-center font-semibold md:justify-center md:items-center">
        <li className="bg-secondary text-text py-3 px-10 border-[3px] border-secondary">
          Sign Up
        </li>
        <li className="flex gap-2 justify-center items-center text-secondary border-[3px] border-secondary p-3 md:px-5">
          <BsDiscord className="text-xl"></BsDiscord>Join the Community
        </li>
      </ul>
    </div>
  );
}
