import { ChildrenProps, ClassName_T } from "./global.t";

type CloseModal_T = ()=>void
export type Modal_T =ClassName_T & ChildrenProps&{
    isShow: boolean;
    onClose :CloseModal_T
    effect: "bottom_to_top" | "ease_out" | "buttom_to_fit";
}
export type ContentProps_T =Omit<Modal_T,"effect"|"isShow">
export type HeaderProps_T =ContentProps_T;
