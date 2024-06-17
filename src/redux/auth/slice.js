import { createSlice } from "@reduxjs/toolkit";
import {  logOut, logIn, register } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
    user: {
        name: null,
        email: null,
      },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
    },
extraReducers: builder => 
    builder.addCase(register.pending, state=> {
        state.isLoading = true;
    }).addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
    }).addCase(logIn.pending, state => {
        state.isLoading = true;    
    }).addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
    }).addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      }),
},
);
export default authSlice.reducer;
