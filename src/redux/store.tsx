import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//1 - create store

 const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});


export default store
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>= useSelector