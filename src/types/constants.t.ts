import { Icon_T } from "./global.t";

export type menuItems_T = {
  title: string;
  target: string;
  _id: string;
  Icon?: Icon_T;
};
export type FooterLinks_T = {
  title: string;
  items: Pick<menuItems_T,"title"|"target">[];
};
