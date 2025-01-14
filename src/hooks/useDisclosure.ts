import { useState } from "react"
type DefaultState=Partial<boolean>
export type Disclosure_T =DefaultState& {
    open:()=>void;
    close:()=>void;
    isOpen:boolean
    
}
const useDisclosure  = (defState:DefaultState=false)=>{
const [isOpen,setIsOpen]= useState<boolean>(defState);

const open = ()=> !isOpen && setIsOpen(true)

const close= ()=>isOpen && setIsOpen(false)

const toggle=()=>isOpen ? close() : open();

return {isOpen,close,open,toggle,defState} as const
}
export default useDisclosure