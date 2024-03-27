import {createSlice} from "@reduxjs/toolkit";
import {useQuery} from "@tanstack/react-query";
import AxiosInstance from "../lib/axios";
import {toast} from "react-toastify";

const VITE_API_PUBLIC = import.meta.env.VITE_API_PUBLIC;
const VITE_DIRECTORY_API = import.meta.env.VITE_DIRECTORY_API;


const user = JSON.parse(localStorage.getItem("user"));

const axios = new AxiosInstance();

export const getProvinces = async () => {
    const newURL = VITE_API_PUBLIC + VITE_DIRECTORY_API + "/provinces"
    return await axios
        .get(newURL)
        .then((res) => {
            const provinces = JSON.parse(res.data);
            return provinces;
        })
        .catch((error) => {
            console.log("Cannot get provinces", error);
        });
};

export const getAllDistricts = async (provinceId) => {
    const url = VITE_API_PUBLIC + VITE_DIRECTORY_API + `/districts?provinceId=${provinceId}`
    return await axios
        .get(url)
        .then(data => JSON.parse(data.data))
        .catch(error => console.log("cannot fetch districts", error))
}

export const getAllWards = async (districtId) => {
    const url = VITE_API_PUBLIC + VITE_DIRECTORY_API + `/wards?districtId=${districtId}`
    return await axios
        .get(url)
        .then(data => JSON.parse(data.data))
        .catch(error => console.log("cannot fetch wards", error))
}

export const addressService = {
    getProvinces,
    getAllDistricts,
    getAllWards
}
