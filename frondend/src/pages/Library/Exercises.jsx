import Filter from "./components/Filter";
import Arrow from "../../components/Icons/Arrow";
import SearchBar from "./components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import Search from "../../hooks/exercises/Search";
import { useState } from "react";
import Exercise from "./components/Exercise";
import LoadingTemplate from "./components/LoadingTemplate";
export function Exercises() {
  const [search, setSearch] = useState("");
  const { data, status } = useQuery({
    queryKey: ["ExerciseSearch", search],
    queryFn: () => Search(search),
    retry: false,
  });
  return (
    <div className="min-h-[450px] py-16 max-w-[2000px] m-auto lg:px-12">
      <h1 className="text-light-text p-6 py-8 border-y-2 text-2xl font-semibold border-[#414141] lg:px-0 lg:border-none lg:font-medium lg:p-0 lg:mt-12">
        Exercises
      </h1>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-2 lg:items-center text-light-text lg:p-6 pt-3 pb-1  border-[#414141] lg:border-none">
        <ul className="flex gap-6 lg:px-0 px-2">
          <li className="flex gap-2 items-center">
            {/* <MdTune></MdTune> Filter */}
            <Filter></Filter>
          </li>
          <li className="text-secondary-text flex gap-1 items-center">
            Sort by:
            <span className="text-light-text font-medium"> Featured</span>
            {/* <BiChevronRight size={20}></BiChevronRight> */}
            <Arrow classname={"fill-white -rotate-90 w-6"}></Arrow>
          </li>
        </ul>
        <div>
          <SearchBar search={search} setSearch={setSearch}></SearchBar>
        </div>
      </div>
      <ul className="grid grid-cols-1 xl:grid-cols-2 w-full child:text-white child:bg-NiceGray gap-5 pt-5 lg:pt-0 child:aspect-[12/2.5] lg:child:aspect-[12/2]  lg:child:m-3 lg:-m-3 child:rounded-lg lg:child:bg-[#303030] overflow-hidden px-4">
        {/* Loading */}
        {status === "pending" &&
          Array.from({ length: 6 }, (_, index) => (
            <LoadingTemplate key={index}></LoadingTemplate>
          ))}
        {/* Sucess */}
        {status === "success" &&
          data.exercises.map((exercise) => {
            return <Exercise key={exercise._id} exercise={exercise}></Exercise>;
          })}
        {status === "error" && (
          <>
            <div>No exercises found.</div>
          </>
        )}
      </ul>
    </div>
  );
}
