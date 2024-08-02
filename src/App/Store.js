import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../Features/Cake/cakeSlice";
import icecreamSlice from "../Features/Icecream/icecreamSlice";
import userSlice from "../Features/Users/userSlice";


const store = configureStore({
    reducer: {
      cake: cakeSlice,
      icecream:icecreamSlice,
      users:userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  });

  export default store