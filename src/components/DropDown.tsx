import {
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox";
import { Button } from "./ui/button";

interface DropdownProps {
  currency: string[];
  onChange: (value: string) => void // fixed type
  value?: string;
  placeholder?: string;
  classname?:string
}

function DropDown({ onChange, currency, value, placeholder ,classname }: DropdownProps) {
  return (
    <div>
      <Combobox  items={currency} value={value} onValueChange={onChange}>
        <ComboboxTrigger
          render={
            <Button
              variant="outline"
              className={`h-11  justify-between font-normal ${classname || "w-52"}`}
            >
              <ComboboxValue>{() => value || placeholder}</ComboboxValue>
            </Button>
          }
        />
        <ComboboxContent className={classname}>
          <ComboboxList>
            {(item) => (
              <ComboboxItem  key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
          
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export default DropDown;