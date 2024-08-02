
import { createSlice } from "@reduxjs/toolkit";
const initialCakeState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialCakeState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const {ordered,restocked} = cakeSlice.actions
export default cakeSlice.reducer