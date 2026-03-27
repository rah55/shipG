import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ShipForm from "./ShipForm"
import ShipInfoForm from "./ShipInfoForm"
import { useState } from "react"

export default function ShipmentSteps() {
  const [isShipInfoDisabled, setIsShipInfoDisabled] = useState(true)
  const [activeAccordion, setActiveAccordion] = useState("Consignee Details") // track active accordion

  return (
    <Accordion
      type="single"
      collapsible
      value={activeAccordion}
      onValueChange={(value) => {
        setActiveAccordion(value || "") // track active accordion

        // If user clicks back on ShipForm, disable ShipInfoForm
        if (value === "Consignee Details") {
          setIsShipInfoDisabled(true)
        }
      }}
      className="w-full border-b border-black bg-gray-200 p-2"
    >
      <div className="border-b border-black bg-gray-200">
        <AccordionItem value="Consignee Details">
          <AccordionTrigger>
            <div className="text-xl">Consignee Details</div>
          </AccordionTrigger>
          <AccordionContent>
            <ShipForm
              onClick={() => {
                setIsShipInfoDisabled(false) // unlock ShipInfoForm
                setActiveAccordion("Shipment Information") // auto-expand ShipInfoForm
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </div>

      <AccordionItem value="Shipment Information" disabled={isShipInfoDisabled}>
        <AccordionTrigger>
          <div className="text-xl">Shipment Information</div>
        </AccordionTrigger>
        <AccordionContent>
          <ShipInfoForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
