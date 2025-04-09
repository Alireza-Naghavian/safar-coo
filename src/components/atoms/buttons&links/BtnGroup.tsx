"use client";
import { BtnGroup_T } from "@/types/buttons.t";
import { articlesFilterOption } from "@/utils/constants";
import React from "react";


function BtnGroup({ activate, children,activeBtn,actionHandler }: BtnGroup_T) {
  return (
    <div
      className={`w-full  relative flex items-center child:size-full
        rounded-8  border-2  bg-white h-fit 
        sm:child:text-bodyB3Regular child:tr-300 
        child:text-bodyB4Regular child:text-natural-gray1
        `}
    >
      {children?
       children
        : articlesFilterOption.map((option) => {
            return (
              <button
                key={option.id}
                onClick={ ()=>{
                  if(activate){
                    const value = option.value
                    activate({value})
                    actionHandler({value})
                  }
                }}
                className={`
                    first:rounded-r-8 last:rounded-l-8 
                    ${activeBtn?.value === option.value ? "bg-primary-500" : "bg-white"}
                    sm:px-8 px-2 sm:py-4 py-3 sm:text-nowrap
                    `}
              >
                {option.title}
              </button>
            );
          })}
    </div>
  );
}

export default BtnGroup;
