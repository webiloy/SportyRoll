import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
export function Hiw() {
  const SectionRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#how-it-works" && SectionRef.current)
      SectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location]);
  return (
    <div
      className="flex flex-col bg-gradient-to-tl from-black to-[#141414] min-h-[450px] p-10 py-14 md:p-20 lg:px-28 justify-center max-w-[2000px] m-auto"
      id="how-it-works"
      ref={SectionRef}
    >
      <h1 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center mb-8 md:mb-5 md:text-secondary-text md:text-start md:font-normal">
        How it Works
      </h1>
      <p className="hidden md:block text-white font-semibold text-2xl lg:text-3xl xl:text-4xl max-w-xl lg:max-w-2xl xl:max-w-3xl mb-14">
        Learn how Ferrisport simplifies your fitness journey with our
        step-by-step guide
      </p>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 child:w-full child:aspect-square child:rounded-lg child:shadow-lg child:bg-gradient-to-b from-[#333333] to-[#1A1A1A]">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
