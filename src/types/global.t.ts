import React, { Dispatch, SetStateAction } from "react";

export type SetState<T>= Dispatch<SetStateAction<T>>
export type ChildrenProps = {children:React.ReactNode};
export type Size_T =  "mobile" | "desktop";