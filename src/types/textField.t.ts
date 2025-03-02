import { InputProps } from "@heroui/input";
import { ClassName_T, Size_T } from "./global.t";
import { FieldErrors, FieldValues, Message, UseFormRegister, ValidationRule } from "react-hook-form";

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
    touchedFields: Partial<Record<keyof T, boolean>>;
    name:string
  }&React.ComponentProps<"input">






export type TextAria_T = Omit<InputProps_T<FieldValues>, "variant" | "size"> &
  React.ComponentProps<"textarea"> & {
    variant: "outLine" | "freeMode";
    size?: "medium" | "free";
    // validattionschema?: RegisterOptions;
  };
