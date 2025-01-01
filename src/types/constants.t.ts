import { Icon_T } from "./global.t"

export type menuItems_T = {
    title:string
target:string
_id:string,
Icon?:Icon_T
}
type LinkItem_T=    {
    href:string,
    content:string
}
export type FooterLinks_T={
    title:string,
    items:LinkItem_T[]
}