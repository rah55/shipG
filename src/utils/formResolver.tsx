import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formShipSchema } from "./formSchema";
import * as z from "zod"




export const formresolver = useForm<z.infer<typeof formShipSchema>>({
    resolver: zodResolver(formShipSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      mobileNumber: "",
      email: "",
      country: "",
      address1: "",
      address2: "",
      city: "",
      pincode: "",
      landmark: "",
      state: "",
    },
  })
