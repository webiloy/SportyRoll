import axios from "axios";
export default async function Search(value) {
  try {
    const response = await axios.get(
      `http://localhost:3500/exercise/${value}?category=${"featured"}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("An error");
    throw error;
  }
}
