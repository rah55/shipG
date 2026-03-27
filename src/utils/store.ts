import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // Choose your storage engine
import formslice from "./formSlice" //slice we use in the slice
import type { version } from "react"

const setup = {
  key: "shipFormData",
  version: 1,
  storage,
}

const slices = combineReducers({
  formslice,
})

export const store = configureStore({
  reducer: persistReducer(setup, slices),
  devTools: true,
  middleware: (config) => config({ serializableCheck: false }), // Add your reducers here later
})
