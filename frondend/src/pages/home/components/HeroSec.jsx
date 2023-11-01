import heroImage from "../../../assets/HeroImage.png";

export function HeroSec() {
  return (
    <div
      className="bg-black h-[2000px] w-screen z-40"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="w-screen h-[5.5rem]"></div>
      <div className="text-white px-12">
        <h1 className="font-['Impact'] text-white">JUST BE BETTER.</h1>
      </div>
    </div>
  );
}
