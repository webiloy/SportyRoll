import { AiOutlinePlus } from "react-icons/ai";
export function Faq() {
  return (
    <div className="flex flex-col bg-gradient-to-bl from-black to-[#141414] min-h-[450px] py-10 px-2 md:px-10 relative">
      <h1 className="text-2xl font-bold text-white text-center mb-4">FAQ</h1>
      <ul className="text-secondary-text child:m-5 child:border-b child:border-[#4d4d4d] child:p-2 child:flex child:gap-3 child:items-center child:relative">
        <li>
          How do I get started on Ferrisport?
          <AiOutlinePlus className="text-lg absolute right-0 flex-shrink-0"></AiOutlinePlus>
        </li>
        <li>
          What types of workouts are available on Ferrisport?
          <AiOutlinePlus className="text-lg absolute right-0 flex-shrink-0"></AiOutlinePlus>
        </li>
        <li>
          Are the workout plans suitable for beginners?
          <AiOutlinePlus className="text-lg absolute right-0 flex-shrink-0"></AiOutlinePlus>
        </li>
        <li>
          Is Ferrisport free to use?
          <AiOutlinePlus className="text-lg absolute right-0 flex-shrink-0"></AiOutlinePlus>
        </li>
        <li>
          Is there a mobile app for Ferrisport?
          <AiOutlinePlus className="text-lg absolute right-0 flex-shrink-0"></AiOutlinePlus>
        </li>
      </ul>
    </div>
  );
}
