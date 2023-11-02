export function HeroSec() {
  return (
    <div className="flex flex-col bg-black bg-hero-image bg-center h-[80dvh] md:h-[90dvh] min-h-[450px]  w-full z-40 bg-no-repeat bg-cover  px-10 md:px-16 lg:px-24">
      <div className="text-white h-full flex flex-col justify-center items-center md:items-start">
        <h1 className="font-['Impact'] text-white  md:text-6xl text-4xl">
          JUST BE BETTER.
        </h1>
        <h4 className="lg:text-xl md:text-lg text-sm my-8 text-center md:text-left">
          Unlock Your Fitness Potential with Our Tailored<br></br> Workout Plans
          and Progress Tracking.
        </h4>
        <button className="text-sm md:text-base p-2 px-8 md:px-10 rounded-md text-text bg-secondary font-medium w-fit">
          START NOW
        </button>
      </div>
    </div>
  );
}
