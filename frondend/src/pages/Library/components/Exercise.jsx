import PropTypes from "prop-types";
import Dumbell from "../../../components/Icons/Dumbell";
import Plus from "../../../components/Icons/Plus";
export default function Exercise({ exercise }) {
  //   const dumbellArray = Array.from({ length: 3 }, (_, index) => {
  //     return <Dumbell key={index}></Dumbell>;
  //   });
  return (
    <div className="flex items-center p-2 gap-2">
      <div className="flex gap-2 w-11/12 items-center">
        <div className="h-[10%] w-[10%] bg-gray-700 rounded-md">
          <img
            src="https://cdn.discordapp.com/attachments/1056579885755269213/1177717608561254523/propotam_man_doing_the_Dumbbell_Incline_Bench_Press_exercise_wi_1f4da8ab-6734-46c2-baca-28d17da11d65.png?ex=657385fe&is=656110fe&hm=38c0d59f6aa6f733b0e1e707a98a8f953460556e478c429b4da2a48792489da0&"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex gap-1 child:text-[10px] child:sm:text-lg">
            <h1>{exercise.name}</h1>
          </div>
          <div className="flex text-gray-400 child:text-[10px] child:sm:text-base gap-2">
            <p className="flex items-center gap-2">
              Level:
              {/* exercise.difficulty */}
              <span className="flex items-center justify-center gap-1">
                <Dumbell className={"w-4"} color={"fill-green-400"}></Dumbell>
                <Dumbell
                  className={"w-4"}
                  color={`${
                    exercise.difficulty >= 2
                      ? "fill-green-400"
                      : "fill-neutral-500"
                  }`}
                ></Dumbell>
                <Dumbell
                  className={"w-4"}
                  color={`${
                    exercise.difficulty >= 3
                      ? "fill-green-400"
                      : "fill-neutral-500"
                  }`}
                ></Dumbell>
              </span>
            </p>
            <p>
              Primary Muscle: <span>{exercise.muscles.muscles_primary[0]}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Plus
          className={"fill-secondary-text w-5 sm:w-10 cursor-pointer"}
        ></Plus>
      </div>
    </div>
  );
}
Exercise.propTypes = { exercise: PropTypes.object };
