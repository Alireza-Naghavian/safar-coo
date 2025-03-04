"use client";
import { ClassName_T, SetState } from "@/types/global.t";
import { Switch } from "@heroui/switch";

export type Switch_T = ClassName_T & {
  label: string|null;
  name: string;
  key?:string
  isSelected:boolean,
  setIsSelected:SetState<boolean>

};
function CustomSwitch({ label, className, name,isSelected,setIsSelected }: Switch_T) {


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
