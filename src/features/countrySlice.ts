import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
  country: [],
};

export const CountrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountryList: (state, {payload}) => {
      state.country = payload;
    },
  },
});

export const { setCountryList } = CountrySlice.actions;
export default CountrySlice.reducer;