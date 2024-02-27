import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../lib/axios";
import { toast } from "react-toastify";

const API_PATH = import.meta.env.VITE_API_V1_PATH;
const COMPANY_URL = import.meta.env.VITE_IAM_API_COMPANY;

const user = JSON.parse(localStorage.getItem("user"));

const axios = new AxiosInstance();

export const getCompanies = async () => {
  axios.addToken(user?.token);
  return await axios
    .get(API_PATH + COMPANY_URL)
    .then((res) => {
      if (!res.successful) {
        toast(res.message + " " + res.exception);
        return;
      }
      return res;
    })
    .catch((error) => {
      console.log("Cannot login", error);
    });
};

//TODO: adding token auto when call post API?
export const createCompany = async () => {
  axios.addToken(user?.token);
  return await axios.post(API_PATH + COMPANY_URL).then((res) => {});
};
