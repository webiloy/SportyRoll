import { AiOutlineCheck } from "react-icons/ai";
export function Features() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-t from-black to-[#141414] min-h-[450px] md:bg-features-one md:h-[90dvh] w-screen z-40 bg-no-repeat bg-cover overflow-hidden justify-center">
        <div className="mb-4 bg-features-one w-screen h-72 bg-cover bg-center md:hidden"></div>
        <div className="flex flex-col gap-16  px-10 lg:px-24 md:px-16">
          <div className="relative bottom-20">
            <h1 className="text-white font-bold text-2xl text-center lg:text-left">
              Extensive Collection of Certified Trainer-Curated Workouts
            </h1>
            <ul className="text-secondary-text text-sm  flex flex-col gap-6 child:flex child:items-start child:gap-1 my-8">
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0"></AiOutlineCheck>
                Get fitness plans crafted by experts
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0"></AiOutlineCheck>
                Choose from more than 20 personalized routines
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0"></AiOutlineCheck>
                Track your fitness journey effortlessly
              </li>
              <li className="text-secondary underline">
                Explore workout collection
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Feature */}

      <div className="flex flex-col bg-gradient-to-br from-black to-[#141414] min-h-[450px] md:bg-features-one md:h-[90dvh] w-screen z-40 bg-no-repeat bg-cover overflow-hidden justify-center ">
        <div className="mb-4 bg-football-team w-screen h-72 bg-cover bg-center md:hidden"></div>
        <div className="flex flex-col gap-16  px-10 lg:px-24 md:px-16">
          <div className="relative bottom-20">
            <h1 className="text-white font-bold text-2xl text-center lg:text-left">
              Your Supportive Fitness Community
            </h1>
            <ul className="text-secondary-text text-sm  flex flex-col gap-6 child:flex child:items-start child:gap-1 mt-8">
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0"></AiOutlineCheck>
                Join like-minded individuals for support
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0"></AiOutlineCheck>
                Find motivation in the inspiring success stories of our
                community members
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0"></AiOutlineCheck>
                Access guidance from trainers and members
              </li>
              <li>
                <AiOutlineCheck className="text-xl flex-shrink-0"></AiOutlineCheck>
                Share your progress and achieve your fitness goals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
