import { configureStore } from '@reduxjs/toolkit';
import shipformReducer from "./formSlice";




export const store = configureStore({
  reducer: {
    shipform:shipformReducer
  }, // Add your reducers here later
});