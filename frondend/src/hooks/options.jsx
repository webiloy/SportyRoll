import { useContext } from "react";
import { WebsiteContext } from "../context/WebsiteContext";
export function Options(key) {
  return {
    headers: {
      withCredentials: true,
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
}
