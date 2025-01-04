"use client";
import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { ClassName_T } from "@/types/global.t";

type Switch_T = ClassName_T & {
  title: string;
  hasTitle?: boolean;
  name: string;


};
function CustomSwitch({ hasTitle = true, title, className, name }: Switch_T) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex items-center gap-x-1">
      {hasTitle && <label htmlFor={name} className={`text-white tr-300 
     ${className} ${isSelected && "text-secondary-400"}`}>
            {title}

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
