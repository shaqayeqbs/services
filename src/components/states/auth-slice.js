import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn; // Toggle the isLoggedIn flag.
    },
  },
});

export const { toggleLogin } = authSlice.actions;
export default authSlice.reducer;
