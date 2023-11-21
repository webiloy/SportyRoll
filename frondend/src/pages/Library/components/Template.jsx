import { PropTypes } from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";
import { MdTune } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
export function Template({ title }) {
  return (
    <div className="min-h-[450px] py-16 max-w-[2000px] m-auto lg:px-12">
      <h1 className="text-light-text p-6 py-8 border-y-2 text-2xl font-semibold border-[#414141] lg:px-0 lg:border-none lg:font-medium lg:p-0 lg:mt-12">
        {title}
      </h1>
      <div className="text-secondary-text font-light flex gap-2 items-center p-4 px-6 bg-text lg:hidden">
        <AiOutlineSearch></AiOutlineSearch> Search
      </div>
      <ul className="flex gap-6 justify-between text-light-text p-6 items-center border-y-2 border-[#414141] lg:w-fit lg:border-none lg:p-0 lg:py-8 lg:child:rounded-xl lg:child:p-2 lg:child:px-4 lg:child:border lg:child:border-secondary-text">
        <li className="flex gap-2 items-center">
          <MdTune></MdTune> Filter
        </li>
        <li className="text-secondary-text flex gap-1 items-center bg-text">
          Sort by:
          <span className="text-light-text font-medium"> Featured</span>
          <BiChevronRight color="white" size={20}></BiChevronRight>
        </li>
      </ul>

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
Template.propTypes = {
  title: PropTypes.string.isRequired,
};
