"use client";
import React, { useState } from "react";
import {Switch} from "@heroui/switch";
import { ClassName_T } from "@/types/global.t";

export type Switch_T = ClassName_T & {
  label: string|null;
  name: string;
  key?:string

};
function CustomSwitch({ label, className, name }: Switch_T) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex items-center gap-x-1">
      {label && <label htmlFor={name} className={`text-white tr-300 
     ${className} ${isSelected && "!text-secondary-700"}`}>
            {label}

    </label>}
      <Switch
        onValueChange={setIsSelected}
        checked={isSelected}
        name={name}
        id={name}
        color="primary"
        size="sm"
        className={`*:h-[22px]  ${isSelected && "*:bg-secondary-500"}`}
   />
    </div>
  );
}

export default CustomSwitch;
