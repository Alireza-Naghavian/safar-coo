import { InputProps } from "@nextui-org/react";
import { Size_T } from "./global.t";

export type SearchBox_T = {
  size: Size_T;
  className?: string;
  placeholder?: string;
};
export type InputProps_T = { labelstyles?: string } & Pick<
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
  | "placeholder"
  | "onFocus"
  | "color"
  | "isInvalid"
  | "validate"
  | "startContent"
  | "endContent"
>;

