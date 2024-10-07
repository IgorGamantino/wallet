import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./types";
export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
