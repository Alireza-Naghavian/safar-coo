import { useState } from "react"
export type Disclosure_T = {
    open:()=>void;
    close:()=>void;
    isOpen:boolean
}
const useDisclosure  = ()=>{
const [isOpen,setIsOpen]= useState<boolean>(false);

const open = ()=> !isOpen && setIsOpen(true)

const close= ()=>isOpen && setIsOpen(false)

const toggle=()=>isOpen ? close() : open();

return {isOpen,close,open,toggle} as const
}
export default useDisclosure