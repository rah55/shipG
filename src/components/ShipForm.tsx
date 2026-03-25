import { Input } from "@/components/ui/input"

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"

import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "./ui/button"
import Countries from "./Countries"

import NewCard from "./NewCard"
import { formSchema } from "@/utils/formSchema"
import { useDispatch } from "react-redux"
import { addData } from "@/utils/formSlice"
import { useEffect, useState } from "react"
import StateComponent from "./StateComponent"

function ShipForm() {
  const dispatch = useDispatch()
  const [states, setStates] = useState([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
    dispatch(addData(data))
  }

  const country_id = form.watch("country")

  useEffect(() => {
    async function handleSumit(country_id: string) {
      if (!country_id) return
      const url =
        "https://qa2.franchise.backend.shipgl.in/api/v1/location/statesv2"
      try {
        const data = { state_country_code: country_id }
        const response = await fetch(url, {
          method: "POST", // Specify the method
          headers: {
            "Content-Type": "application/json", // Inform the server of the data format
          },
          body: JSON.stringify(data), // Convert JS object to JSON string
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`) // Manual error check
        }

        const result = await response.json() // Parse the JSON response

        console.log("Success:", result?.data?.states)
        setStates(result?.data?.states)
      } catch (error) {
        console.error("Error:", error) // Catches network issues
      }
    }
    handleSumit(country_id)
  }, [country_id])

  return (
    <NewCard
      heading="Create Order"
      // classname="p-12"
      xyz={
        <form id="shipform" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldSet>
            <h1 className="font-bold">Personal Details</h1>
            <FieldGroup className="flex">
              <div className="grid grid-cols-3 gap-2">
                <Controller
                  name="firstname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      className="max-w-sm p-2"
                      data-invalid={fieldState.invalid}
                    >
                      <FieldLabel htmlFor="shipform-firstname">
                        First Name <span className="text-red-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-firstname"
                        autoComplete="off"
                        placeholder="Enter First Name..."
                        className="p-5 placeholder-red-300"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>

                <Controller
                  name="lastname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      className="max-w-sm p-2"
                      data-invalid={fieldState.invalid}
                    >
                      <FieldLabel htmlFor="shipform-lastname">
                        Last Name <span className="text-red-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-lastname"
                        autoComplete="off"
                        placeholder="Enter Last Name..."
                        className="placeholder-gray-200::placeholder p-5"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>

                <Controller
                  name="mobileNumber"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="max-w-sm p-2">
                      <FieldLabel htmlFor="shipform-mobile">
                        Mobile Number <span className="text-red-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-mobile"
                        autoComplete="off"
                        placeholder="Enter Mobile Number"
                        className="placeholder-gray-200::placeholder p-5"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="max-w-sm p-2">
                      <FieldLabel htmlFor="shipform-email">
                        Email <span className="text-red-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-mobile"
                        autoComplete="off"
                        placeholder="Enter EmailID"
                        className="placeholder-gray-200::placeholder p-5"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>
              </div>
            </FieldGroup>
          </FieldSet>

          {/*Shipping Address data  */}
          <FieldSet className="mt-8">
            <h1 className="font-bold">Shipping Address</h1>
            <FieldGroup className="flex">
              <div className="grid grid-cols-3 gap-2">
                <Controller
                  name="country"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="max-w-sm p-2">
                      <FieldLabel htmlFor="shipform-email">
                        Country <span className="text-red-600">*</span>
                      </FieldLabel>

                      <Countries onChange={field.onChange} />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>
                <Controller 
                  name="state"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="max-w-sm p-2">
                      <FieldLabel htmlFor="shipform-email">
                        State <span className="text-red-600">*</span>
                      </FieldLabel>

                      <StateComponent  data={states} onChange={field.onChange} />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>

                <Controller
                  name="address1"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="max-w-sm p-2">
                      <FieldLabel htmlFor="shipform-address1">
                        Address1 <span className="text-red-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-address1"
                        autoComplete="off"
                        placeholder="Enter Address1..."
                        className="placeholder-gray-200::placeholder p-5"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>

                <Controller
                  name="address2"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="max-w-sm p-2">
                      <FieldLabel htmlFor="shipform-address2">
                        Address2 <span className="text-red-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-address2"
                        autoComplete="off"
                        placeholder="Enter Address2..."
                        className="placeholder-gray-200::placeholder p-5"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>

                <Controller
                  name="landmark"
                  control={form.control}
                  render={({ field }) => (
                    <Field className="max-w-sm p-2">
                      <FieldLabel htmlFor="shipform-landmark">
                        Landmark
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-landmark"
                        autoComplete="off"
                        placeholder="Enter Landmark..."
                        className="placeholder-gray-200::placeholder p-5"
                      ></Input>
                    </Field>
                  )}
                ></Controller>

                <Controller
                  name="city"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="max-w-sm p-2">
                      <FieldLabel htmlFor="shipform-city">
                        City <span className="text-red-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-city"
                        autoComplete="off"
                        placeholder="Enter City..."
                        className="placeholder-gray-200::placeholder p-5"
                      ></Input>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>

                <Controller
                  name="pincode"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="shipform-pincode">
                        Pincode
                        <span className="text-red-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="shipform-pincode"
                        placeholder="Enter Pincode..."
                        className="placeholder-gray-200::placeholder p-5"
                      ></Input>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>
              </div>
            </FieldGroup>
          </FieldSet>
          <div className="flex justify-end">
            <Button type="submit" className="">
              Submit
            </Button>
          </div>
        </form>
      }
      subheading="Create Single Box order"
    />
  )
}

export default ShipForm
