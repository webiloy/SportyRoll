import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
export function HeroSec() {
  const SectionRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#hero-section" && SectionRef.current)
      SectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location]);
  return (
    <div
      className="flex flex-col bg-black bg-hero-image bg-center aspect-[9/16] md:aspect-square lg:aspect-[2/1]  sm:min-h-[450px] max-h-[450px] md:max-h-max  w-full z-40 bg-no-repeat bg-cover max-w-[2000px] m-auto"
      id="hero-section"
      ref={SectionRef}
    >
      <div className="text-white h-full flex flex-col justify-center items-center max-w-[1600px] self-center w-full">
        <h1 className="font-['Impact'] text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
          JUST BE BETTER.
        </h1>
        <h4 className="lg:text-xl md:text-xl text-sm my-8 text-center md:text-left">
          Unlock Your Fitness Potential with Our Tailored<br></br> Workout Plans
          and Progress Tracking.
        </h4>
        <Link
          to={"signup"}
          className="hover:text-black hover:bg-white duration-300 ease-in-out text-sm md:text-lg p-2 md:p-3 px-8 md:px-10 rounded-md text-text bg-secondary font-semibold w-fit"
        >
          START NOW
        </Link>
      </div>
    </div>
  );
}
