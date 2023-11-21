import axios from "axios";
export default async function UpdateUser(newUsername) {
  try {
    const response = await axios.patch(
      "http://localhost:3500/users",
      { username: newUsername },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("An error");
    throw error;
  }
}
