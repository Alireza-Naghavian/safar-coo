import ClientLayout from "@/components/layouts/ClientLayout";
import { ChildrenProps } from "@/types/global.t";
import React from "react";

function layout({ children }: ChildrenProps) {
  return (
    <ClientLayout>
      <main className="max-w-[1920px] relative mx-auto overflow-x-hidden min-h-screen  ">
        <section className="md:px-[113px] px-5">{children}</section>
      </main>
    </ClientLayout>
  );
}

export default layout;
