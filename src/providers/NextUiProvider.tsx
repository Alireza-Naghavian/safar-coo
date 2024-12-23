"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ChildrenProps } from "@/types/global.t";
function NextUiProvider({ children }: ChildrenProps) {
  return <NextUIProvider>{children}</NextUIProvider>
}

export default NextUiProvider;
