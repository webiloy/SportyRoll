import Activity from "./components/Activity";
import Calender from "./components/Calender";
import Comingup from "./components/Comingup";
import Streak from "./components/Streak";
import Workouts from "./components/Workouts";

export default function Diray() {
  return (
    <div className="min-h-[450px] my-28 flex flex-col gap-10 child:flex child:gap-16 px-12 child:w-full">
      <div className="flex-col md:flex-row border-b pb-5 border-NiceGray/50">
        <Comingup></Comingup>
        <Calender></Calender>
        <Activity></Activity>
      </div>
      <div className="flex-col md:flex-row ">
        <Workouts></Workouts>
        <Streak></Streak>
      </div>
    </div>
  );
}
