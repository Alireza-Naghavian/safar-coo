import React from "react";
import { Input, InputProps } from "@nextui-org/react";
import { InputProps_T } from "@/types/textField.t";
import { ClassName_T } from "@/types/global.t";
import useDisclosure from "@/hooks/useDisclosure";
import EyeSlashFilledIcon from "../../../../public/icons/svgs/EyeSlashFilledIcon";
import EyeFilledIcon from "../../../../public/icons/svgs/EyeFilledIcon";

export function TextField({label,size,type,isInvalid=false,variant="flat",...rest}: ClassName_T & InputProps_T) {
  return (
    <Input
      type={type}
      labelPlacement="outside"
      size={size}
      description={rest.description}
      variant={variant}
      placeholder={rest.placeholder}
      validate={()=>null}
      startContent={rest.startContent}
      endContent={rest.endContent}
      isInvalid={isInvalid}
      isClearable={rest.isClearable}
      color={rest.color}
      className={`${rest.className} `}
      label={
        <span className={`text-bodyB2semi  text-natural-black  ${rest.labelstyles}`}>
         {label}
        </span>
      }
    />
  );
}


