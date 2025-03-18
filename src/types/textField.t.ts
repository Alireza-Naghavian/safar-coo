import { InputProps } from "@heroui/input";
import { ClassName_T, Size_T } from "./global.t";
import { FieldErrors, FieldValues, Message, Path, UseFormRegister, ValidationRule } from "react-hook-form";
import { Select } from "@heroui/select";

export type SearchBox_T = {
  size: Size_T;
  className?: string;
  placeholder?: string;
};
export type RegisterOptions = Partial<{
  required?: Message | ValidationRule<boolean>;
  min?: ValidationRule<number | string>;
  max?: ValidationRule<number | string>;
  maxLength?: ValidationRule<number | string>;
  minLength?: ValidationRule<number | string>;
  pattern?: ValidationRule<RegExp>;
  validate: Record<string, string|number|boolean>;
}>;
export type InputProps_T<T extends FieldValues > = ClassName_T & {
  labelstyles?: string;
  placeholder: string | null;
  validationSchema?:RegisterOptions
} & Pick<
    InputProps,
    | "label"
    | "value"
    | "variant"
    | "size"
    | "onValueChange"
    | "description"
    | "type"
    | "required"
    | "readOnly"
    | "isClearable"
    | "isDisabled"
    | "labelPlacement"
    | "onFocus"
    | "color"
    | "isInvalid"
    | "validate"
    | "startContent"
    | "endContent"
    
  >&{
    register:UseFormRegister<T>;
    errors:FieldErrors 
    touchedFields?: Partial<Record<keyof T, boolean| boolean[]>>;
    name:string
  }&React.ComponentProps<"input">



  export interface CustomSelectProps<T extends FieldValues>
  extends React.ComponentPropsWithRef<typeof Select> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  validationSchema?:RegisterOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  touchedFields?: Partial<Record<keyof T, any>>;
}


export type TextAria_T <T extends FieldValues>= Omit<InputProps_T<FieldValues>, "variant" | "size"|"register"|"touchedFields"> &
 React.ComponentProps<"textarea"> & {
  touchedFields: Partial<Record<keyof T, boolean>>;
  register:UseFormRegister<T>;
  variant: "outLine" | "freeMode";
    size?: "medium" | "free";
    validattionschema?: RegisterOptions;
  };
