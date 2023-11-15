import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Blackinput = forwardRef(
  ({ title, type, value, setValue, className }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <label htmlFor="email" className="text-sm text-gray-300 cursor-pointer">
          {title}
        </label>
        <input
          type={type}
          name="email"
          id="email"
          autoComplete="off"
          value={value}
          ref={ref}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          required
          className="outline-none rounded-md px-3 text-sm h-10 w-full bg-transparent border border-gray-500"
        ></input>
      </div>
    );
  }
);
Blackinput.displayName = "Blackinput";
Blackinput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  className: PropTypes.string,
};
