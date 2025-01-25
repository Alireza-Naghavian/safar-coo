import { TextAria_T } from "@/types/textField.t";
import { cva } from "class-variance-authority";
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
function TextAriaField({
  label,
  id,
  required,
  readOnly,
  value,
  name,
  placeholder,
  variant,size,className
}: TextAria_T) {
  return (
    <div className="flex flex-col gap-y-2">
      {label && (
        <label htmlFor={id} className={"relative  pb-1"}>
          <span className={"text-bodyB2Regular"}>{label}</span>
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        cols={80}
        readOnly={readOnly}
        //  {...register(name, validattionschema)}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        className={TexAriaStyles({ variant,size,className})}
      />
      {/* {errors && errors[name] && (
     <span className="text-red-500 block text-sm mt-1">
       {errors[name]?.message}
     </span>
   )} */}
    </div>
  );
}

export default TextAriaField;
