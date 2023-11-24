import Search from "../../../components/Icons/Search";
import X from "../../../components/Icons/X";
import PropTypes from "prop-types";
import { useRef } from "react";
export default function SearchBar({ setSearch, search }) {
  const SearchRef = useRef(null);
  const onCancel = () => {
    setSearch("");
    SearchRef.current.focus();
  };
  return (
    <div className="h-10 flex items-center bg-NiceGray px-2 gap-2 relative">
      <label className="w-[24px]" htmlFor="search">
        <Search className="cursor-pointer fill-secondary-text"></Search>
      </label>
      <input
        type="text"
        className="bg-transparent outline-none w-[95%]"
        id="search"
        placeholder="Search for an Exercise"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        ref={SearchRef}
      />
      <div
        className={`flex items-center justify-center duration-200 ease-in-out opacity-0 pointer-events-none ${
          search.length > 0 && "opacity-100 pointer-events-auto"
        }`}
        onClick={onCancel}
      >
        <X className={"w-4 fill-secondary-text cursor-pointer"}></X>
      </div>
    </div>
  );
}
SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
};
