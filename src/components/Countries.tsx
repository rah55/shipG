import  { useEffect, useState } from "react"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Button } from "./ui/button"

function Countries({ onChange }: { onChange: any }) {
  const [countries, setCountries] = useState<any>([])

  //   console.log(value)
  async function fetchData() {
    try {
      const response = await fetch(
        "https://qa2.franchise.backend.shipgl.in/api/v1/location/countries"
      )
      const result = await response.json()

      setCountries(result?.data?.countries)
    } catch (error) {
      console.log("fetching data :" + error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Combobox
        items={countries}
       defaultValue={countries[0]?.country_iso2}
        onValueChange={onChange}
      >
        <ComboboxTrigger
          render={
            <Button
              variant="outline"
              className="w-64 h-11  justify-between font-normal"
            >
              <ComboboxValue>
        {(value) =>
          countries.find((item:any) => item.country_iso2 === value)
            ?.country_name || "Select Country 🔽"
        }
      </ComboboxValue>
            </Button>
          }
        />
        <ComboboxContent>
          <ComboboxInput showTrigger={false} placeholder="Search" />
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item ) => (
              <ComboboxItem key={item.country_iso2} value={item.country_iso2}  >
                {item.country_name+" (" + item.country_iso2 +")"}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </>
  )
}

export default Countries
