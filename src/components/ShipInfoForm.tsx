import NewCard from "./NewCard"

import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { shipmentFormSchema } from "@/utils/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldError, FieldGroup, FieldSet } from "./ui/field"

import { DatePicker } from "./DatePicker"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import FieldComponent from "./FieldComponent"
import InputField from "./InputField"
import Itemdetails from "./Itemdetails"
import DropDown from "./DropDown"
import { useDispatch, useSelector } from "react-redux"
import { addSecondFormData,clearData } from "@/utils/formSlice"
import { useEffect } from "react"

const currency = ["INR", "USD", "EUR", "GBP", "CAD", "AUD", "AED", "SAR", "SGD"]
const price = ["0", "0.25%", "3%", "5%", "12%", "18%", "28%"]

function ShipInfoForm() {
  const { formslice }: any = useSelector((data: any) => data)
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof shipmentFormSchema>>({
    resolver: zodResolver(shipmentFormSchema),
    defaultValues: {
      invoiceNumber: "",
      invoiceCurrency: undefined,
      invoiceOrder: "",
      invoiceDate: undefined,
      invoiceIOSS: "",
      weight: "",
      length: "",
      height: "",
      breadth: "",
      productName: "",
      productHSN: "",
      productSKU: "",
      productQty: "",
      productPrice: "",
      productIGST: "",

      // weight:undefined
    },
  })
  useEffect(() => {
    const shipment = formslice?.shipments?.[0]?.secondForm

    if (shipment) {
      form.reset({
        invoiceNumber: shipment.invoiceNumber || "",
        invoiceCurrency: shipment.invoiceCurrency || "",
        invoiceOrder: shipment.invoiceOrder || "",
        invoiceDate: shipment.invoiceDate || "",
        invoiceIOSS: shipment.invoiceIOSS || "",
        weight: shipment.weight || "",
        length: shipment.length || "",
        height: shipment.height || "",
        breadth: shipment.breadth || "",
        productName: shipment.productName || "",
        productHSN: shipment.productHSN || "",
        productSKU: shipment.productSKU || "",
        productQty: shipment.productQty || "",
        productPrice: shipment.productPrice || "",
        productIGST: shipment.productIGST || "",
      })
    }
  }, [formslice.shipments])

  function onSubmit(data: any) {
    console.log(data)
    dispatch(addSecondFormData(data))
  } 
  function clear() {
    console.log()
    dispatch(clearData())
  } 



  return (
    <div>
      <NewCard heading=""
        subheading="Shipment Information"
        xyz={
          <form  className="p-5" id="shipmentForm" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldSet>
              <h1 className="font-bold">Shipment Information</h1>
              <FieldGroup className="flex">
                <div className="grid grid-cols-3 gap-2">
                  <Controller
                    name="invoiceNumber"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FieldComponent
                        title=" Invoice Number"
                        field={field}
                        fieldState={fieldState}
                        placeholder="Enter Invoice Number..."
                        htmlfor="shipform-InvoiceNumber"
                      />
                    )}
                  ></Controller>
                  <Controller
                    name="invoiceCurrency"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field className="max-w-sm p-2">
                        <FieldLabel htmlFor="shipform-InvoiceCurrency">
                          Currency <span className="text-red-600">*</span>
                        </FieldLabel>

                        <DropDown
                          currency={currency}
                          onChange={field.onChange}
                          value={field.value}
                          placeholder="Select Currency "
                         
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  ></Controller>
                  <Controller
                    name="invoiceOrder"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FieldComponent
                        title=" Order/Reference ID"
                        field={field}
                        fieldState={fieldState}
                        placeholder="Enter Order ID..."
                        htmlfor="shipform-InvoiceOrder"
                      />
                    )}
                  ></Controller>

                  <Controller
                    name="invoiceDate"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field className="max-w-sm p-2">
                        {/* <Countries onChange={field.onChange}  /> */}
                        <DatePicker
                          value={
                            field.value
                              ? typeof field.value === "string"
                                ? new Date(field.value)
                                : field.value
                              : undefined
                          }
                          onChange={(date: Date) =>
                            field.onChange(date.toISOString().split("T")[0])
                          }
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  ></Controller>

                  <Controller
                    name="invoiceIOSS"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FieldComponent
                        title=" IOSS Number "
                        field={field}
                        fieldState={fieldState}
                        placeholder="Enter IOSS..."
                        htmlfor="shipform-Invoice"
                      />
                    )}
                  ></Controller>
                </div>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <h1 className="font-bold">Box Measurement</h1>
              <FieldGroup className="flex">
                <div className="grid grid-cols-4 gap-2">
                  <Controller
                    name="weight"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <InputField
                        field={field}
                        fieldState={fieldState}
                        name="weight"
                        placeholder="Enter the Weight...."
                        label="Weight"
                        unit="cm"
                      />
                    )}
                  ></Controller>
                  <Controller
                    name="length"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <InputField
                        field={field}
                        fieldState={fieldState}
                        name="length"
                        placeholder="Enter the Length...."
                        label="Length"
                        unit="cm"
                      />
                    )}
                  ></Controller>
                  <Controller
                    name="breadth"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <InputField
                        field={field}
                        fieldState={fieldState}
                        name="breadth"
                        placeholder="Enter the Breadth...."
                        label="Breadth"
                        unit="cm"
                      />
                    )}
                  ></Controller>
                  <Controller
                    name="height"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <InputField
                        field={field}
                        fieldState={fieldState}
                        name="Height"
                        placeholder="Enter the height...."
                        label="height"
                        unit="cm"
                      />
                    )}
                  ></Controller>
                </div>
              </FieldGroup>
            </FieldSet>
            <br></br>

            <FieldSet>
              <h1 className="font-bold">Item(s) Details</h1>
              <FieldGroup className="flex">
                <div className="grid grid-cols-6 gap-6">
                  <Controller
                    name="productName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Itemdetails
                        field={field}
                        fieldState={fieldState}
                        name="productName"
                        placeholder="Enter Product Name...."
                        label="Product Name"
                      />
                    )}
                  ></Controller>

                  <Controller
                    name="productHSN"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Itemdetails
                        field={field}
                        fieldState={fieldState}
                        name="productHSN"
                        placeholder="Enter Product HSN...."
                        label=" HSN"
                      />
                    )}
                  ></Controller>
                  <Controller
                    name="productSKU"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Itemdetails
                        field={field}
                        fieldState={fieldState}
                        name="productSKU"
                        placeholder="Enter Product SKU...."
                        label=" SKU"
                      />
                    )}
                  ></Controller>
                  <Controller
                    name="productQty"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Itemdetails
                        field={field}
                        fieldState={fieldState}
                        name="productQty"
                        placeholder="Enter Product QTY...."
                        label=" QTY"
                      />
                    )}
                  ></Controller>
                  <Controller
                    name="productPrice"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field className="max-w-sm p-2">
                        <FieldLabel htmlFor="productPrice">
                          Price <span className="text-red-600">*</span>
                        </FieldLabel>

                       <DropDown
                          currency={price}
                          onChange={field.onChange}
                          value={field.value}
                          placeholder="Price Currency "
                         
                        />
                       
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  ></Controller>

                  <Controller
                    name="productIGST"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Itemdetails
                        field={field}
                        fieldState={fieldState}
                        name="productIGST"
                        placeholder="Enter Product IGST...."
                        label=" IGST"
                      />
                    )}
                  ></Controller>
                </div>
              </FieldGroup>
            </FieldSet>
            <div className="flex justify-end">
              <Button type="submit" form="shipmentForm">
                Continue
              </Button>
            </div>
          </form>
        }
      ></NewCard>
      <Button onClick={clear}> Clear</Button> 
    </div>
  )
}

export default ShipInfoForm
