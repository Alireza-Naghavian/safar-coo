import { ChildrenProps, ClassName_T } from "@/types/global.t";
import React from "react";
export type InfoItem_T = ClassName_T &
  Partial<ChildrenProps> & {
    title: string|null;
    value?: string;
  };
function InfoCardWrapper({ children,className }: ChildrenProps&ClassName_T) {
  return (
    <div
      className={`
        w-full    overflow-x-auto   bg-accent-600 rounded-8 flex 
      items-center justify-between lg:gap-x-0 gap-x-10 px-12 py-5 ${className}
        `}
    >
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<InfoItem_T>)
          : child;
      })}
    </div>
  );
}

function InfoCardItem({ className, children, title, value }: InfoItem_T) {
  return (
    <div
      className={`flex w-full relative  flex-nowrap text-nowrap flex-col gap-y-6  items-center child:text-white  ${className}`}>
      <span className="text-bodyB3semi">{title}</span>
      <span className="text-bodyB4semi">
        {value || children}
      </span>
    </div>
  );
}

const InfoCard = Object.assign(InfoCardWrapper, {
  InfoCardItem,
});
export default InfoCard;
