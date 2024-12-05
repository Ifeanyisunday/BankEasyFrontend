
import { configureStore } from "@reduxjs/toolkit";
import { userRegister } from "../apis/UserRegister";
// import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer:{
        [userRegister.reducerPath] : userRegister.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userRegister.middleware),
});

export default store


