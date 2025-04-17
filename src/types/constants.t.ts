import { IconProps } from "iconsax-react";
import { Icon_T } from "./global.t";

export type menuItems_T = {
  title: string;
  target: string;
  _id: string;
  Icon?: Icon_T;
  IconProps?:IconProps
};
export type FooterLinks_T = {
  title: string;
  items: Pick<menuItems_T,"title"|"target">[];
};
export type ArticleCategories_T={
  key:string
label:string
_id:string
name:string
}