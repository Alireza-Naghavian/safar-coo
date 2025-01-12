import { IconProps } from "iconsax-react";
import { Icon_T, Size_T } from "./global.t";

export type NavItem_T =  {
  className?: string;
  size:Size_T;
  target: string;
  title: string;
  Icon?:Icon_T
  IconProps?:IconProps
  IconStyles?:string
};
