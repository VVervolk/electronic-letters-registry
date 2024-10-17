import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const AppState = {
  units: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState: AppState,
  reducers: {
    setUnits: (state, action) => {
      state.units = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const { setUnits } = appSlice.actions;

export const appReducer = persistReducer(persistConfig, appSlice.reducer);
