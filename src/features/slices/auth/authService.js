import axios from "axios";

const API_URL = "http://localhost:3001/api/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//A new user is created by admin
const createUser = async (userData, token) => {
  const response = await axios.post(API_URL + "newUser", userData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  createUser,
};

export default authService;
