import { useState, useEffect } from "react";
import FilterIcon from "../../../components/Icons/Filter";
import Dumbell from "../../../components/Icons/Dumbell";
import { AnimatePresence, motion } from "framer-motion";
export default function Filter({ filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const muscles = [
    "traps",
    "shoulders",
    "chest",
    "biceps",
    "triceps",
    "forearms",
    "obliques",
    "abdominals",
    "quads",
    "calves",
  ];
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <div className="z-10">
      <div onClick={() => setIsOpen(!isOpen)} className="flex gap-3">
        <FilterIcon className="w-6 h-fit cursor-pointer"></FilterIcon>
        Filter
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="w-screen h-[100dvh] bg-black/30 fixed top-0 right-0 z-50 flex md:items-center pt-20 md:pt-0 justify-center overflow-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-10/12 max-w-[600px] h-fit bg-NiceGray border-white border rounded-xl p-4 flex flex-col gap-3 z-50"
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">By difficulty:</h1>
                <ul className="flex gap-2 child:px-4 child:py-1 child:border-[1.5px] child:rounded-2xl child:h-fit child:cursor-pointer sm:items-start items-center sm:justify-normal justify-center">
                  <li>
                    <Dumbell color={"fill-white"} className={"w-4"}></Dumbell>
                  </li>
                  <li className="flex gap-2">
                    <Dumbell color={"fill-white"} className={"w-4"}></Dumbell>
                    <Dumbell color={"fill-white"} className={"w-4"}></Dumbell>
                  </li>
                  <li className="flex gap-2">
                    <Dumbell color={"fill-white"} className={"w-4"}></Dumbell>
                    <Dumbell color={"fill-white"} className={"w-4"}></Dumbell>
                    <Dumbell color={"fill-white"} className={"w-4"}></Dumbell>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">By Muscle:</h1>
                <ul className="flex gap-2 child:px-4 child:py-1 child:border-[1.5px] child:rounded-2xl child:h-fit flex-wrap child:cursor-pointer sm:items-start items-center sm:justify-normal justify-center">
                  {muscles.map((muscle, index) => {
                    return <li key={index}>{muscle}</li>;
                  })}
                </ul>
              </div>
              <div className="w-full flex md:justify-end md:items-end justify-center items-center">
                <div className="w-fit flex gap-2 child:px-3 child:py-2 child:rounded-lg">
                  <button className="bg-secondary text-black">Save</button>
                  <button
                    className="bg-secondary-text text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
