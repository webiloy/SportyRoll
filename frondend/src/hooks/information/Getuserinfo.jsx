import axios from "axios";
export default async function Getuserinfo() {
  try {
    const response = await axios.get("http://localhost:3500/users/find", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return false;
  }
}
