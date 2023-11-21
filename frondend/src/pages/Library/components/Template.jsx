import { PropTypes } from "prop-types";
export function Template({ title }) {
  return (
    <div className="min-h-[450px] py-16 md:px-10 lg:px-28 max-w-[2000px] m-auto; ">
      <h1 className="text-light-text p-6 py-8 border-y-2 text-2xl font-semibold border-[#414141]">
        {title}
      </h1>
      <div className="flex justify-between text-light-text p-6 items-center border-b-2 border-[#414141]">
        <ul className="flex gap-6">
          <li className="flex gap-2 items-center">
            {/* <MdTune></MdTune> Filter */}
          </li>
          <li className="text-secondary-text flex gap-1 items-center">
            Sort by:
            <span className="text-light-text font-medium"> Featured</span>
            {/* <BiChevronRight size={20}></BiChevronRight> */}
          </li>
        </ul>
        {/* <AiOutlineSearch size={20} /> */}
      </div>

      <ul className="grid grid-cols-2 w-full child:text-white child:bg-secondary-text bg-[#414141] gap-1 child:aspect-[2/3]">
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
