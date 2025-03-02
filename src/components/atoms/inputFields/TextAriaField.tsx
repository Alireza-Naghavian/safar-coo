import {  TextAria_T } from "@/types/textField.t";
import { cva } from "class-variance-authority";
import { FieldValues, Path, RegisterOptions } from "react-hook-form";
const TexAriaStyles = cva(
  `
    block p-4.5 md:p-4 focus:outline-none w-full text-right
    text-gray-900 dark:text-natural-black placeholder:text-slate-500/70 
    font-DanaMedium  rounded-xl
   `,
  {
    variants: {
      variant: {
        outLine: "bg-white  ",
        freeMode: "bg-gray-100 dark:bg-dark  ",
      },
      size: {
        medium: "h-[142px]  py-5 px-4 text-base leading-[22px]",
        free: " py-[12px] px-5 text-base leading-6",
      },
    },
    defaultVariants: {
      variant: "outLine",
      size: "medium",
    },
  }
);
function TextAriaField<T extends FieldValues>({
  label,
  variant,
  errors,
  touchedFields,
  value,
  size,
  name,
  register,
  className,
  ...rest
}: TextAria_T<T>) {
  const hasError = errors?.[name];
  const hasTouched = !!touchedFields?.[name];
  return (
    <div className="flex flex-col gap-y-2">
      {label && (
        <label htmlFor={rest.id} className={"relative  pb-1"}>
          <span className={"text-bodyB2Regular"}>{label}</span>
          {rest.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        cols={80}
        readOnly={rest.readOnly}
        {...register(
          name as Path<T>,
          rest.validationSchema as  RegisterOptions<T>
        )}
        id={rest.id}
        value={value}
        name={name}
        placeholder={rest.placeholder}
        className={TexAriaStyles({ variant, size, className })}
      />
      {hasError && hasTouched && (
        <p className="text-red-500 text-xs mt-1">
          {errors?.[name as string]?.message as string}
        </p>
      )}
    </div>
  );
}

export default TextAriaField;
