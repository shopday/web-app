import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	// TODO: Use authentication token
	const localStorageToken = localStorage.getItem("token");
	//check if token is not expired and token is existed
	const user = JSON.parse(localStorage.getItem("user"));
	const expiry= user?.expiry
	const isValid = expiry*1000 >= Date.now();
	return (isValid) ? <Outlet /> : <Navigate to="/login"  replace />;
};

export default ProtectedRoutes;