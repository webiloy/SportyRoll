import { useState, useEffect } from "react";
import FilterIcon from "../../../components/Icons/Filter";
import Dumbell from "../../../components/Icons/Dumbell";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import X from "../../../components/Icons/X";
export default function Filter({ filterObject, setFilterObject, refetch }) {
  const [isOpen, setIsOpen] = useState(false);
  const muscles = [
    "Traps",
    "Shoulders",
    "Chest",
    "Biceps",
    "Triceps",
    "Forearms",
    "Obliques",
    "Abdominals",
    "Quads",
    "Calves",
  ];
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  const onDifficultyClick = (index) => {
    const difficulty = filterObject.difficulty;
    if (difficulty.includes(index)) {
      let place = difficulty.indexOf(index);
      difficulty.splice(place, 1);
    } else difficulty.push(index);
    setFilterObject((prevFilterObject) => ({
      ...prevFilterObject,
      difficulty: difficulty,
    }));
  };
  const onMusclesClick = (muscle) => {
    const muscles = filterObject.muscles;
    if (muscles.includes(muscle)) {
      let place = muscles.indexOf(muscle);
      muscles.splice(place, 1);
    } else muscles.push(muscle);
    setFilterObject((prevFilterObject) => ({
      ...prevFilterObject,
      muscles: muscles,
    }));
  };
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
              className="w-10/12 max-w-[600px] h-fit bg-NiceGray border-white border rounded-xl p-4 flex flex-col gap-3 z-50 relative"
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">By difficulty:</h1>
                <ul className="flex gap-2 child:px-4 child:py-1 child:border-[1.5px] child:rounded-2xl child:h-fit child:cursor-pointer sm:items-start items-center sm:justify-normal justify-center">
                  {Array.from(Array(3), (_, index) => (
                    <li
                      key={index}
                      className={`flex gap-2 ${
                        filterObject.difficulty.includes(index + 1) &&
                        "bg-black"
                      }`}
                      onClick={() => onDifficultyClick(index + 1)}
                    >
                      {Array.from(Array(index + 1), (_, index1) => (
                        <Dumbell
                          key={index1}
                          color={`${
                            filterObject.difficulty.includes(index + 1)
                              ? "fill-white"
                              : "fill-white"
                          }`}
                          className={"w-4"}
                        ></Dumbell>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">By Muscle:</h1>
                <ul className="flex gap-2 child:px-4 child:py-1 child:border-[1.5px] child:rounded-2xl child:h-fit flex-wrap child:cursor-pointer sm:items-start items-center sm:justify-normal justify-center">
                  {muscles.map((muscle, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          filterObject.muscles.includes(muscle) && "bg-black"
                        }`}
                        onClick={() => onMusclesClick(muscle)}
                      >
                        {muscle}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                className="absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-3 hover:fill-white/50 cursor-pointer duration-300 ease-in-out"></X>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
Filter.propTypes = {
  filterObject: PropTypes.object,
  setFilterObject: PropTypes.func,
};
