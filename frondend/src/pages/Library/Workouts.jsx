import Search from "../../components/Icons/Search";
import Filter from "../../components/Icons/Filter";
import Arrow from "../../components/Icons/Arrow";
import SearchBar from "./components/SearchBar";
export function Workouts() {
  return (
    <div className="min-h-[450px] py-16 max-w-[2000px] m-auto lg:px-12">
      <h1 className="text-light-text p-6 py-8 border-y-2 text-2xl font-semibold border-[#414141] lg:px-0 lg:border-none lg:font-medium lg:p-0 lg:mt-12">
        Workouts
      </h1>
      <div className="flex justify-between text-light-text p-6 items-center border-b-2 border-[#414141]">
        <ul className="flex gap-6">
          <li className="flex gap-2 items-center">
            {/* <MdTune></MdTune> Filter */}
            <Filter className={"w-7 h-fit cursor-pointer"}></Filter>
          </li>
          <li className="text-secondary-text flex gap-1 items-center">
            Sort by:
            <span className="text-light-text font-medium"> Featured</span>
            {/* <BiChevronRight size={20}></BiChevronRight> */}
            <Arrow classname={"fill-white -rotate-90 w-6"}></Arrow>
          </li>
        </ul>
        <SearchBar></SearchBar>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full child:text-white child:bg-secondary-text bg-[#414141] gap-1 child:aspect-[2/3] lg:child:aspect-[4/3] lg:bg-[#080808] lg:child:m-3 lg:-m-3 lg:child:rounded-lg lg:child:bg-[#303030]">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
