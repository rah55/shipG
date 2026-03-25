import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// Define the type of a single data item (adjust as needed)
interface FormData {
  // example fields
  
  
      firstname:string,
      lastname: string,
      mobileNumber: string,
      email:string,
      country: string,
      address1: string,
      address2: string,
    
}

// Define the state type
interface FormState {
  data: FormData[]
}

const initialState: FormState = {
  data: [],
}

const formSlice = createSlice({
  name: "shipform",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<FormData>) => {
      state.data.push(action.payload)
    },
  },
})

export const { addData } = formSlice.actions
export default formSlice.reducer