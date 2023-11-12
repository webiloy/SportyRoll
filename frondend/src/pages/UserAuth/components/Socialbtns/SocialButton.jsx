import PropTypes from "prop-types";
export default function SocialButton({ iconSrc, onClick }) {
  return (
    <div
      className="group relative h-14 w-[30%] cursor-pointer hover:bg-opacity-80 duration-300 ease-in-out rounded-lg bg-NiceBlack flex items-center justify-center"
      onClick={onClick}
    >
      <img
        src={iconSrc}
        alt=""
        className="duration-300 ease-in-out group-hover:scale-95"
      />
    </div>
  );
}
SocialButton.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
