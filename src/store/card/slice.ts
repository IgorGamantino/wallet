import { createSlice } from "@reduxjs/toolkit";
type FormData = {
  card: {
    number: string;
    name: string;
    expiryDate: string;
    cvv: string;
  };
};

const initialState: FormData = {
  card: {
    number: "",
    name: "",
    expiryDate: "",
    cvv: "",
  },
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardCreateSuccess: (state, action) => {
      state.card = action.payload;
    },
  },
});

export const { setCardCreateSuccess } = cardSlice.actions;
export default cardSlice.reducer;
