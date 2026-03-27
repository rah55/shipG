
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"


type Props={
    field:any,
    fieldState:any,
    placeholder:string,
    htmlfor:string,
    title:string,


}

const FieldComponent = ({field,fieldState,placeholder,htmlfor,title}:Props) => {
  return (
    <Field className="max-w-sm p-2"
                      data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={htmlfor}>
                        {title} <span className="text-red-600">*</span>
                      </FieldLabel>
                       <Input
                        {...field}
                        id={htmlfor}
                        autoComplete="off"
                        placeholder={placeholder}
                        className="p-5 placeholder-red-300"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}

    </Field>
  )
}

export default FieldComponent



