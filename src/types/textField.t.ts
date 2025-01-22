import { InputProps } from "@nextui-org/react";
import { Size_T } from "./global.t";

export type SearchBox_T = {
  size: Size_T;
  className?: string;
  placeholder?: string;
};
export type InputProps_T = { labelstyles?: string , placeholder:string|null} & Pick<
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
>;

export type TextAria_T = Omit<InputProps_T, "variant"|"size"> &
  React.ComponentProps<"textarea"> & {
    variant: "outLine" | "freeMode";
    size?: "medium" | "free";
    // validattionschema?: RegisterOptions;
  
  };
