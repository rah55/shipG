import { useEffect } from "react"

export const useResetForm = (formslice: any, form: any) => {
  useEffect(() => {
    const shipment = formslice?.shipments?.[0]?.firstForm

    if (shipment) {
      form.reset({
        firstname: shipment.firstname || "",
        lastname: shipment.lastname || "",
        mobileNumber: shipment.mobileNumber || "",
        email: shipment.email || "",
        country: shipment.country || "",
        address1: shipment.address1 || "",
        address2: shipment.address2 || "",
        city: shipment.city || "",
        pincode: shipment.pincode || "",
        landmark: shipment.landmark || "",
        state: shipment.state || "",
      })
    }
  }, [formslice])
}
