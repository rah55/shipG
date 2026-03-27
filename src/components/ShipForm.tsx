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
import { formShipSchema } from "@/utils/formSchema"
import { useDispatch, useSelector } from "react-redux"
import { addFirstFormData } from "@/utils/formSlice"
import { useEffect, useState } from "react"
import StateComponent from "./StateComponent"
import FieldComponent from "./FieldComponent"
import { useResetForm } from "@/Hooks/useResetForm"
import useCountryState from "@/Hooks/useCountryState"

interface ShipFormProps {
  onClick: () => void // parent callback to unlock shipment info
}

function ShipForm({ onClick }: ShipFormProps) {
  // const [states, setStates] = useState([])
  const { formslice }: any = useSelector((data: any) => data)
  const dispatch = useDispatch()
  console.log(formslice.shipments)
  
  const form = useForm<z.infer<typeof formShipSchema>>({
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
  const country_id = form.watch("country")
  
  useResetForm(formslice,form); // formresetschema  




  function onSubmit(data: z.infer<typeof formShipSchema>) {
    dispatch(addFirstFormData(data))
    onClick()
  }
const { states } = useCountryState(country_id);

  // useEffect(() => {
  //   async function handleSumit(country_id: string) {
  //     if (!country_id) return
  //     const url =
  //       "https://qa2.franchise.backend.shipgl.in/api/v1/location/statesv2"
  //     try {
  //       const data = { state_country_code: country_id }
  //       const response = await fetch(url, {
  //         method: "POST", // Specify the method
  //         headers: {
  //           "Content-Type": "application/json", // Inform the server of the data format
  //         },
  //         body: JSON.stringify(data), // Convert JS object to JSON string
  //       })

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`) // Manual error check
  //       }

  //       const result = await response.json() // Parse the JSON response

  //       setStates(result?.data?.states)
  //     } catch (error) {
  //       console.error("Error:", error) // Catches network issues
  //     }
  //   }
  //   handleSumit(country_id)
  // }, [country_id])

  return (
    <NewCard
    heading=""
      // classname="p-12"
      xyz={
        <form
          className="p-5"
          id="shipform"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldSet>
            <h1 className="font-bold">Personal Details</h1>
            <FieldGroup className="flex">
              <div className="grid grid-cols-3 gap-2">
                <Controller
                  name="firstname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldComponent
                      title="First Name"
                      field={field}
                      fieldState={fieldState}
                      placeholder="Enter First Name..."
                      htmlfor="shipform-firstname"
                    />
                  )}
                ></Controller>

                <Controller
                  name="lastname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldComponent
                      title="Last Name"
                      field={field}
                      fieldState={fieldState}
                      placeholder="Enter Last Name..."
                      htmlfor="shipform-lastname"
                    />
                  )}
                ></Controller>

                <Controller
                  name="mobileNumber"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldComponent
                      title="Mobile Number"
                      field={field}
                      fieldState={fieldState}
                      placeholder="Enter Mobile No..."
                      htmlfor="shipform-mobile"
                    />
                  )}
                ></Controller>

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldComponent
                      title="Email"
                      field={field}
                      fieldState={fieldState}
                      placeholder="Enter Email ID "
                      htmlfor="shipform-email"
                    />
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
                      <FieldLabel htmlFor="shipform-country">
                        Country <span className="text-red-600">*</span>
                      </FieldLabel>

                      <Countries
                        onChange={field.onChange}
                        value={field.value}
                      />

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
                      <FieldLabel htmlFor="shipform-state">
                        State <span className="text-red-600">*</span>
                      </FieldLabel>

                      <StateComponent
                        data={states}
                        value={field.value}
                        onChange={field.onChange}
                      />

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
                    <FieldComponent
                      title="Address1"
                      field={field}
                      fieldState={fieldState}
                      placeholder="Enter Address1... "
                      htmlfor="shipform-address1"
                    />
                  )}
                ></Controller>

                <Controller
                  name="address2"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldComponent
                      title="Address2"
                      field={field}
                      fieldState={fieldState}
                      placeholder="Enter Address2... "
                      htmlfor="shipform-address2"
                    />
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
                    <FieldComponent
                      title="City"
                      field={field}
                      fieldState={fieldState}
                      placeholder="Enter City... "
                      htmlfor="shipform-city"
                    />
                  )}
                ></Controller>

                <Controller
                  name="pincode"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldComponent
                      title="Pincode"
                      field={field}
                      fieldState={fieldState}
                      placeholder="Enter Pincode... "
                      htmlfor="shipform-pincode"
                    />
                  )}
                ></Controller>
              </div>
            </FieldGroup>
          </FieldSet>
          <div className="flex justify-end">
            <Button type="submit" form="shipform">
              continue
            </Button>
          </div>
        </form>
      }
      subheading="Create order"
    />
  )
}

export default ShipForm
