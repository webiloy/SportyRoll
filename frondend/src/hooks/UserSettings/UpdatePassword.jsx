import axios from "axios";
export default async function UpdatePassword(password) {
  try {
    const response = await axios.patch(
      "http://localhost:3500/users",
      password,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("An error");
    throw error;
  }
}
