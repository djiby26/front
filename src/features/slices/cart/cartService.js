import axios from "axios";

const apiUrl = "http://localhost:3001/api/products/";

export const fetchCart = async (userId) => {
  return await axios.get(apiUrl + "/" + userId);
};
