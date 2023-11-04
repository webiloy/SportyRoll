import { AiOutlinePlus } from "react-icons/ai";
export function Faq() {
  return (
    <div className="flex flex-col bg-gradient-to-bl from-black to-[#141414] min-h-[450px] py-10 px-2 md:px-10 lg:px-28 max-w-[2000px] m-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-4 lg:hidden">
        FAQ
      </h1>
      <h1 className="hidden lg:block text-secondary font-bold mb-4 text-4xl">
        Frequently Asked Questions
      </h1>
      <ul className="text-secondary-text child:m-5 child:lg:mx-0 child:border-b child:border-[#4d4d4d] child:p-2  child:flex child:justify-between child:items-center child:lg:border-none lg:child:bg-[#1f1f1f] lg:text-white child:lg:px-10 child:lg:py-5 child:lg:my-2 child:text-lg child:lg:rounded-sm lg:font-medium">
        <li>
          How do I get started on Ferrisport?
          <AiOutlinePlus className="text-lg lg:text-xl flex-shrink-0"></AiOutlinePlus>
        </li>
        <li>
          What types of workouts are available on Ferrisport?
          <AiOutlinePlus className="text-lg flex-shrink-0 lg:text-xl"></AiOutlinePlus>
        </li>
        <li>
          Are the workout plans suitable for beginners?
          <AiOutlinePlus className="text-lg flex-shrink-0 lg:text-xl"></AiOutlinePlus>
        </li>
        <li>
          Is Ferrisport free to use?
          <AiOutlinePlus className="text-lg flex-shrink-0 lg:text-xl"></AiOutlinePlus>
        </li>
        <li>
          Is there a mobile app for Ferrisport?
          <AiOutlinePlus className="text-lg flex-shrink-0 lg:text-xl"></AiOutlinePlus>
        </li>
      </ul>
    </div>
  );
}
