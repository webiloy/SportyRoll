import featuresOne from "../../../assets/featuresOne.jpg";
export function Features() {
  return (
    <div
      className="flex flex-col bg-black h-screen w-screen z-40 bg-no-repeat bg-cover overflow-hidden justify-center"
      style={{ backgroundImage: `url(${featuresOne})` }}
    >
      <div className="flex flex-col gap-16 p-8">
        <h1 className="text-white font-bold text-6xl">
          Extensive Collection of<br></br>Certified Trainer-Curated Workouts
        </h1>
        <ul className="text-secondary-text font-medium text-3xl flex flex-col gap-12 list-image-checkmark list-inside list justify-center">
          <li>Get fitness plans crafted by experts</li>
          <li>Choose from more than 20 personalized routines</li>
          <li>Track your fitness journey effortlessly</li>
        </ul>
        <h2 className="text-secondary text-xl underline">
          Explore workout collection
        </h2>
      </div>
    </div>
  );
}
