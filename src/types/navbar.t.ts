import React from "react";
import { Size_T } from "./global.t";

export type NavItem_T =  {
  className?: string;
  size:Size_T;
  target: string;
  title: string;
  Icon?:React.FC
};
