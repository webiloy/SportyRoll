import Filter from "../../components/Icons/Filter";
import Arrow from "../../components/Icons/Arrow";
import SearchBar from "./components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import Search from "../../hooks/exercises/Search";
import { useState, useEffect } from "react";
import Exercise from "./components/Exercise";
import LoadingTemplate from "./components/LoadingTemplate";
export function Exercises() {
  const [search, setSearch] = useState("");
  const { data, status, refetch } = useQuery({
    queryKey: ["ExerciseSearch", search],
    queryFn: () => Search(search),
  });
  useEffect(() => {
    refetch();
  }, [search, refetch]);
  console.log(data);
  return (
    <div className="min-h-[450px] py-16 max-w-[2000px] m-auto lg:px-12">
      <h1 className="text-light-text p-6 py-8 border-y-2 text-2xl font-semibold border-[#414141] lg:px-0 lg:border-none lg:font-medium lg:p-0 lg:mt-12">
        Exercises
      </h1>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-2 lg:items-center text-light-text lg:p-6 pt-3 pb-1  border-[#414141] lg:border-none">
        <ul className="flex gap-6 lg:px-0 px-2">
          <li className="flex gap-2 items-center">
            {/* <MdTune></MdTune> Filter */}
            <Filter className={"w-6 h-fit cursor-pointer"}></Filter>
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
        {status === "pending" && (
          <>
            <LoadingTemplate></LoadingTemplate>
            <LoadingTemplate></LoadingTemplate>
            <LoadingTemplate></LoadingTemplate>
            <LoadingTemplate></LoadingTemplate>
            <LoadingTemplate></LoadingTemplate>
            <LoadingTemplate></LoadingTemplate>
          </>
        )}
        {status === "success" &&
          data.exercises.map((exercise, index) => {
            return <Exercise key={exercise._id} exercise={exercise}></Exercise>;
          })}
      </ul>
    </div>
  );
}
