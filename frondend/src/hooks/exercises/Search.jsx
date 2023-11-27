import axios from "axios";

export default async function Search(value, filterObject) {
  const url = `http://localhost:3500/exercise/${
    value.length > 0 ? value : "none"
  }`;
  let params = {};
  if (filterObject.difficulty && filterObject.difficulty.length > 0)
    params.difficulty = filterObject.difficulty.join(",");
  if (filterObject.muscles && filterObject.muscles.length > 0)
    params.muscles = filterObject.muscles.join(",");
  try {
    const response = await axios.get(url, { params, withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("An error");
    throw error;
  }
}
