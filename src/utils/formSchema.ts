import * as z from "zod"

export const formSchema = z.object({
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
  city: z.string().min(4,{ message: "This field has to be filled." }),
  address1: z.string().min(10, "This field has to be filled"),
  address2: z.string().min(10, "This field has to be filled"),
  state: z.string().min(1, "This field has to be filled"),
  pincode: z.string().min(5,{ message: "This field has to be filled." }),
  country: z.string().min(1, "Country is required"),
  landmark:z.string(),
  
})
