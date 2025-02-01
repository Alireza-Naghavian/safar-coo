import { IconProps } from "iconsax-react";
import React, { Dispatch, FC, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;
export type ChildrenProps = { children: React.ReactNode };
export type Size_T = "mobile" | "desktop";

export type Icon_T = FC<IconProps>;

export type ClassName_T = { className?: string | undefined };
export type Options_T = {
  key:string;
  label:string;
  _id:string;
  name:string;
};
