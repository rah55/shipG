import { Input } from "@/components/ui/input"
import { Field, FieldError, FieldLabel } from "./ui/field"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "./ui/button-group"

type Props = {
  name: string
  placeholder: string
  label: String
  unit: string
  field:any,
  fieldState:any
  // heading:string,
}

function InputField({ name, placeholder, unit, label, field,fieldState }: Props) {
  return (
    <div >
      <Field>
        <FieldLabel htmlFor={name}>{label}<span className="text-red-600">*</span></FieldLabel>
        <ButtonGroup>
          <Input className="h-10" {...field} id={name} placeholder={placeholder} />
          <Button className="h-10" variant="outline">{unit}</Button>
        </ButtonGroup>
      </Field>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </div>
  )
}

export default InputField
