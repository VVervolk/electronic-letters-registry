import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    makeFilter(state, action) {
      state = action.payload;
    },
  },
});

export const { makeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
