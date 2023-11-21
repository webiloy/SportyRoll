import Edit from "../../../assets/Icons/Edit.svg";
import Checkmark from "../../../components/Icons/Checkmark";
import X from "../../../components/Icons/X";
import PropTypes from "prop-types";
export default function Actionbtns({ condition, onEdit, onSubmit, onCancel }) {
  return (
    <>
      {condition && (
        <button
          className="group-hover:opacity-100 opacity-0 duration-300 ease-in-out"
          onClick={onEdit}
        >
          <img src={Edit} className="w-5" alt="" />
        </button>
      )}
      {!condition && (
        <>
          <button className="h-fit" onClick={onSubmit}>
            <Checkmark className="sm:w-5 w-4 text-[#6B7280] hover:text-green-400 duration-300 ease-in-out h-fit"></Checkmark>
          </button>
          <button className="" onClick={onCancel} type="button">
            <X className="sm:w-4 w-3 text-[#6B7280] hover:text-red-400 duration-300 ease-in-out h-fit"></X>
          </button>
        </>
      )}
    </>
  );
}
Actionbtns.propTypes = {
  condition: PropTypes.bool,
  onEdit: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};
