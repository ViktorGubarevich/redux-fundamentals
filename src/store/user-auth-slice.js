import { createSlice } from "@reduxjs/toolkit";

const initialUserAuthState = { isUserLoggedIn: false };

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialUserAuthState,
  reducers: {
    logIn(state) {
      state.isUserLoggedIn = true;
    },
    signOut(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export default userAuthSlice.reducer;
export const userAuthActions = userAuthSlice.actions;
