export function Features() {
  return (
    <div
      // style={{ backgroundImage: `url(${featuresOne})` }}
      className="flex flex-col bg-gradient-to-tr from-black to-[#151515] min-h-[450px] md:bg-features-one md:h-[90dvh] w-screen z-40 bg-no-repeat bg-cover overflow-hidden justify-center "
    >
      <div className="my-4 bg-features-one w-screen h-72 bg-cover"></div>
      <div className="flex flex-col gap-16  px-10 lg:px-24 md:px-16">
        <h1 className="text-white font-bold text-lg lg:text-4xl text-center lg:text-left ">
          Extensive Collection of<br></br>Certified Trainer-Curated Workouts
        </h1>
        <ul className="text-secondary-text font-medium text-2xl flex flex-col gap-12 list-image-checkmark list-inside list justify-center">
          <li>Get fitness plans crafted by experts</li>
          <li>Choose from more than 20 personalized routines</li>
          <li>Track your fitness journey effortlessly</li>
        </ul>
        <h2 className="text-secondary text-lg underline">
          Explore workout collection
        </h2>
      </div>
    </div>
  );
}
