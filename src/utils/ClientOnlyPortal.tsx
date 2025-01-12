"use client";
import useDisclosure from "@/hooks/useDisclosure";
import { ChildrenProps } from "@/types/global.t";
import { useLayoutEffect } from "react";
import { createPortal } from "react-dom";

function ClientOnlyPortal({ children }: ChildrenProps) {
  const { isOpen: isClient, open } = useDisclosure();
  useLayoutEffect(() => {
    open();
  }, []);
  if (!isClient) return null;
  return createPortal(children, document.body);
}

export default ClientOnlyPortal;
