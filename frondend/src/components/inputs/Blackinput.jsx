import PropTypes from "prop-types";
export function Blackinput({ title, type, value, setValue }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email" className="text-sm text-gray-300 cursor-pointer">
        {title}
      </label>
      <input
        type={type}
        name="email"
        id="email"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="outline-none rounded-md px-3 text-sm h-10 w-full bg-transparent border border-gray-500"
      ></input>
    </div>
  );
}
Blackinput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};
