import React from "react";
import { ChildrenProps } from "./global.t";

export type ButtonState_T="hover"|"disable"|"normal"
export type ButtonVars_T = "fill"|"outline"|"noBorder"|"rounded"
export type ButtonSizes_T="sm"|"md"|"lg"|"xl"|"xxl"
export  type NavLinks_T = {
  size: ButtonSizes_T;
  variant: ButtonVars_T;
  state: ButtonState_T;
  className?: string;
  target?: string;
};

export type Button_T= NavLinks_T&ChildrenProps  & React.ComponentProps<"button">