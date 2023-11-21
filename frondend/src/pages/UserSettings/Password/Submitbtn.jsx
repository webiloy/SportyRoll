import { useMutation } from "@tanstack/react-query";
import Loading from "../../../components/animations/Loading";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import UpdatePassword from "../../../hooks/UserSettings/UpdatePassword";
import { toast } from "sonner";
export default function Submitbtn({
  oldPassword,
  password,
  confirmPassword,
  ClearFields,
}) {
  const [errMsg, setErrMesg] = useState("");
  const { mutate, status, error, isPending } = useMutation({
    mutationFn: UpdatePassword,
  });
  useEffect(() => {
    setErrMesg("");
  }, [password, oldPassword, confirmPassword]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      password.length <= 0 &&
      confirmPassword.length <= 0 &&
      oldPassword.length <= 0
    )
      return setErrMesg("Please fill out all required fields.");
    if (password.length <= 5 && oldPassword.length)
      return setErrMesg(
        "Password should be at least 6 characters long. Please re-enter a valid password."
      );
    if (password !== confirmPassword)
      return setErrMesg("Passwords must match.");
    mutate({
      password: password,
      oldpassword: oldPassword,
    });
  };
  useEffect(() => {
    if (status === "success") {
      toast.success("Password Changed");
      ClearFields();
    }
  }, [status]);
  useEffect(() => {
    if (error?.response?.status == 409 || error?.response?.status === 401)
      toast.error(error?.response?.data?.message);
    else if (error) {
      toast.error(
        "Oops! Something went wrong on our end. Please try again later."
      );
    }
  }, [error]);
  return (
    <div className="flex flex-col gap-2">
      <p aria-live="assertive" className="text-red-500 text-xs">
        {errMsg}
      </p>
      <button
        className="bg-secondary rounded-lg font-bold text-text duration-300 ease-in-out hover:bg-white w-24 h-10 flex items-center justify-center"
        onClick={onSubmit}
      >
        {isPending && (
          <Loading color={"stroke-black"} size={"w-6 h-6"}></Loading>
        )}
        {!isPending && <p>Save</p>}
      </button>
    </div>
  );
}
Submitbtn.propTypes = {
  oldPassword: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  ClearFields: PropTypes.func,
};
