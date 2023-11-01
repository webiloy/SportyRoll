import heroImage from "../../../assets/HeroImage.png";

export function HeroSec() {
  return (
    <div
      className="flex flex-col bg-black h-screen w-screen z-40 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="text-white px-12 h-full flex flex-col justify-center">
        <h1 className="font-['Impact'] text-white text-8xl">JUST BE BETTER.</h1>
        <h4 className="text-3xl font-medium my-10">
          Unlock Your Fitness Potential with Our Tailored<br></br> Workout Plans
          and Progress Tracking.
        </h4>
        <button className="p-2 px-10 rounded-md text-text bg-secondary font-semibold w-fit">
          START NOW
        </button>
      </div>
    </div>
  );
}
