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

function StateComponent({ onChange, data ,value }: { data: any; onChange: any ;value:string}) {
  
  return (
    <Combobox items={data} onValueChange={onChange} value={value}  >
      <ComboboxTrigger
        render={
          <Button className="h-11 w-64 justify-between border border-gray-200 bg-white font-normal text-black">
            <ComboboxValue>
              {(val) =>
                data.find((item: any) => item.state_name === val)
                  ?.state_name || "Select State 🔽"
              }
            </ComboboxValue>
          </Button>
        }
      />
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search" />
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
