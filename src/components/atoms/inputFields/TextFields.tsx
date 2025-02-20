"use client";
import { InputProps_T } from "@/types/textField.t";
import { FieldValues, Path } from "react-hook-form";
import {Input} from "@heroui/input";
export function TextField<T extends FieldValues>({
  label,
  name,
  errors,
  touchedFields,
  register,
  size,
  type,
  variant = "flat",
  id,
  ...rest
}: InputProps_T<T>) {
  const hasError = errors?.[name];
  const hasTouched = !!touchedFields?.[name];
  console.log(hasTouched)
  return (
    <div className="flex flex-col w-full gap-y-1">
      {register !== undefined && (
        <Input
          {...register(name as Path<T> )}
          type={type}
          labelPlacement="outside"
          size={size}
          description={rest.description}
          variant={variant}
          placeholder={rest.placeholder as string}
          isInvalid={false}
          startContent={rest.startContent}
          endContent={rest.endContent}
          isClearable={rest.isClearable}
          id={id}
          name={name as string}
          color={rest.color}
          className={`${rest.className} ${
            hasError ? "!border-red-500" : ""
          }`}
          value={rest.value}
          readOnly={rest.readOnly}
          label={
            <span
              className={`text-bodyB2semi text-natural-black ${rest.labelstyles}`}
            >
              {label}
            </span>
          }
        />
      )}

      {hasError && hasTouched && (
        <p className="text-red-500 text-xs mt-1">{errors?.[name as string]?.message as string}</p>
      )}
    </div>
  );
}
