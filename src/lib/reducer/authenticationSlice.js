import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

import User from "../../models/User";

import { authUtils } from "../authUtils";

export const authenticationSlice = createSlice({
  name: "authentication",

  initialState: {
    isAuthenticated: authUtils.isAuthenticated(),
    name: authUtils.name(),
    token: authUtils.token(),
  },

  reducers: {
    login: (state, action) => {
      const { token, name, username } = action.payload;

      state.isAuthenticated = true;
      state.token = token;
      state.name = name;

      return User.login({ token, name, username });
    },
    logout: (state) => {
      state.isAuthenticated = false;
      User.logout();
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
