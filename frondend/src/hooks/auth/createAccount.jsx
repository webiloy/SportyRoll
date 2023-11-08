import axios from "axios";

export default async function createAccount(newAccount) {
  try {
    const response = await axios.post(
      "http://localhost:3500/users",
      newAccount
    );
    return response.data;
  } catch (error) {
    console.error("Error in Posting The Message");
    throw error;
  }
}
