import axios from "axios";

export default async function createAccount(newAccount) {
  try {
    const response = await axios.post("https://localhost:3500", newAccount);
    return response.data;
  } catch (error) {
    console.error("Error in Posting The Message");
    throw error;
  }
}
