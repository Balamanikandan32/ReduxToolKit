import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

const ReduxToolKit = () => {
  return (
    <div>
      <h1>ReduxToolKit</h1>
    </div>
  );
};
// const initialCakeState = {
//   numOfCakes: 10,
// };

// const initialIcecreamState = {
//   numOfIcecream: 20,
// };

// const initialUserState = {
//   loading: true,
//   users: [],
//   error: "",
// };

// const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// });

// const cakeSlice = createSlice({
//   name: "cake",
//   initialState: initialCakeState,
//   reducers: {
//     ordered: (state, action) => {
//       state.numOfCakes--;
//     },
//     restocked: (state, action) => {
//       state.numOfCakes += action.payload;
//     },
//   },
// });

// const IcecreamSlice = createSlice({
//   name: "icecream",
//   initialState: initialIcecreamState,
//   reducers: {
//     ordered: (state, action) => {
//       state.numOfIcecream--;
//     },
//     restocked: (state, action) => {
//       state.numOfIcecream += action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase("cake/ordered", (state, action) => {
//       state.numOfIcecream--;
//     });
//   },
// });

// const userSlice = createSlice({
//   name: "users",
//   initialState: initialUserState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {state.loading = true})
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false; state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected,(state,action)=>{
//         state.loading = false; state.error = action.error.message;
//     })
//   },
// });
// const store = configureStore({
//   reducer: {
//     cake: cakeSlice.reducer,
//     icecream: IcecreamSlice.reducer,
//     users:userSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
// });

// console.log("initial state", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("updated state", store.getState())
// );

// store.dispatch(cakeSlice.actions.ordered());
// store.dispatch(cakeSlice.actions.restocked(5));
// store.dispatch(IcecreamSlice.actions.ordered());
// store.dispatch(IcecreamSlice.actions.restocked(3));

// store.dispatch(fetchUsers())

// export const { ordered, restocked } = cakeSlice.actions;
// export default cakeSlice.reducer;
export { ReduxToolKit };
