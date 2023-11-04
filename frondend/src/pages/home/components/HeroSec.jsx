export function HeroSec() {
  return (
    <div className="flex flex-col bg-black bg-hero-image bg-center aspect-[9/16] md:aspect-square lg:aspect-[2/1]  min-h-[450px]  w-full z-40 bg-no-repeat bg-cover max-w-[2000px] m-auto">
      <div className="text-white h-full flex flex-col justify-center items-center max-w-[1600px] self-center w-full">
        <h1 className="font-['Impact'] text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
          JUST BE BETTER.
        </h1>
        <h4 className="lg:text-xl md:text-xl text-sm my-8 text-center md:text-left">
          Unlock Your Fitness Potential with Our Tailored<br></br> Workout Plans
          and Progress Tracking.
        </h4>
        <button className="text-sm md:text-lg p-2 md:p-3 px-8 md:px-10 rounded-md text-text bg-secondary font-semibold w-fit">
          START NOW
        </button>
      </div>
    </div>
  );
}
