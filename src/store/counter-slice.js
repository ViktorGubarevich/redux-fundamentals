import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, isCounterInvisible: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    setCounterVisible(state) {
      state.isCounterInvisible = !state.isCounterInvisible;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
