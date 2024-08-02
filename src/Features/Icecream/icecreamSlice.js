
import { createSlice } from "@reduxjs/toolkit";
import { ordered as CakeOrdered } from "../Cake/cakeSlice";
const initialIcecreamState = {
  numOfIcecream: 20,
};
const IcecreamSlice = createSlice({
  name: "icecream",
  initialState: initialIcecreamState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CakeOrdered, (state, action) => {
      state.numOfIcecream--;
    });
  },
});

export const { ordered, restocked } = IcecreamSlice.actions;
export default IcecreamSlice.reducer;
