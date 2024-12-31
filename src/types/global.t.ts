
import React, { Dispatch, FC, SetStateAction } from "react";

export type SetState<T>= Dispatch<SetStateAction<T>>
export type ChildrenProps = {children:React.ReactNode};
export type Size_T =  "mobile" | "desktop";
export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
}
export type Icon_T =React.FC