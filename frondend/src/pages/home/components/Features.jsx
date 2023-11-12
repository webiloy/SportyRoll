import { AiOutlineCheck } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
export function Features() {
  const SectionRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#features" && SectionRef.current)
      SectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location]);
  return (
    <>
      <div
        className="flex flex-col bg-gradient-to-t from-black to-[#141414] min-h-[450px] md:bg-features-one w-screen bg-no-repeat bg-cover bg-top overflow-hidden justify-center md:aspect-[20/9] max-w-[2000px] m-auto"
        id="features"
        ref={SectionRef}
      >
        <div className="mb-4 bg-features-one w-screen h-72 bg-cover bg-center md:hidden"></div>
        <div className="flex flex-col gap-16  px-10 md:px-16 lg:px-28">
          <div className="relative bottom-20 md:bottom-0">
            <h1 className="text-white text-2xl font-bold text-center md:hidden">
              Extensive Collection of Certified Trainer-Curated Workouts
            </h1>
            <h1 className="hidden md:block text-white font-bold text-3xl lg:text-4xl xl:text-5xl text-left">
              Extensive Collection of<br></br>Certified Trainer-Curated Workouts
            </h1>
            <ul className="text-secondary-text text-sm md:text-lg lg:text-xl xl:text-2xl flex flex-col gap-6 child:flex child:items-start child:gap-1 md:child:gap-2 my-8 max-w-lg">
              <li>
                <AiOutlineCheck className="text-xl md:text-2xl lg:text-3xl flex-shrink-0"></AiOutlineCheck>
                Get fitness plans crafted by experts
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0 md:text-2xl lg:text-3xl"></AiOutlineCheck>
                Choose from more than 20 personalized routines
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0 md:text-2xl lg:text-3xl"></AiOutlineCheck>
                Track your fitness journey effortlessly
              </li>
              <li className="text-secondary underline ">
                Explore workout collection
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Feature */}

      <div className="flex flex-col bg-gradient-to-br from-black to-[#141414] min-h-[450px] md:bg-football-team-big md:aspect-[20/9] max-w-[2000px] m-auto w-screen z-40 bg-no-repeat bg-cover bg-bottom overflow-hidden justify-center">
        <div className="mb-4 bg-football-team w-screen h-72 bg-cover bg-center md:hidden"></div>
        <div className="flex flex-col gap-16 px-10 md:px-0 w-full md:items-center">
          <div className="relative bottom-20 md:bottom-0">
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xl text-center">
              Your Supportive Fitness Community
            </h1>
            <ul className="text-secondary-text text-sm md:text-lg lg:text-xl xl:text-2xl flex flex-col gap-6 child:flex child:items-start child:gap-1 md:child:gap-2 mt-8 max-w-lg ">
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0 md:text-2xl lg:text-3xl"></AiOutlineCheck>
                Join like-minded individuals for support
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0 md:text-2xl lg:text-3xl"></AiOutlineCheck>
                Find motivation in the inspiring success stories of our
                community members
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0 md:text-2xl lg:text-3xl"></AiOutlineCheck>
                Access guidance from trainers and members
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0 md:text-2xl lg:text-3xl"></AiOutlineCheck>
                Share your progress and achieve your fitness goals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
