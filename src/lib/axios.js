import axios, { Axios } from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_IAM_API_URL;

class AxiosInstance {

  commonHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };  

  axiosInstance = null;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        ...this.commonHeaders
    }})
  }

  addToken(token) {
    this.axiosInstance.interceptors.request.use(function (config){
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    })
  }



  async get(path, body, config) {
    try {
      const res = await this.axiosInstance.get(path, body, config);
      return res.data;
    } catch (error) {
      // Handle error appropriately
      console.error("GET request error:", error);
      throw error;
    }
  }

  async post(path, data) {
    const config = {
      headers: {
        grant_type: "password",
        client_id: "shopday_web",
      },
    };
    try {
      const res = await this.axiosInstance.post(path, data, config);
      return res.data;
    } catch (error) {
      console.error("POST request error:", error);
      throw error;
    }
  }

  async put(path, data) {
    try {
      const res = await this.axiosInstance.put(path, data);
      return res.data;
    } catch (error) {
      console.error("PUT request error:", error);
      throw error;
    }
  }
}

export default AxiosInstance;

export async function login(username, password) {
  const apiUrl = import.meta.env.VITE_AUTH0_TOKEN_URL;

  const postData = {
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
    grant_type: "password",
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    username: username,
    password: password,
  };
  try {
    const response = await axios.post(
      apiUrl,
      new URLSearchParams(postData).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Login request error:", error);
    throw error;
  }
}
