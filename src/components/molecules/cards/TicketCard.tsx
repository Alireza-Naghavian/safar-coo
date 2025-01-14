import { ChildrenProps, ClassName_T } from "@/types/global.t";
import React from "react";
export type TicketItem_T = ClassName_T &
  Partial<ChildrenProps> & {
    title: string;
    value?: string;
  };
function TicketCardWrapper({ children }: ChildrenProps) {
  return (
    <div
      className="w-full   overflow-x-auto relative  bg-accent-600 rounded-8 flex 
      items-center justify-between lg:gap-x-0 gap-x-10 px-12 py-5"
    >
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<TicketItem_T>)
          : child;
      })}
    </div>
  );
}

function TicketCardItem({ className, children,title, value }: TicketItem_T) {
  return (
    <div
      className={`flex w-full flex-nowrap text-nowrap flex-col gap-y-6 items-center child:text-white  ${className}`}
    >
      <span className=" text-bodyB3semi ">{title}</span>
      <span className=" text-bodyB4semi">
        {value || children}
      </span>
    </div>
  );
}

const TicketCard = Object.assign(TicketCardWrapper, {
  TicketCardItem,
});
export default TicketCard;
