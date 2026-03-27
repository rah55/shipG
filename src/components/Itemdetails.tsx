import { Field,  FieldError,  FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

type Props ={
    label:string,
    name:string,
    placeholder:string,
    field:any,
    fieldState:any
}

function Itemdetails({label,name,placeholder,field,fieldState}:Props) {
  return (
    <Field>
      <FieldLabel htmlFor={name}>{label} <span className="text-red-600">*</span></FieldLabel>
      <Input className="h-10"
        id={name}
        {...field}
        type="text"
        placeholder={placeholder}
      />
       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
     
    </Field>
  )
}

export default Itemdetails
