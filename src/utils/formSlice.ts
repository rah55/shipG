import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { X } from "lucide-react"

interface FormData {
  firstname: string
  lastname: string
  mobileNumber: string
  email: string
  country: string
  address1: string
  address2: string
}

interface secondFormData {
  invoiceNumber: string
  invoiceDate: string
  invoiceCurrency: string
  invoiceOrder: string
  invoiceIOSS: string
  weight: string
  length: string
  breadth: string
  height: string
  productName: string
  productHSN: string
  productSKU: string
  productQty: string
  productPrice: string
  productIGST: string
}

interface Shipment {
  firstForm?: FormData
  secondForm?: secondFormData
}

interface FormState {
  shipments: Shipment[]
}

const initialState: FormState = {
  shipments: [],
}

const formSlice = createSlice({
  name: "shipform",
  initialState,
  reducers: {
    addFirstFormData: (state, action: PayloadAction<FormData>) => {
      if (state.shipments.length === 0) {
        state.shipments.push({})
      }

      state.shipments[state.shipments.length - 1].firstForm = action.payload
    },

    addSecondFormData: (state, action: PayloadAction<secondFormData>) => {
      if (state.shipments.length === 0) {
        state.shipments.push({})
      }

      state.shipments[state.shipments.length - 1].secondForm = action.payload
    },
    clearData: (state) => {
      state.shipments = []
    },
  },
})

export const { addFirstFormData, addSecondFormData, clearData } =
  formSlice.actions
export default formSlice.reducer
