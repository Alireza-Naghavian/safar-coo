"use client";
import { CustomSelectProps } from "@/types/textField.t";
import { Select } from "@heroui/select";
import { FieldValues, Path, RegisterOptions } from "react-hook-form";

function CustomSelect<T extends FieldValues>({
  name,
  register,
  touchedFields,
  errors,
  ...rest
}: CustomSelectProps<T>) {
  const hasError = errors?.[name];
  const hasTouched = !!touchedFields?.[name];
  return (
    <div>
      <Select {...register(name as Path<T>,rest.validationSchema as  RegisterOptions<T>)} {...rest}>
        {rest.children}
      </Select>

      {hasError && hasTouched && (
        <p className="text-red-500 text-xs mt-1 h-4">
          {errors?.[name as string]?.message as string}
        </p>
      )}
    </div>
  );
}

export default CustomSelect;
