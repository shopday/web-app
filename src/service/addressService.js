import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../lib/axios";
import { toast } from "react-toastify";

const API_PATH = import.meta.env.VITE_API_V1_PATH;
const COMPANY_URL = import.meta.env.VITE_IAM_API_COMPANY;

const user = JSON.parse(localStorage.getItem("user"));

const axios = new AxiosInstance();

export const getProvinces = async () => {
  const TIKI_API_URL = "https://tiki.vn/api/v2/directory/regions?country_id=vn";
  return await axios
    .get(TIKI_API_URL)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log("Cannot login", error);
    });
};
