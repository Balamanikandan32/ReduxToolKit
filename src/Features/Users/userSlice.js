
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialUserState = {
  loading: true,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});
const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {ordered,restocked} = userSlice.actions
export default userSlice.reducer
