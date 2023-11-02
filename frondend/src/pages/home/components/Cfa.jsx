import { BsDiscord } from "react-icons/bs";
export function Cfa() {
  return (
    <div className="flex flex-col bg-gradient-to-tr from-black to-[#141414] min-h-[450px] p-10">
      <h1 className="text-2xl font-bold text-white text-center mb-8">
        Ready to Begin Your Fitness Journey?
      </h1>
      <ul className="flex flex-col gap-4 child:p-3 child:rounded-full text-center font-semibold">
        <li className="bg-secondary text-text">Sign Up</li>
        <li className="flex gap-2 justify-center items-center text-secondary border-[3px] border-secondary">
          <BsDiscord className="text-xl"></BsDiscord>Join the Community
        </li>
      </ul>
    </div>
  );
}
