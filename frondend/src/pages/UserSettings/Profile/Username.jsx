import { Blackinput } from "../../../components/inputs/Blackinput";
import { toast } from "sonner";
import { useState, useEffect, useRef, useContext } from "react";
import UpdateUsername from "../../../hooks/UserSettings/UpdateUsername";
import { useMutation } from "@tanstack/react-query";
import Actionbtns from "./Actionbtns";
import { WebsiteContext } from "../../../context/WebsiteContext";
export default function Username() {
  const { data } = useContext(WebsiteContext);
  const [username, setUsername] = useState("Loading...");
  const [editUsername, setEditUsername] = useState(true);
  const { mutate, status, error, isPending } = useMutation({
    mutationFn: UpdateUsername,
  });
  const usernameRef = useRef();
  useEffect(() => {
    if (data) setUsername(data.username);
  }, [data]);
  useEffect(() => {
    if (!editUsername) usernameRef.current.focus();
  }, [editUsername]);
  const onEditUserClick = async (e) => {
    e.preventDefault();
    if (editUsername) setEditUsername(false);
  };
  const onCancel = (e) => {
    e.preventDefault();
    setUsername(data.username);
    setEditUsername(true);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    mutate(username);
  };
  useEffect(() => {
    if (error?.response?.status == 409) toast.error("Username Taken");
  }, [error]);
  useEffect(() => {
    if (status === "success") {
      toast.success("Username Updated!");
      setEditUsername(true);
    }
  }, [status]);
  return (
    <div className="relative group">
      <Blackinput
        title="Username"
        type="text"
        value={username}
        setValue={setUsername}
        disabled={editUsername}
        ref={usernameRef}
      ></Blackinput>
      <div className="absolute bottom-0 right-3 h-10 flex items-center gap-3 child:h-fit">
        <Actionbtns
          condition={editUsername}
          onEdit={onEditUserClick}
          onSubmit={onSubmit}
          onCancel={onCancel}
        ></Actionbtns>
      </div>
    </div>
  );
}
