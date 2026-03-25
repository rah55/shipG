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


function StateComponent({ onChange, data,  }: { data: any; onChange: any; }) {
  console.log(data)
  return (
    <Combobox    items={data} onValueChange={onChange}>
      <ComboboxTrigger
        render={
          <Button className="h-11 w-64 justify-between font-normal bg-white text-black border border-gray-200">
            <ComboboxValue  placeholder="Select State 🔽" />
          </Button>
        }
      />
      <ComboboxContent>
        <ComboboxInput  showTrigger={false} placeholder="Search" />
        <ComboboxEmpty>No states found</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item?.state_id} value={item?.state_name}>
              {item?.state_name}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default StateComponent
