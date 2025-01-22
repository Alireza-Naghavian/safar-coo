import { ClassName_T } from "@/types/global.t";
import { InputProps_T } from "@/types/textField.t";
import { Input } from "@nextui-org/react";

export function TextField({label,size,type,isInvalid=false,variant="flat",...rest}: ClassName_T & InputProps_T) {
  return (
    <Input
      type={type}
      labelPlacement="outside"
      size={size}
      description={rest.description}
      variant={variant}
      placeholder={rest.placeholder as string}
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


