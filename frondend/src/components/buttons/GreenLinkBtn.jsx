import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export function GreenLinkBtn({ path, text }) {
  return (
    <Link to={path}>
      <button className="bg-secondary p-2 px-10 rounded-lg font-bold text-text duration-300 ease-in-out hover:bg-white">
        {text}
      </button>
    </Link>
  );
}
GreenLinkBtn.propTypes = {
  path: PropTypes.string,
  text: PropTypes.any,
};
