import * as z from "zod"

export const formShipSchema = z.object({
  firstname: z
    .string()
    .min(5, "First Name must be at least 5 characters.")
    .max(32, "First Name must be at most 32 characters."),
  lastname: z
    .string()
    .min(5, "Last Name must be at least 5 characters.")
    .max(32, "Last Name must be at most 32 characters."),
  mobileNumber: z.string().min(10, "This field has to be filled."),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  city: z.string().min(4, { message: "This field has to be filled." }),
  address1: z.string().min(10, "This field has to be filled"),
  address2: z.string().min(10, "This field has to be filled"),
  state: z.string().min(1, "This field has to be filled"),
  pincode: z.string().min(5, { message: "This field has to be filled." }),
  country: z.string().min(1, "Country is required"),
  landmark: z.string(),
})

export const shipmentFormSchema = z.object({
  // name : validation
  invoiceNumber: z.string().min(5, { message: "This field is requuired" }),

  invoiceDate: z.string().min(1, "Please select a date"),
  invoiceCurrency: z.string({ message: "Please Select Any Currency " }),
  invoiceOrder: z.string().min(5, { message: "This field is required" }),
  invoiceIOSS: z.string().min(5, { message: "This field is required" }),
  weight: z.string().min(1, " Weight is Required"),
  length: z.string().min(1, " Length is Required"),
  breadth: z.string().min(1, " Breadth is Required"),
  height: z.string().min(1, " Height is Required"),
  productName: z.string().min(1, " This field is Required"),
  productHSN: z.string().min(1, " This field is Required"),
  productSKU: z.string().min(1, " This field is Required"),
  productQty: z.string().min(1, " This field is Required"),
  productPrice: z.string().min(1, " This field is Required"),
  productIGST: z.string().min(1, " This field is Required"),
})
